import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

async function exists(path) {
  await access(path);
  return true;
}

const indexHtml = await readFile(join(dist, 'index.html'), 'utf8');
const notFoundHtml = await readFile(join(dist, '404.html'), 'utf8');
const headers = await readFile(join(dist, '_headers'), 'utf8');
const robots = await readFile(join(dist, 'robots.txt'), 'utf8');

test('static routes and metadata exist', async () => {
  assert.ok(await exists(join(dist, 'index.html')));
  assert.ok(await exists(join(dist, '404.html')));
  assert.match(indexHtml, /<html lang="pt-BR"/);
  assert.match(indexHtml, /<title>Eduardo Paranhos — Desenvolvedor ADVPL \/ TOTVS Protheus · APIs &amp; ERP<\/title>/);
  assert.match(indexHtml, /property="og:locale" content="pt_BR"/);
  assert.match(indexHtml, /application\/ld\+json/);
  assert.match(indexHtml, /ProfilePage/);
  assert.match(indexHtml, /TOTVS Protheus/);
  assert.match(indexHtml, /rel="canonical"/);
  assert.match(indexHtml, /property="og:image"[^>]+og-image\.png/);
  assert.match(indexHtml, /href="[^"]*eduardo-paranhos-cv\.pdf"/);
  assert.match(indexHtml, /href="https:\/\/wa\.me\/[^"]+"/);
  assert.match(notFoundHtml, /CAMINHO_<em>NÃO ENCONTRADO\.<\/em>/);
});

test('core navigation anchors resolve to rendered sections', () => {
  const ids = new Set([...indexHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const fragments = [...indexHtml.matchAll(/href="(#[^"]+)"/g)].map((match) => match[1].slice(1));
  assert.ok(ids.has('top'));
  assert.ok(ids.has('main-content'));
  assert.ok(ids.has('engineering'));
  assert.ok(ids.has('results'));
  assert.ok(ids.has('work'));
  assert.ok(ids.has('lab'));
  assert.ok(ids.has('business'));
  assert.ok(ids.has('connect'));
  fragments.forEach((fragment) => assert.ok(ids.has(fragment), `missing fragment #${fragment}`));
});

test('external links use safe new-tab attributes', () => {
  const newTabAnchors = [...indexHtml.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].map((match) => match[0]);
  assert.ok(newTabAnchors.length >= 6);
  newTabAnchors.forEach((anchor) => assert.match(anchor, /rel="noopener noreferrer"/));
});

test('security headers and privacy contract are present', () => {
  assert.match(headers, /Strict-Transport-Security:/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /Referrer-Policy:/);
  assert.match(headers, /Permissions-Policy:/);
  assert.match(headers, /Content-Security-Policy:/);
  assert.match(headers, /connect-src 'self'/);
  assert.doesNotMatch(headers, /unsafe-(?:inline|eval)/);
  assert.match(robots, /Sitemap: https:\/\/nova-abme\.pages\.dev\//);
  assert.doesNotMatch(indexHtml, /google-analytics|googletagmanager|hotjar|facebook\.net/i);
});

test('the generated artifact does not reference local runtime dependencies', async () => {
  const entries = await readdir(dist, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && /\.(?:html|js|css|json|txt|svg)$/.test(entry.name));
  for (const entry of files) {
    const content = await readFile(join(dist, entry.name), 'utf8');
    assert.doesNotMatch(content, /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/i, entry.name);
    assert.doesNotMatch(content, /javascript:/i, entry.name);
  }
});
