# InheritX Website — SEO Implementation Guide

This document summarizes what’s implemented for SEO, where it lives in code, what to configure, how to extend it safely, and a short QA checklist for the team.

Reference plan: `https://docs.google.com/document/d/1dLeorrToXEFaYKzIX4Z3W8LITtHko6an0FYs09-gTms/edit?tab=t.0`


## What’s implemented

- Global metadata (titles, description, OG/Twitter, robots)
  - File: `app/layout.jsx` (Next.js App Router `metadata` + `viewport` exports)
  - Sets defaults, title template, canonical, Open Graph, Twitter, and robots directives.
  - Uses `NEXT_PUBLIC_SITE_URL` for absolute URLs and social share image: `/image/logo/og-banner-schema.png`.

- Page-level SEO
  - Files: `app/page.jsx`, `app/about-us/page.jsx`, `app/services/page.jsx`, `app/contact/page.jsx`, etc.
  - Each exports `metadata` and canonical alternates. FAQ rich snippets are injected via `JsonLd` where applicable.

- Structured data (JSON-LD)
  - File: `app/layout.jsx` — Organization, Website, Services (ItemList), LocalBusiness injected in `<head>`.
  - Component: `app/components/seo/JsonLd.jsx` — utility to inject page-specific JSON‑LD (e.g., FAQ).

- Sitemap (dynamic, canonical-only)
  - File: `app/sitemap.js`
  - Includes static key routes and derives dynamic routes from local data sources:
    - Services: `app/components/services/servicesData.js` → `/services/[category]`
    - Portfolio: `app/components/portfolio/portfolioData.js` → `/portfolio/[slug]`
    - Hire Experts: `app/hire-experts/hireusJsonData.js` → `/hire-experts/[category]`
  - Uses `NEXT_PUBLIC_SITE_URL` for absolute URLs.

- Robots (dynamic by environment)
  - File: `app/robots.js` (replaces static `robots.txt`)
  - Exposes allow-all, correct `sitemap` and `host` using `NEXT_PUBLIC_SITE_URL`.

- Performance and caching headers
  - File: `next.config.mjs`
  - Long‑cache for static assets, AVIF/WebP formats enabled, console removal in production.

- Render-blocking mitigations
  - File: `app/layout.jsx`
  - Google Fonts via `next/font`, CSS preloads, non‑critical CSS via `AsyncCSS`, scripts deferred with Next `Script`.


## Configuration required

- Environment variable
  - `NEXT_PUBLIC_SITE_URL` must be set per environment (e.g., `https://www.inheritx.com` for prod).
  - Used by `app/layout.jsx`, `app/sitemap.js`, and `app/robots.js`.

- Social share image
  - Path: `public/image/logo/og-banner-schema.png` (1200×630 recommended). Replace if brand asset changes.


## How to extend safely

- Add new service pages
  - Add entries to `app/components/services/servicesData.js`. Routes auto-appear in sitemap as `/services/[category]`.

- Add new portfolio items
  - Append to `app/components/portfolio/portfolioData.js`. Routes auto-appear in sitemap as `/portfolio/[slug]`.

- Add hire-expert pages
  - Append to `app/hire-experts/hireusJsonData.js`. Routes auto-appear in sitemap as `/hire-experts/[category]`.

- Add per-page SEO
  - In any page file, export `metadata` (title, description, `alternates.canonical`) and optional Open Graph overrides.
  - To add rich snippets, render `<JsonLd data={...} />` with valid schema.

- Exclude a page from indexing
  - Add `export const robots = { index: false, follow: false }` in that page file (App Router feature).


## QA checklist (pre-release)

- Domain config
  - `NEXT_PUBLIC_SITE_URL` set correctly for environment.

- Metadata
  - Each key page has a unique `title`, `description`, and canonical.
  - Social previews show correct image (OG/Twitter) and brand text.

- Sitemap/Robots
  - Visit `/sitemap.xml`: no 404 URLs; only canonical, public pages listed.
  - Visit `/robots.txt`: `Sitemap` points to `https://<domain>/sitemap.xml` and `Host` is correct.

- Structured data
  - Validate JSON‑LD in Google Rich Results Test for home, about, services, and contact pages.

- Performance
  - Check Core Web Vitals in PageSpeed Insights. Ensure LCP media is preloaded where used.


## Future improvements (optional)

- Blog post URLs in sitemap (if posts come from CMS/API): add a lightweight fetch in `app/sitemap.js` to include only published posts.
- Breadcrumb structured data where `Breadcrumbs` is rendered.
- Progressive reduction of legacy jQuery plugins for better INP/TTI without UI changes.


## File map (quick reference)

- Global SEO: `app/layout.jsx`
- Page SEO: `app/**/page.jsx` (per-route `metadata`)
- JSON‑LD helper: `app/components/seo/JsonLd.jsx`
- Sitemap: `app/sitemap.js`
- Robots: `app/robots.js`
- Services data: `app/components/services/servicesData.js`
- Portfolio data: `app/components/portfolio/portfolioData.js`
- Hire experts data: `app/hire-experts/hireusJsonData.js`
- Perf/cache headers: `next.config.mjs`


