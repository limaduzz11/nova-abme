# ADR-004 — No backend or runtime API

- **Status:** accepted
- **Date:** 2026-09-16

## Context

Contact is a redirection problem, not a data submission problem. Public GitHub
details are non-critical and can be curated statically.

## Decision

Use direct links for GitHub, LinkedIn, ELP Tecnologia and contact. Keep the
primary page independent of external API calls, sessions, cookies and a server.

## Consequences

The site remains available when a third-party API, local process or NOVA
infrastructure is offline. Public content needs an intentional source update
when it changes; that trade-off is preferable to runtime fragility.
