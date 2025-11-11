import AboutContent from '../components/about/AboutContent';
import JsonLd from '../components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

export const metadata = {
  title: 'About InheritX — Software Experts & Product Team',
  description:
    'Learn about InheritX: a team of software experts building AI, web, and mobile products. Our values, leadership, and delivery process.',
  alternates: { canonical: `${siteUrl}/about-us` },
  keywords: ['About InheritX', 'our team', 'software experts']
}

export const dynamic = 'force-static';

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is InheritX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'InheritX is a software development company focused on AI, mobile, and web solutions for startups and enterprises.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is the team located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are based in India and collaborate with clients worldwide.'
        }
      }
    ]
  }
  return (
    <main>
      <JsonLd data={faqJsonLd} />
      <AboutContent />
    </main>
  );
}

