import { notFound } from 'next/navigation'
import CaseStudyDetail from '../../components/casestudies/CaseStudyDetail'
import JsonLd from '../../components/seo/JsonLd'
import { getCaseStudyBySlug, getAllCaseStudies } from '../../data/case-studies-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

// Generate static params for all case studies
export async function generateStaticParams() {
    const caseStudies = getAllCaseStudies()
    return caseStudies.map((cs) => ({
        slug: cs.slug,
    }))
}

// Generate metadata for each case study
export async function generateMetadata({ params }) {
    const caseStudy = getCaseStudyBySlug(params.slug)

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
        }
    }

    return {
        title: `${caseStudy.title} - ${caseStudy.subtitle} | Case Study`,
        description: caseStudy.excerpt,
        alternates: { canonical: `${siteUrl}/case-studies/${caseStudy.slug}` },
        keywords: [
            caseStudy.title,
            caseStudy.industry,
            caseStudy.category,
            ...caseStudy.techStack,
            'case study',
            'success story'
        ],
        openGraph: {
            url: `${siteUrl}/case-studies/${caseStudy.slug}`,
            title: `${caseStudy.title} - ${caseStudy.subtitle}`,
            description: caseStudy.excerpt,
            images: [
                {
                    url: `${siteUrl}${caseStudy.heroImage}`,
                    width: 1200,
                    height: 630,
                    alt: caseStudy.title,
                },
            ],
        },
    }
}

export default function CaseStudyPage({ params }) {
    const caseStudy = getCaseStudyBySlug(params.slug)

    if (!caseStudy) {
        notFound()
    }

    // Get previous and next case studies for navigation
    const allCaseStudies = getAllCaseStudies()
    const currentIndex = allCaseStudies.findIndex(cs => cs.slug === params.slug)
    const prevCaseStudy = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : null
    const nextCaseStudy = currentIndex < allCaseStudies.length - 1 ? allCaseStudies[currentIndex + 1] : null

    // Structured data for the case study
    const caseStudyJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: caseStudy.title,
        description: caseStudy.excerpt,
        image: `${siteUrl}${caseStudy.heroImage}`,
        author: {
            '@type': 'Organization',
            name: 'InheritX',
            url: siteUrl
        },
        publisher: {
            '@type': 'Organization',
            name: 'InheritX',
            url: siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/image/logo/og-banner-schema-ai.png`
            }
        },
        datePublished: new Date().toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/case-studies/${caseStudy.slug}`
        }
    }

    return (
        <main>
            <JsonLd data={caseStudyJsonLd} />
            <CaseStudyDetail
                caseStudy={caseStudy}
                prevCaseStudy={prevCaseStudy}
                nextCaseStudy={nextCaseStudy}
            />
        </main>
    )
}
