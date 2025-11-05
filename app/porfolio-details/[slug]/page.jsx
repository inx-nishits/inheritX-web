import Link from 'next/link'
import { fetchPortfolioItems } from '../../utils/portfolioUtils'
import PortfolioDetailsPage from '../../components/portfoliodetails/PortfolioDetailsPage'

export const dynamic = 'force-dynamic'

export async function generateMetadata ({ params }) {
  const { slug } = params || {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.Inheritx.com'

  const items = await fetchPortfolioItems()
  const item = Array.isArray(items) ? items.find(p => p.slug === slug) : null

  const title = item?.title || 'Portfolio'
  const description = item?.description || `Project highlights from Inheritx: ${title}`
  const ogImage = item?.cover || `${siteUrl}/image/logo/logo-icon.svg`
  const url = `${siteUrl}/porfolio-details/${slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

export default async function PortfolioListDetailsPage ({ params, searchParams }) {
  const { slug } = params || {}

  return (
    <>
     <PortfolioDetailsPage params={{ slug }} searchParams={searchParams} />
    </>
  )
}


