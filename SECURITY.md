# Security policy

NOVA Abme is intentionally a static, public website. It has no backend, API
route, database, authentication flow or runtime secret.

## Built-in controls

- no `.env` files or credentials in the repository;
- no third-party scripts, trackers, forms or runtime data fetches;
- static security headers in `public/_headers`;
- restrictive Content Security Policy with same-origin scripts and styles;
- `X-Content-Type-Options`, `X-Frame-Options`, Referrer Policy and
  Permissions Policy;
- external links that open a new tab use `noopener noreferrer`;
- local quality checks include a repository secret scan and dependency audit.

## Reporting

For a suspected vulnerability, open a private GitHub Security Advisory when
available. If that channel is not available, open a minimal GitHub issue without
including credentials, personal data or exploit material; request a private
contact channel in the issue.

Do not publish tokens, passwords, private keys, internal URLs, client data or
local infrastructure details in an issue or pull request.

## Scope

The Cloudflare Pages account, GitHub account and DNS configuration are hosting
provider controls. They are not stored in this repository. Review provider
settings, repository permissions and custom-domain configuration separately
before production publication.
