import ServicesContent from '../components/services/ServicesContent';
import JsonLd from '../components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

export const metadata = {
  title: 'Custom Software Development Services',
  description:
    'Custom software development, AI solutions, mobile and web apps, cloud and DevOps. Partner with InheritX to build and scale your product.',
  alternates: { canonical: `${siteUrl}/services` },
  keywords: [
    'custom software development',
    'enterprise software',
    'AI solutions',
    'mobile app development',
    'web application development'
  ]
}

export const dynamic = 'force-static';

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you provide custom software development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we build tailor-made software including AI, mobile, and web applications.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you scale with my team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support MVPs to enterprise-scale products with flexible engagement models.'
        }
      }
    ]
  }
  return (
    <main>
      <JsonLd data={faqJsonLd} />
      <ServicesContent />
    </main>
  );
}

