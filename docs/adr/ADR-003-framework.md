# ADR-003 — Astro + TypeScript

- **Status:** accepted
- **Date:** 2026-09-16

## Context

The page needs static routing, semantic HTML, metadata and a small amount of
browser enhancement. It does not need a component runtime in the browser.

## Decision

Use Astro with TypeScript, native CSS and native Web APIs. Do not add React,
Vue, Svelte or a motion framework.

## Consequences

The default page ships without hydration overhead. The client script remains a
single small enhancement layer and the design system stays close to the CSS
platform.
