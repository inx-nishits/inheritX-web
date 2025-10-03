export default async function sitemap() {
  const routes = ['', 'about-us', 'blog-details', 'blog-list', 'blog-standard', 'contact', 'faq', 'porfolio-details', 'porfolio-grid', 'porfolio-list', 'pricing', 'services-details', 'services', 'team'];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  return routes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$\//, '/'),
    lastModified: new Date(),
  }));
}

