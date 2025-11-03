import ProjectDetailsPage from '../../components/projectdetails/ProjectDetailsPage'
import { getProjectBySlug } from '../../data/projectsData'

export async function generateMetadata ({ params }) {
  const { slug } = params || {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

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

export default function PortfolioDetailsPage ({ params }) {
  const { slug } = params || {}
  return <ProjectDetailsPage params={{ slug }} />
}


