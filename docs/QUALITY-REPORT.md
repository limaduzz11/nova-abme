# Quality report — NOVA Abme

## Local release candidate

- **Date:** 2026-09-16
- **Artifact:** Astro static build served from `dist/`
- **Lighthouse runner:** Chrome for Testing 153
- **Browser smoke:** Playwright + Firefox

### Lighthouse

The run targeted the local static preview. It is a baseline, not a production
claim; production must be measured again after a real Pages deployment.

| Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Observed Core Web Vitals in the run:

- LCP: `1.4 s` (local run; small-run variance observed)
- CLS: `0`

### Browser and interaction checks

- 7 Playwright tests passed on Firefox.
- Command palette: shortcut, filter, arrow navigation and Escape focus return.
- Audience context: `sessionStorage`, pressed state and CTA emphasis.
- Stack index: keyboard arrow selection and contextual panel update.
- Reduced motion: stable content with no animation dependency.
- Automated Axe scan: zero violations after the complete page was revealed.
- Horizontal overflow: no overflow at `320`, `375`, `390`, `430`, `768`,
  `1024`, `1280`, `1440` and `1920` pixels.
- Reference screenshots: [desktop](screenshots/desktop-1440.png) and
  [mobile](screenshots/mobile-390.png).

Safari/WebKit was not available in the execution environment. It remains a
post-deploy cross-browser follow-up, not a hidden pass claim.

### Static and supply-chain checks

- `astro check`: 0 errors, 0 warnings, 0 hints.
- Repository security scan: no secret pattern found.
- `npm audit --audit-level=high`: 0 vulnerabilities.
- Static artifact smoke tests: 5 passed.
