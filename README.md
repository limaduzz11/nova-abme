# NOVA Abme

**NOVA Abme** is a static engineering gateway. The first public profile is
**Eduardo de Lima Paranhos**: a focused surface for identity, public work,
engineering context, ELP Tecnologia and direct routes.

This is not a conventional CV site. It is a small product shell that keeps the
profile content in data files, so additional NOVA Abme profiles can be added
later without introducing a backend or changing the delivery model.

## Architecture

```text
GitHub repository
        │ push
        ▼
Astro static build (dist/)
        │
        ▼
Cloudflare Pages / global CDN
        │
        ▼
Browser over HTTPS
```

There is no server-side rendering, API route, database, session, authentication,
runtime secret or process that must stay online. JavaScript is a small progressive
enhancement for the context router, audience emphasis, command palette, scroll
reveals and fine-pointer cursor halo.

## Stack

- Astro 7, statically generated (`output: 'static'`)
- TypeScript for source and browser enhancement
- Native HTML, CSS and Web APIs
- `@astrojs/sitemap` for sitemap generation
- `@playwright/test` + `@axe-core/playwright` as development-only browser and accessibility QA
- No analytics, marketing cookies, third-party forms or runtime API calls

## Local development

Requirements: Node.js `>=22.12.0` and npm.

```bash
npm ci
npm run dev
```

The development server is bound to `127.0.0.1:4321` only while actively
developing. It is not part of production. To preview the generated artifact:

```bash
npm run build
npm run preview
```

The preview server uses `127.0.0.1:4322` and should be stopped after validation.

## Quality commands

```bash
npm run lint
npm run typecheck
npm run security:scan
npm run audit:deps
npm run verify
```

`verify` runs the local lint, Astro/TypeScript checks, secret scan, static build
and behavior-oriented smoke tests against `dist/`.

## Deployment

Cloudflare Pages is the primary hosting candidate. Configure a Pages project
connected to the GitHub repository with:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Output directory | `dist` |

The expected project slug is `nova-abme`, producing a URL in the form
`https://nova-abme.pages.dev/`. The slug and URL must be confirmed in the
Cloudflare account at deployment time; this repository does not claim a public
URL until a real deployment responds over HTTPS.

See [docs/DEPLOY.md](docs/DEPLOY.md) for Cloudflare Pages, the GitHub Pages
fallback and custom-domain migration.

## Public configuration

The build accepts two optional public configuration values:

- `PUBLIC_SITE_URL`: canonical site origin, for example `https://example.com`;
- `PUBLIC_BASE_PATH`: path prefix for a GitHub Pages project, for example
  `/nova-abme/`.

Neither value is a secret. Do not add credentials, tokens or private endpoints
to them. Cloudflare Pages uses the defaults for the root site; the fallback
workflow sets the GitHub Pages values explicitly.

## Project structure

```text
src/
├── components/     # section-level UI and command palette
├── data/           # public profile, links, stack and work index
├── layouts/        # document shell and metadata
├── pages/          # static routes and 404
├── scripts/        # small browser enhancement
└── styles/         # Ink Wash design system
public/             # favicon, social card, robots and static headers
docs/               # architecture, research, deploy, ADRs and screenshots
scripts/            # deterministic local quality checks
tests/              # static and browser smoke tests
```

## Updating the profile

Public content is maintained in `src/data/site.ts` and the section components.
Only links and professional information already approved for public exposure
should be added. Corporate code, client information, internal infrastructure
and NOVA implementation details do not belong in this repository.

## License

Released under the [MIT License](LICENSE).
