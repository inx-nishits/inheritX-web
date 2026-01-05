import HomeContent from './components/home/HomeContent';
import JsonLd from './components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'
const defaultOgImage = `${siteUrl}/image/logo/og-banner-schema-ai.png`
export const metadata = {
  title: 'AI & Custom Software Development Partner',
  description:
    'AI & Custom Software Development Partner',
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
    title: 'AI & Custom Software Development Partner',
    description:
      'Building secure, scalable web, mobile, and automation solutions for startups and enterprises. ⭐ Top-Rated & Verified Software Development Partner.',
    images: [{
      url: defaultOgImage,
      width: 1200,
      height: 630,
      alt: 'InheritX — AI & Custom Software Development Partner',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Custom Software Development Partner',
    description:
      'Building secure, scalable web, mobile, and automation solutions for startups and enterprises. ⭐ Top-Rated & Verified Software Development Partner.',
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
