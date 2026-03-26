import HireDetailsPage from '../../components/hireexperts/hire-experts-details'
import { HireUsData } from '../hireusJsonData'
import { HireUsRolesData } from '../hireusRolesData'
import { HireUsTechAIData } from '../hireusTechAIData'
import { HireUsModelsData } from '../hireusModelsData'

export const dynamic = 'force-static'

// Utility function to convert category to slug
const toSlug = (category) => (category || '').replace(/^hire-/, '')

// Helper function to find the best candidate from multiple matches
const findBestCandidate = (candidates) => {
  if (candidates.length === 0) return null
  if (candidates.length === 1) return candidates[0]

  // Prefer candidates with more complete data (e.g., from original data source if duplicates exist)
  return candidates.find(d =>
    d.our_services_icons &&
    d.our_services_icons.length > 0 &&
    d.our_services_icons.some(i => i.content)
  ) || candidates[0]
}

const getFullData = (slug) => {
  const allData = [
    ...HireUsData.Data,
    ...HireUsRolesData.Data,
    ...HireUsTechAIData.Data,
    ...HireUsModelsData.Data
  ]
  const candidates = allData.filter(d => toSlug(d.category) === slug)
  return findBestCandidate(candidates)
}

export async function generateMetadata({ params }) {
  const { slug } = params || {}
  const full = getFullData(slug)
  if (!full) return {}

  const title = `${full.heading} | InheritX Experts`
  const description = full.heading_caption || `Hire expert ${full.heading} developers from InheritX. Professional development services with flexible hiring models.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  }
}

export async function generateStaticParams() {
  const allData = [
    ...HireUsData.Data,
    ...HireUsRolesData.Data,
    ...HireUsTechAIData.Data,
    ...HireUsModelsData.Data
  ]
  const uniqueSlugs = Array.from(new Set(
    allData.map(d => toSlug(d.category)).filter(Boolean)
  ))
  return uniqueSlugs.map(slug => ({ slug }))
}

export default function HireDynamicPage({ params }) {
  const { slug } = params || {}
  const full = getFullData(slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com';

  const jsonLd = full ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Hire Dedicated ${full.heading}`,
    "description": full.heading_caption || `Hire expert ${full.heading} developers from InheritX. Professional development services with flexible hiring models.`,
    "provider": {
      "@type": "Organization",
      "name": "InheritX Solutions",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/image/logo/inx-icon-link.png`
      },
      "sameAs": [
        "https://www.linkedin.com/company/inheritx-solutions",
        "https://twitter.com/inheritx"
      ]
    },
    "serviceType": "Software Development Personnel",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "url": `${siteUrl}/hire-experts/${slug}`,
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Full-Time Hiring",
          "description": "Dedicated developer working 160 hours per month with daily reporting.",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Part-Time Hiring",
          "description": "Dedicated developer working 80 hours per month for specific module support.",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Hourly/Task-Based",
          "description": "Flexible hiring model for specific bug fixes or technical optimizations.",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <HireDetailsPage params={{ slug }} />
    </>
  )
}


