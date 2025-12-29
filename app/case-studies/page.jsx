import CaseStudiesContent from '../components/casestudies/CaseStudiesContent'
import JsonLd from '../components/seo/JsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

export const metadata = {
    title: 'Case Studies - Success Stories & Client Projects',
    description:
        'Explore our case studies and success stories. See how InheritX has helped clients across healthcare, fintech, e-mobility, and more achieve their goals through innovative AI, mobile, and web solutions.',
    alternates: { canonical: `${siteUrl}/case-studies` },
    keywords: [
        'case studies',
        'success stories',
        'client projects',
        'AI healthcare',
        'mobile app development',
        'web development',
        'software development portfolio'
    ],
    openGraph: {
        url: `${siteUrl}/case-studies`,
        title: 'Case Studies - Success Stories & Client Projects | InheritX',
        description:
            'Explore our case studies and see how we\'ve helped clients achieve their goals through innovative technology solutions.',
    }
}

export const dynamic = 'force-static'

export default function CaseStudiesPage() {
    const caseStudiesJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Case Studies',
        description: 'InheritX case studies and success stories showcasing our work in AI, mobile, and web development.',
        url: `${siteUrl}/case-studies`,
        publisher: {
            '@type': 'Organization',
            name: 'InheritX',
            url: siteUrl
        }
    }

    return (
        <main>
            <JsonLd data={caseStudiesJsonLd} />
            <CaseStudiesContent />
        </main>
    )
}
