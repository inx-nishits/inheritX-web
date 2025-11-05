export async function fetchPortfolioItems() {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout

    const res = await fetch('https://admin.Inheritx.com/wp-json/api/portfolio', {
      cache: 'no-store',
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!res.ok) {
      console.warn('Portfolio API returned non-ok status:', res.status)
      return [] // fallback empty array
    }

    const data = await res.json()
    if (!data || !Array.isArray(data.portfolio_item)) return []

    const toSlug = (str) =>
      String(str || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')

    const isWebCategory = (slugs) => {
      const webSet = new Set(['web', 'reactjs', 'wordpress', 'angular', 'php', 'node-js', 'aws'])
      return slugs?.some((s) => webSet.has(String(s).toLowerCase()))
    }

    const isMobileCategory = (slugs) => {
      const mobileSet = new Set(['android', 'ios', 'reactnative', 'flutter'])
      return slugs?.some((s) => mobileSet.has(String(s).toLowerCase()))
    }

    return data.portfolio_item.map((p) => {
      const slugs = Array.isArray(p.category_slug) ? p.category_slug : []
      let category = 'Software Development'
      if (isWebCategory(slugs)) category = 'Web'
      else if (isMobileCategory(slugs)) category = 'Mobile App Development'

      return {
        slug: toSlug(p.title) || String(p.post_id),
        title: p.title,
        category,
        industry: p.industry || '',
        technology: Array.isArray(p.technology) ? p.technology.join(', ') : String(p.technology || ''),
        country: p.country || '',
        description: p.content || '',
        cover: p.feature_image || '',
        thumb: p.feature_image || '',
      }
    })
  } catch (error) {
    console.error('fetchPortfolioItems error:', error.message)
    // Return fallback/mock data to avoid build crash
    return [
      {
        slug: 'demo-project',
        title: 'Demo Project',
        category: 'Web',
        industry: 'IT',
        technology: 'React, Node.js',
        country: 'India',
        description: 'This is a fallback demo project.',
        cover: '/image/logo/logo-icon.svg',
        thumb: '/image/logo/logo-icon.svg',
      },
    ]
  }
}
