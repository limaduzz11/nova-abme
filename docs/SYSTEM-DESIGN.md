# System design — NOVA Abme

## Problem

Eduardo needs a public identity surface that is more useful than a CV and more
focused than a generic link hub. It must route a recruiter, a software buyer,
an open-source visitor and a professional contact to the appropriate public
surface in seconds.

The product name is **NOVA Abme**. This first release is the Eduardo de Lima
Paranhos profile (`Profile 001`); profile information is separated from the
presentation so the product can grow to additional people later.

## Objectives

1. Make the engineering identity legible in the first viewport.
2. Present public proof without exposing corporate work.
3. Give GitHub, LinkedIn, ELP Tecnologia and contact clear routes.
4. Remain static, fast, private and deployable without a personal server.
5. Make the visual system distinctive without decorative overload.

## Non-goals

- portfolio CMS or admin panel;
- user accounts, profile editing or multi-tenant runtime;
- contact form backend;
- analytics, marketing cookies or behavioral tracking;
- live GitHub API dependency;
- SSR, API routes, database or persistent process.

## Requirements

### Functional

- editorial hero with immediate primary routes;
- context router for software, open source, business and connect;
- session-scoped audience emphasis (`sessionStorage` only);
- stack index with contextual descriptions, never percentage bars;
- small selected-work index backed by verified public links;
- dedicated VANTA Labz / open-source surface;
- separate ELP Tecnologia business block;
- accessible command palette at `Ctrl/Cmd + K`;
- custom 404 route using the same visual system;
- canonical metadata, Open Graph, Twitter card, JSON-LD, sitemap and robots.

### Non-functional

| Attribute | Target or constraint |
|---|---|
| Availability | Static assets remain available independently of NOVA, a local PC or a VPS |
| Performance | Minimal JS, no blocking third-party assets, stable layout, Lighthouse target ≥95 where practical |
| Accessibility | WCAG 2.2 AA as applicable; keyboard routes, visible focus, landmarks and reduced motion |
| Security | Zero secrets, no runtime secret, restrictive CSP and static headers |
| Privacy | No analytics, fingerprinting, marketing cookies or external form service |
| Maintainability | Data-driven public links and stack; section-level Astro components |
| Portability | Cloudflare Pages primary; GitHub Pages workflow fallback; custom domain without code rewrite |
| Reproducibility | Committed lockfile, deterministic npm scripts and static artifact checks |

## Architecture

```text
┌──────────────────────┐
│ GitHub / source truth│
└──────────┬───────────┘
           │ push / pull request
           ▼
┌──────────────────────┐      ┌───────────────────────┐
│ CI: lint, type, scan │─────▶│ Cloudflare Pages      │
│ build and smoke test │      │ static build + CDN     │
└──────────┬───────────┘      └───────────┬───────────┘
           │                              │ HTTPS
           ▼                              ▼
       dist/ artifact                  Browser
```

Astro renders HTML at build time. CSS is bundled locally. The only browser
script is an enhancement layer that can fail or be disabled without removing
the core content or anchor navigation.

### Components

- `src/data/site.ts`: public profile identity, approved links, stack and public
  project index. It is the first boundary for future profile data.
- `src/layouts/BaseLayout.astro`: document metadata, canonical URL, social
  metadata, JSON-LD and shared CSS/script loading.
- `src/components/*`: semantic sections with no data fetching.
- `src/scripts/gateway.ts`: context/audience state, command palette, reveal,
  section indicator and fine-pointer halo.
- `public/_headers`: provider-applied static security headers.
- `tests/static-smoke.test.mjs`: checks the built contract, anchors, metadata,
  external-link rel attributes and generated assets.

## Build flow

```text
npm ci
  → lint
  → astro check
  → security scan
  → astro build
  → static smoke tests
  → dist/
```

No build step needs a secret. `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` are public
deployment configuration, not credentials.

## Deploy flow

Cloudflare Pages is connected to the GitHub repository through the provider
integration. A push to `main` triggers the build and a pull request receives a
preview deployment when preview builds are enabled. The provider serves only
the generated static artifact.

GitHub Pages is a compatible fallback using the included workflow. It builds
with `PUBLIC_BASE_PATH=/nova-abme/`, so the fallback URL is structurally
`https://limaduzz11.github.io/nova-abme/`.

## Security model

The browser can see every public value by definition. Therefore no value is
treated as a hidden secret. No API requiring a secret is called from the
browser. The CSP allows same-origin scripts/styles and local static assets; it
does not allow external network connections from the page. External
destinations are plain links and remain outside the application trust boundary.

## Performance model

- no web-font request or proprietary font file;
- no image payload in the page body;
- SVG favicon and social card;
- CSS-first motion and native `IntersectionObserver`;
- no hydration framework or client-side router;
- no network request required for the primary experience;
- explicit `prefers-reduced-motion` branch.

The Lighthouse score is a release measurement, not a claim derived from the
build. A production run must be recorded after a real deployment.

## Availability and recovery

Availability comes from the provider CDN and the Git repository's deployment
history. Recovery is a new deployment from a known-good commit or a provider
rollback. There is no application database to restore and no local daemon to
restart.

## Limitations and trade-offs

- The site is content-updated, not user-managed. Additional profiles require a
  code/data change and a new static build.
- The public URL slug is assigned by the hosting provider and must be checked
  at deployment time.
- GitHub data is intentionally static; stale repository descriptions are safer
  than making the core page depend on a third-party API.
- Static `_headers` support depends on the hosting provider. The application
  remains usable if a fallback host ignores that file, but the host should then
  be configured separately.
- The social card is generated as a local PNG from a source SVG, so social
  platforms receive a broadly compatible image without a runtime asset service.

## Decision summary

The smallest architecture that meets the product goal is a content-driven Astro
static site with native browser enhancements, GitHub as source of truth and
Cloudflare Pages as the primary CDN delivery path. The future multi-profile
direction is represented by a clean data boundary, not by premature backend
infrastructure.
