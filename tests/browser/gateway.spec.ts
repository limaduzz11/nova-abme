import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

async function revealWholePage(page: Page) {
  const revealItems = page.locator('.reveal');
  for (let index = 0; index < await revealItems.count(); index += 1) {
    await revealItems.nth(index).scrollIntoViewIfNeeded();
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
  // Aguarda o término das transições de reveal (700ms) para medir o estado final.
  await page.waitForTimeout(850);
}

async function gotoPage(page: Page) {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-gateway-ready', 'true');
}

test('desktop keeps the main routes visible and captures a reference', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await gotoPage(page);

  await expect(page).toHaveTitle('Eduardo Paranhos — Desenvolvedor de Software | TOTVS Protheus · ADVPL, APIs & SQL Server');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('#hero-title')).toBeVisible();
  await expect(page.locator('#engineering')).toBeVisible();
  await expect(page.locator('#results')).toBeVisible();
  await expect(page.locator('#work')).toBeVisible();
  await expect(page.locator('#connect')).toBeVisible();
  await revealWholePage(page);
  await page.locator('html').evaluate((element) => element.setAttribute('data-reference-capture', 'true'));

  await page.screenshot({ path: 'docs/screenshots/desktop-1440.png', fullPage: true });
});

test('mobile remains navigable and captures a reference', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoPage(page);

  await expect(page.locator('#hero-title')).toBeVisible();
  await expect(page.locator('.command-trigger')).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('overflow-x', 'hidden');
  await revealWholePage(page);
  await page.locator('html').evaluate((element) => element.setAttribute('data-reference-capture', 'true'));

  await page.screenshot({ path: 'docs/screenshots/mobile-390.png', fullPage: true });
});

test('command palette supports shortcut, filtering and escape focus return', async ({ page }) => {
  await gotoPage(page);
  const trigger = page.locator('[data-command-open]').first();
  const dialog = page.locator('#command-palette');

  await trigger.focus();
  await page.keyboard.press('Control+KeyK');
  await expect(dialog).toBeVisible();
  await expect(page.locator('[data-command-search]')).toBeFocused();

  await page.locator('[data-command-search]').fill('linkedin');
  await expect(page.locator('[data-command-item]:visible')).toHaveCount(1);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('stack tabs are keyboard navigable and interactive', async ({ page }) => {
  await gotoPage(page);

  const firstStackItem = page.locator('[data-stack-option]').first();
  const secondStackItem = page.locator('[data-stack-option]').nth(1);
  await firstStackItem.focus();
  await page.keyboard.press('ArrowDown');
  await expect(secondStackItem).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('[data-stack-title]')).toContainText('módulos operacionais');
});

test('reduced motion exposes stable content without animation dependency', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await gotoPage(page);

  const firstReveal = page.locator('.reveal').first();
  await expect(firstReveal).toBeVisible();
  await expect(firstReveal).toHaveCSS('opacity', '1');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});

test('responsive layout stays inside the viewport matrix', async ({ page }) => {
  for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await gotoPage(page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(0);
    await expect(page.locator('#hero-title')).toBeVisible();
  }
});

test('projects carousel exposes counter, dots and arrow navigation', async ({ page }) => {
  await gotoPage(page);
  const current = page.locator('[data-work-current]');
  await expect(current).toHaveText('01');

  await page.locator('[data-work-next]').click();
  await expect(current).toHaveText('02', { timeout: 5000 });

  const secondDot = page.locator('[data-work-dot]').nth(1);
  await expect(secondDot).toHaveAttribute('aria-current', 'true');

  await page.locator('[data-work-prev]').click();
  await expect(current).toHaveText('01', { timeout: 5000 });
});

test('tech stack reveals level and usage detail on interaction', async ({ page }) => {
  await gotoPage(page);
  const firstTech = page.locator('[data-tech-button]').first();
  const detail = page.locator('[data-tech-detail]');

  await expect(detail).toBeHidden();
  await firstTech.click();
  await expect(firstTech).toHaveAttribute('aria-expanded', 'true');
  await expect(detail).toBeVisible();
  await expect(page.locator('[data-tech-detail-name]')).toHaveText('ADVPL / TL++');
  await expect(page.locator('[data-tech-detail-level]')).toHaveText(/Avançado|Advanced/);
  const uses = page.locator('[data-tech-detail-uses] li');
  await expect(uses.first()).toContainText(/SIGAFIN/);

  // clicar de novo fecha
  await firstTech.click();
  await expect(detail).toBeHidden();
});

test('language switch navigates to the localized page', async ({ page }) => {
  await gotoPage(page);
  await page.locator('[data-lang-option][data-lang-target="en"]').click();
  await page.waitForURL('**/en/', { timeout: 10_000 });
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page).toHaveTitle(/Software Developer/);
  await expect(page.locator('#hero-title')).toBeVisible();
});

test('page has no automated accessibility violations', async ({ page }) => {
  await gotoPage(page);
  await revealWholePage(page);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('localized page has no automated accessibility violations', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveAttribute('data-gateway-ready', 'true');
  await revealWholePage(page);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
