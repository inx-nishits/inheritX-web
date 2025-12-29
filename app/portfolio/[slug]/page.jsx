import ProjectDetailsPage from '../../components/projectdetails/ProjectDetailsPage'
import ProjectsPage from '../../components/projects'
import { getProjectBySlug } from '../../data/projectsData'

// Known tab names that should be handled as category filters
const KNOWN_TAB_NAMES = [
  'web-development',
  'mobile-app-development',
  'ai-ml-projects',
  // Backward compatibility
  'web',
  'mobile',
  'aiml',
  'mobile-development',
  'aiml-projects',
]

function isTabName(slug) {
  return KNOWN_TAB_NAMES.includes(slug)
}

export async function generateMetadata ({ params }) {
  const { slug } = params || {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

  // If it's a tab name, use default portfolio metadata
  if (isTabName(slug)) {
    return {
      title: 'Our Portfolio',
      description: 'Discover a curated collection of cutting-edge projects showcasing our expertise in web, mobile, IoT, and AI-powered solutions.',
      alternates: { canonical: `${siteUrl}/portfolio/${slug}` },
    }
  }

  // Otherwise, it's a project detail page
  const item = getProjectBySlug(slug)

  const title = item?.title || 'Project'
  const description = item?.description || `Project highlights from InheritX: ${title}`
  const ogImage = item?.cover || `${siteUrl}/image/logo/logo-icon.svg`
  const url = `${siteUrl}/portfolio/${slug}`

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
        { url: ogImage, width: 1200, height: 630, alt: title }
      ]
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] }
  }
}

export default function PortfolioPage ({ params }) {
  const { slug } = params || {}

  // If it's a known tab name, render the tab page
  if (isTabName(slug)) {
    return (
      <ProjectsPage
        basePath='/portfolio'
        detailsBasePath='/portfolio'
        pageTitle='Our Portfolio'
        enableUrlTabSync={true}
        usePathBasedRouting={true}
        initialTab={slug}
      />
    )
  }

  // Otherwise, it's a project detail page
  return <ProjectDetailsPage params={{ slug }} />
}


