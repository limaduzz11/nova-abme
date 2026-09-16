# ADR-002 — Cloudflare Pages as primary host

- **Status:** accepted, deployment pending account confirmation
- **Date:** 2026-09-16

## Context

The project needs public HTTPS delivery, GitHub integration, previews and no
permanent server to administer.

## Decision

Use Cloudflare Pages Git integration as the primary deployment path. Keep a
GitHub Pages workflow as a compatible fallback.

## Consequences

Pushes can produce deployments and previews without repository-held provider
credentials. The final `pages.dev` slug remains an external availability fact;
the runbook records `nova-abme` as the candidate.
