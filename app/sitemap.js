import { servicesData } from './components/services/servicesData'
import { portfolioItems } from './components/portfolio/portfolioData'
import { HireUsData } from './hire-experts/hireusJsonData'
import { getAllCaseStudies } from './data/case-studies-data'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

  // Static routes. Add more as needed.
  const staticRoutes = [
    '/',
    '/about-us',
    '/blog',
    '/contact',
    '/portfolio',
    '/services',
    '/join-our-team',
    '/hire-experts',
    '/case-studies'
  ]

  // Derive dynamic routes from local data (safe, no UI impact)
  const serviceRoutes = Object.keys(servicesData || {}).map(
    (slug) => `/services/${slug}`
  )

  const portfolioRoutes = (portfolioItems || []).map(
    (item) => `/portfolio/${item.slug}`
  )

  const hireExpertsRoutes = (HireUsData?.Data || []).map(
    (item) => `/hire-experts/${item.category}`
  )

  const caseStudiesRoutes = (getAllCaseStudies() || []).map(
    (item) => `/case-studies/${item.slug}`
  )

  // Normalize and build entries
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...hireExpertsRoutes,
    ...caseStudiesRoutes
  ]

  const entries = allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }))

  return entries
}

