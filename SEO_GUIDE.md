# InheritX Website — SEO Guide (What we set up today)

This note explains, in plain language, what we added for SEO in the app, where to find it, how to configure it, and how to extend it safely. It also includes a quick QA checklist for release.

Reference plan: `https://docs.google.com/document/d/1dLeorrToXEFaYKzIX4Z3W8LITtHko6an0FYs09-gTms/edit?tab=t.0`


## What we implemented

- Global metadata (title, description, Open Graph/Twitter, robots)
  - Where: `app/layout.jsx` using Next.js App Router `export const metadata` and `export const viewport`.
  - What it does: sets sensible defaults, a title template, canonical logic, OG/Twitter, and robots directives.
  - Uses `NEXT_PUBLIC_SITE_URL` for absolute URLs and our share image: `/image/logo/og-banner-schema.png`.

- Per‑page SEO
  - Where: individual pages like `app/page.jsx`, `app/about-us/page.jsx`, `app/services/page.jsx`, `app/contact/page.jsx`, etc.
  - What it does: each page can export its own `metadata` and canonical. When needed, we add FAQ JSON‑LD via `JsonLd`.

- Structured data (JSON‑LD)
  - Where: base schemas in `app/layout.jsx` (Organization, Website, Services as ItemList, LocalBusiness).
  - Utility: `app/components/seo/JsonLd.jsx` to drop in page‑specific schemas (e.g., FAQs) safely.

- Dynamic sitemap
  - Where: `app/sitemap.js`
  - What it does: lists canonical routes and also builds dynamic URLs from our local data:
    - Services from `app/components/services/servicesData.js` → `/services/[category]`
    - Portfolio from `app/components/portfolio/portfolioData.js` → `/portfolio/[slug]`
    - Hire Experts from `app/hire-experts/hireusJsonData.js` → `/hire-experts/[category]`
  - Uses `NEXT_PUBLIC_SITE_URL` for absolute URLs.

- Robots (environment‑aware)
  - Where: `app/robots.js` (we’ve replaced the old static `robots.txt`)
  - What it does: allows crawling by default and points to the correct `sitemap` and `host` using `NEXT_PUBLIC_SITE_URL`.

- Performance and caching
  - Where: `next.config.mjs`
  - What it does: long‑cache headers for static assets, enables modern image formats (AVIF/WebP), strips console in production.

- Render‑blocking fixes
  - Where: `app/layout.jsx`
  - What it does: Google Fonts via `next/font`, preloads for critical CSS, non‑critical CSS via `AsyncCSS`, and defers scripts via Next `Script`.


## What you need to configure

- Environment variable
  - Set `NEXT_PUBLIC_SITE_URL` per environment (e.g., `https://www.inheritx.com` in production).
  - Used in `app/layout.jsx`, `app/sitemap.js`, and `app/robots.js`.

- Social share image
  - File: `public/image/logo/og-banner-schema.png` (recommended 1200×630). Update if branding changes.


## How to extend safely

- Add new service pages
  - Add an entry to `app/components/services/servicesData.js`. The route will auto‑appear in the sitemap as `/services/[category]`.

- Add new portfolio items
  - Append to `app/components/portfolio/portfolioData.js`. The route will auto‑appear in the sitemap as `/portfolio/[slug]`.

- Add hire‑expert pages
  - Append to `app/hire-experts/hireusJsonData.js`. The route will auto‑appear in the sitemap as `/hire-experts/[category]`.

- Add per‑page SEO
  - In any page file, export `metadata` (title, description, `alternates.canonical`). You can also override OG/Twitter if needed.
  - To add rich snippets, render `<JsonLd data={...} />` with valid schema.

- Exclude a page from indexing
  - Add `export const robots = { index: false, follow: false }` in that page file (Next.js App Router feature).


## Quick QA checklist before release

- Domain config
  - `NEXT_PUBLIC_SITE_URL` is correct for the target environment.

- Metadata health
  - Key pages have unique `title`, `description`, and a proper canonical.
  - Social previews pick the correct image and brand text.

- Sitemap and robots
  - Visit `/sitemap.xml`: only canonical, public URLs are listed; no 404s.
  - Visit `/robots.txt`: `Sitemap` points to `https://<domain>/sitemap.xml` and `Host` is correct.

- Structured data
  - Validate with Google’s Rich Results Test for home, about, services, and contact.

- Performance basics
  - Check PageSpeed/Core Web Vitals. Ensure LCP media is preloaded where used.


## Nice‑to‑have next steps

- Include blog post URLs in the sitemap if we later load them from a CMS/API (add a small fetch in `app/sitemap.js` and only list published posts).
- Add breadcrumb structured data where we render `Breadcrumbs`.
- Gradually reduce legacy jQuery plugins to improve INP/TTI without changing the UI.


## File map (quick reference)

- Global SEO: `app/layout.jsx`
- Page SEO: `app/**/page.jsx` (per‑route `metadata`)
- JSON‑LD helper: `app/components/seo/JsonLd.jsx`
- Sitemap: `app/sitemap.js`
- Robots: `app/robots.js`
- Services data: `app/components/services/servicesData.js`
- Portfolio data: `app/components/portfolio/portfolioData.js`
- Hire experts data: `app/hire-experts/hireusJsonData.js`
- Perf/cache headers: `next.config.mjs`


