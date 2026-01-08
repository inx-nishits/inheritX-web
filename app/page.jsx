import HomeContent from './components/home/HomeContent';
import JsonLd from './components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'
const defaultOgImage = `${siteUrl}/image/logo/og-banner-schema-ai.png`
export const metadata = {
  title: 'Top AI, Web, and Mobile App Development for Startups & Enterprises | InheritX',
  description:
    'Top AI, web, and mobile app development company in India & USA. We build custom software, AI/ML, automation, cloud, and DevOps solutions that drive growth.',
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
    title: 'Top AI, Web, and Mobile App Development for Startups & Enterprises | InheritX',
    description:
      'Top AI, web, and mobile app development company in India & USA. We build custom software, AI/ML, automation, cloud, and DevOps solutions that drive growth.',
    images: [{
      url: defaultOgImage,
      width: 1200,
      height: 630,
      alt: 'Top AI, Web, and Mobile App Development for Startups & Enterprises | InheritX',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top AI, Web, and Mobile App Development for Startups & Enterprises | InheritX',
    description:
      'Top AI, web, and mobile app development company in India & USA. We build custom software, AI/ML, automation, cloud, and DevOps solutions that drive growth.',
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
