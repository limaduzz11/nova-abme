# ADR-001 — Static architecture

- **Status:** accepted
- **Date:** 2026-09-16

## Context

The site is an identity gateway and content surface. It has no server-side
business operation, private data or state that needs persistence.

## Decision

Generate the site with Astro in `output: 'static'`. Deliver HTML, CSS,
JavaScript and static assets through a CDN.

## Alternatives

- SSR/full-stack framework: rejected; it adds runtime and operational cost with
  no product benefit.
- Vite-only: viable, but Astro gives content-oriented pages, metadata and static
  routing with less custom assembly.

## Consequences

The artifact is portable and independent of NOVA or a local machine. Future
profiles are added through build-time data/routes, not a runtime admin system.
