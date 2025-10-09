import Script from 'next/script'
import './styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CounterInitializer from './components/CounterInitializer'
import { Toaster } from 'react-hot-toast'

// SEO base configuration
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com' // Placeholder: set NEXT_PUBLIC_SITE_URL in env
const defaultOgImage = `${siteUrl}/images/og-default.jpg` // Placeholder: put your OG image at public/images/og-default.jpg
const themeColor = '#546EA4' // Placeholder: adjust theme color to match brand

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AI, ML, and Custom Software Development Company | InheritX',
    template: '%s | InheritX'
  },
  description:
    'InheritX builds AI solutions, machine learning systems, automation workflows, and custom software across mobile, web, and cloud. We deliver scalable apps, data platforms, and DevOps for high-growth teams.',
  keywords: [
    'AI development',
    'Machine Learning',
    'automation',
    'custom software',
    'mobile apps',
    'web apps',
    'cloud',
    'DevOps',
    'data engineering',
    'MLOps'
  ],
  applicationName: 'InheritX',
  authors: [{ name: 'InheritX' }],
  creator: 'InheritX',
  publisher: 'InheritX',
  alternates: {
    canonical: '/',
    languages: { en: '/' }
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'InheritX',
    title: 'AI, ML, and Custom Software Development Company | InheritX',
    description:
      'AI and ML solutions, automation, and custom software for mobile, web, and cloud. Reliable delivery with DevOps and MLOps best practices.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'InheritX — AI, ML, and Custom Software'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI, ML, and Custom Software Development Company | InheritX',
    description:
      'AI and ML solutions, automation, and custom software for mobile, web, and cloud. Reliable delivery with DevOps and MLOps best practices.',
    images: [defaultOgImage]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/image/logo/favicon.ico' // Placeholder: switch to '/favicon.ico' if present at project root
  },
  themeColor
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor
}

// Note: Page-level SEO overrides
// - To override metadata per page, use `export const metadata` or `export async function generateMetadata()` in page files.
// - Titles will use the template "%s | InheritX" unless a page provides an absolute title.

export default function RootLayout ({ children }) {
  // Structured Data (JSON-LD)
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InheritX',
    url: siteUrl,
    logo: `${siteUrl}/image/logo/logo.svg`,
    sameAs: [
      'https://www.linkedin.com/company/inheritx/',
      'https://twitter.com/inhx_tech',
      'https://www.facebook.com/InheritX',
      'https://clutch.co/profile/inheritx' // Placeholder profiles
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-000-000-0000', // Placeholder
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['English']
      }
    ]
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'InheritX',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`, // Placeholder search URL
      'query-input': 'required name=search_term_string'
    }
  }

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'InheritX Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'AI Development',
        provider: { '@type': 'Organization', name: 'InheritX', url: siteUrl }
      },
      {
        '@type': 'Service',
        name: 'Machine Learning Consulting',
        provider: { '@type': 'Organization', name: 'InheritX', url: siteUrl }
      },
      {
        '@type': 'Service',
        name: 'Process Automation',
        provider: { '@type': 'Organization', name: 'InheritX', url: siteUrl }
      },
      {
        '@type': 'Service',
        name: 'Custom Software Development',
        provider: { '@type': 'Organization', name: 'InheritX', url: siteUrl }
      },
      {
        '@type': 'Service',
        name: 'Mobile App Development',
        provider: { '@type': 'Organization', name: 'InheritX', url: siteUrl }
      },
      {
        '@type': 'Service',
        name: 'Web App Development',
        provider: { '@type': 'Organization', name: 'InheritX', url: siteUrl }
      },
      {
        '@type': 'Service',
        name: 'Cloud & DevOps',
        provider: { '@type': 'Organization', name: 'InheritX', url: siteUrl }
      }
    ]
  }

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/image/logo/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='stylesheet' href='/css/bootstrap.css' />
        {/* Template styles */}
        <link rel='stylesheet' href='/css/animate.min.css' />
        <link rel='stylesheet' href='/css/animate2.min.css' />
        <link rel='stylesheet' href='/css/magnific-popup.min.css' />
        <link rel='stylesheet' href='/css/swiper-bundle.min.css' />
        <link rel='stylesheet' href='/css/nice-select.css' />
        <link rel='stylesheet' href='/css/odometer-theme-default.css' />
        <link rel='stylesheet' href='/css/textanimation.css' />
        <link rel='stylesheet' href='/css/jquery-ui.min.css' />
        <link rel='stylesheet' href='/css/map.min.css' />
        <link rel='stylesheet' href='/css/nouislider.min.css' />
        <link rel='stylesheet' href='/icons/icomoon/style.css' />
        <link rel='stylesheet' href='/css/styles.css' />
        <link rel='stylesheet' href='/css/overrides.css' />

        {/* Canonical and alternate */}
        <link rel='canonical' href={siteUrl} />
        <link rel='alternate' hrefLang='en' href={`${siteUrl}/`} />

        {/* Structured Data (JSON-LD) */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </head>
      <body className='counter-scroll'>
        <div className='d-flex flex-column min-vh-100'>
          <Header />
          <div className='flex-grow-1'>{children}</div>
          <Footer />
          <CounterInitializer />
        </div>

        {/* Global toast container */}
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 4000,
            style: {
              background: '#111827',
              color: '#fff',
              borderRadius: '8px',
              padding: '10px 12px'
            },
            success: {
              iconTheme: { primary: '#22c55e', secondary: '#111827' }
            },
            error: {
              iconTheme: { primary: '#ef4444', secondary: '#111827' }
            }
          }}
        />

        <div className='cursor-dot'></div>
        <div className='cursor-dot'></div>
        <div className='cursor-dot'></div>

        {/* Vendor scripts (kept for parity; can be refactored to React later) */}
        <Script src='/js/jquery.min.js' strategy='beforeInteractive' />
        <Script src='/js/jquery-init.js' strategy='afterInteractive' />
        <Script src='/js/bootstrap.min.js' strategy='afterInteractive' />
        <Script src='/js/gsap.min.js' strategy='afterInteractive' />
        <Script src='/js/ScrollToPlugin.min.js' strategy='afterInteractive' />
        <Script src='/js/ScrollTrigger.min.js' strategy='afterInteractive' />
        <Script src='/js/swiper-bundle.min.js' strategy='afterInteractive' />
        <Script src='/js/magnific-popup.min.js' strategy='afterInteractive' />
        <Script src='/js/jquery.nice-select.min.js' strategy='afterInteractive' />
        <Script src='/js/odometer.min.js' strategy='afterInteractive' />
        <Script src='/js/wow.min.js' strategy='afterInteractive' />
        <Script src='/js/lazysize.min.js' strategy='afterInteractive' />
        <Script src='/js/main-wrapper.js' strategy='afterInteractive' />
        <Script src='js/bootstrap.min.js' strategy='afterInteractive' />
        <Script src='js/gsap-animation.js' strategy='afterInteractive' />
        <Script src='js/Splitetext.js' strategy='afterInteractive' />
        <Script src='js/ScrollSmooth.js' strategy='afterInteractive' />
        <Script src='js/carousel.js' strategy='afterInteractive' />
        <Script src='js/jquery-validate.js' strategy='afterInteractive' />
        <Script src='js/textanimation.js' strategy='afterInteractive' />
        <Script src='js/cursor.js' strategy='afterInteractive' />
      </body>
    </html>
  )
}


