# Deployment runbook

## Primary: Cloudflare Pages

Cloudflare Pages is the production host because the site is a static artifact
and the provider connects directly to GitHub. The current deployment is
`https://nova-abme.pages.dev/`. No Cloudflare token is stored in this repository.

1. Create or select a Cloudflare Pages project.
2. Connect only the intended GitHub repository through the official GitHub
   integration.
3. Set the production branch to `main`.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy and confirm the assigned `*.pages.dev` URL over HTTPS.
7. Enable pull-request preview deployments.
8. Test headers, canonical metadata, all primary routes and the 404 response.

The confirmed project slug is `nova-abme`, serving
`https://nova-abme.pages.dev/`. If the slug or custom domain changes, update the
public canonical origin and sitemap and repeat the production checks.

### Zero-cost posture

This site uses static assets only. It does not use Pages Functions, Workers,
KV, R2, D1, a database or a paid integration. Cloudflare's current Pages limits
document (reviewed 2026-09-16) lists the Free plan with 500 builds/month, one
concurrent build, up to 20,000 files and a 25 MiB maximum per asset. This project
is far below those limits. Provider plan terms can change, so confirm the
account's current pricing and limits before relying on them.

Source: [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)

### Custom domain later

1. Point the custom domain at the Pages project in Cloudflare.
2. Set `PUBLIC_SITE_URL` to the final HTTPS origin.
3. Keep `PUBLIC_BASE_PATH=/`.
4. Update the sitemap URL in `public/robots.txt` if the origin changes.
5. Rebuild and verify canonical, Open Graph, sitemap and HTTPS headers.

The internal-link helper uses `BASE_URL`, so the page does not need to be
rewritten for a root custom domain.

## Fallback: GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`.

1. Push the repository to GitHub with the default branch named `main`.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
3. Run the workflow or push to `main`.
4. Confirm `https://limaduzz11.github.io/nova-abme/`.

The workflow builds with:

```text
PUBLIC_SITE_URL=https://limaduzz11.github.io
PUBLIC_BASE_PATH=/nova-abme/
```

If the repository name changes, update the base path in the workflow and the
fallback URL. A future custom domain removes the base path and uses the
Cloudflare configuration above.

Source: [Astro — deploy to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

## Local release checklist

```bash
npm ci
npm run verify
npm run audit:deps
```

Then inspect `dist/` and run browser checks against a local preview. Never add
provider credentials to `.env`, workflow files or the repository. Provider
secrets, if ever needed for a different deployment mechanism, belong only in
the provider's encrypted configuration.
