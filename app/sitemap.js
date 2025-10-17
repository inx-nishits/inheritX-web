export default async function sitemap () {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

  // Static routes. Add more as needed.
  const staticRoutes = [
    '/',
    '/about-us',
    '/blog',
    '/blog-list',
    '/blog-standard',
    '/contact',
    '/faq',
    '/portfolio',
    '/pricing',
    '/services',
    '/services-details',
    '/team'
  ]

  // Normalize and build entries
  const entries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }))

  return entries
}

