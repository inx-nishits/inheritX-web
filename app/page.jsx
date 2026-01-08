import HomeContent from './components/home/HomeContent';
import JsonLd from './components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'
const defaultOgImage = `${siteUrl}/image/logo/og-banner-schema-ai.png`
export const metadata = {
  title: 'Global AI & Custom Software Development Partner | InheritX',
  description:
    'Building scalable Web, Mobile & Automation solutions for Startups & Enterprises. 🏆 Top Rated. ⭐ Verified 5* Reviews. 💯 100% Client Retention.',
  alternates: { canonical: `${siteUrl}/` },
  keywords: [
    'software development company',
    'app development',
    'IT solutions',
    'AI development',
    'Next.js development'
  ],
  openGraph: {
    url: `${siteUrl}/`,
    title: 'Global AI & Custom Software Development Partner | InheritX',
    description:
      'Building scalable Web, Mobile & Automation solutions for Startups & Enterprises. 🏆 Top Rated. ⭐ Verified 5* Reviews. 💯 100% Client Retention.',
    images: [{
      url: defaultOgImage,
      width: 1200,
      height: 630,
      alt: 'Global AI & Custom Software Development Partner | InheritX',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global AI & Custom Software Development Partner | InheritX',
    description:
      'Building scalable Web, Mobile & Automation solutions for Startups & Enterprises. 🏆 Top Rated. ⭐ Verified 5* Reviews. 💯 100% Client Retention.',
    images: [defaultOgImage]
  }
}

export const dynamic = 'force-static';

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does InheritX do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We develop custom AI, web, and mobile applications using Next.js, Flutter, and modern cloud-native stacks.'
        }
      }
    ]
  }
  return (
    <main>
      <JsonLd data={faqJsonLd} />
      <div className="main-content">
        <HomeContent />
      </div>
    </main>
  );
}
