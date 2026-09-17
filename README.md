# NOVA Abme

<div align="center">

**Static Engineering Gateway & Personal Portfolio**

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Edge-Cloudflare_Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG_AAA-success?style=flat)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Status](https://img.shields.io/badge/Status-Personal_Portfolio-informational?style=flat)](#repository-scope)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg?style=flat)](#license)

<br />

**English** &nbsp;|&nbsp; [Português (Brasil)](README.pt-BR.md)

<br />

**Production Gateway:** [https://nova-abme.pages.dev](https://nova-abme.pages.dev)

</div>

> A resilient, high-performance static engineering gateway designed with zero runtime dependencies, edge delivery across Cloudflare Pages, WCAG AAA accessibility, and a minimalist design system.

---

## Table of Contents

- [Concept & Overview](#concept--overview)
- [Architecture & Edge Delivery](#architecture--edge-delivery)
- [Design System & Accessibility](#design-system--accessibility)
- [Engineering Standards](#engineering-standards)
- [Project Structure](#project-structure)
- [Repository Scope](#repository-scope)
- [License](#license)

---

## Concept & Overview

**NOVA Abme** is a static engineering gateway and personal portfolio representing **Eduardo de Lima Paranhos**. It offers a direct, technical overview of his engineering background in enterprise systems (TOTVS Protheus, ADVPL/TL++), Model Context Protocol (MCP) tooling, distributed systems, and modern software development.

Rather than a conventional resume, NOVA Abme is structured as a data-driven static product. All personal trajectories, skill matrices, project records, and contact channels are decoupled into structured data models, ensuring immediate maintainability and zero runtime overhead.

---

## Architecture & Edge Delivery

The architecture enforces a strict zero-backend, zero-database philosophy:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SOURCE REPOSITORY                                 │
│   • Semantic Astro Components & Layouts                                     │
│   • Typed Data Models (src/data/site.ts)                                    │
│   • Ink Wash Modular CSS Design System                                      │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Static Build (astro build)
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       STATIC BUNDLE ARTIFACT (dist/)                        │
│   • Pre-rendered Semantic HTML Documents                                    │
│   • Minified CSS & Scoped Inline Critical Styles                            │
│   • Vanilla TypeScript Micro-Interactions (Zero Bundler Frameworks)         │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Global Edge Deployment
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CLOUDFLARE PAGES GLOBAL CDN                           │
│   • Edge Cache & Anycast Routing across 300+ Cities                         │
│   • HTTP/3 & Strict Transport Security (HSTS)                               │
│   • Immutable Content Addressing & Instant Invalidation                     │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ HTTPS Delivery
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            CLIENT BROWSER                                   │
│   • Sub-100ms First Contentful Paint (FCP)                                  │
│   • Zero Client Secrets / Zero Cookies / Zero Third-Party Trackers          │
└─────────────────────────────────────────────────────────────────────────────┘
```

There are no server-side rendering processes, runtime APIs, persistent databases, sessions, or backend servers. JavaScript is employed solely as a lightweight layer of progressive enhancement for navigation focus, objective-driven highlights, and subtle pointer interactions on precision pointing devices.

---

## Design System & Accessibility

- **Ink Wash Aesthetic:** A bespoke, high-contrast monochromatic design system engineered for legibility, visual hierarchy, and focus.
- **WCAG AAA Compliance:** Color pairings, typography scales, touch targets, and contrast ratios strictly meet or exceed Web Content Accessibility Guidelines (WCAG 2.2 Level AAA).
- **Progressive Enhancement:** The site remains 100% functional, readable, and navigable with JavaScript completely disabled in the browser.
- **Respect for User Preferences:** Built-in hardware-aware media query adaptations for `prefers-reduced-motion` and `prefers-color-scheme`.

---

## Engineering Standards

| Standard | Implementation | Benefit |
| :--- | :--- | :--- |
| **Edge Delivery** | Cloudflare Pages Global Network | Near-instant worldwide latency, automated TLS, zero cold-starts |
| **Static Generation** | Astro 7 (`output: 'static'`) | Pre-compiled static HTML with zero hydration overhead |
| **Type Safety** | TypeScript 5.x | Strict compile-time validation of all profile data models |
| **Accessibility QA** | Playwright + `@axe-core/playwright` | Automated screen-reader and contrast validation during development |
| **Privacy & Security** | Zero External Scripts | No Google Analytics, no marketing pixels, no third-party CDNs |

---

## Project Structure

```text
src/
├── components/     # Semantic section components and accessible navigation
├── data/           # Structured personal profile, technologies, and projects
├── layouts/        # Base HTML document shell, OpenGraph, and meta tags
├── pages/          # Static routes (index, 404)
├── scripts/        # Lightweight progressive enhancement scripts
└── styles/         # Ink Wash CSS custom properties and reset rules
public/             # Favicons, OpenGraph social cards, and robots.txt
docs/               # Architectural decisions, design guidelines, and audits
```

---

## Repository Scope

This repository houses the personal portfolio and engineering gateway for Eduardo de Lima Paranhos. Because it is a private personal website, external installation guides, deployment configurations, and contributor build pipelines are maintained privately.

---

## License

All rights reserved. Proprietary software. Refer to [LICENSE](LICENSE) for terms.

---

<div align="center">
  <sub>Designed & engineered by <b>Eduardo de Lima Paranhos</b></sub>
</div>
