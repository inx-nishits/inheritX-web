import Script from 'next/script'
import './styles/globals.css'
import Header from './components/Header'
import RouteHistoryTracker from './components/RouteHistoryTracker'
import Footer from './components/Footer'
import CounterInitializer from './components/CounterInitializer'
import LazyScripts from './components/LazyScripts'
import { Toaster } from 'react-hot-toast'

// SEO base configuration
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com' // Placeholder: set NEXT_PUBLIC_SITE_URL in env
// Use the requested icon asset for social previews
const defaultOgImage = `${siteUrl}/image/logo/og-banner.png`
const themeColor = '#546EA4' // Placeholder: adjust theme color to match brand

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Top AI, Web, and Mobile App Development Company | InheritX',
    template: '%s | InheritX'
  },
  description:
    'We are a top AI, Web, and Mobile App Development Company from India and the USA, offering custom software, Artificial Intelligence, Machine Learning, Automation, Cloud, and DevOps solutions for businesses worldwide.',
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
    title: 'Top AI, Web, and Mobile App Development Company | InheritX',
    description:
      'We are a top AI, Web, and Mobile App Development Company from India and the USA, offering custom software, Artificial Intelligence, Machine Learning, Automation, Cloud, and DevOps solutions for businesses worldwide.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'InheritX — AI, ML, and Custom Software',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    // Use the standard small summary card to avoid overly large logo previews
    card: 'summary',
    title: 'Top AI, Web, and Mobile App Development Company | InheritX',
    description:
      'We are a top AI, Web, and Mobile App Development Company from India and the USA, offering custom software, Artificial Intelligence, Machine Learning, Automation, Cloud, and DevOps solutions for businesses worldwide.',
    images: [defaultOgImage]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/image/logo/favicon.ico'
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor
}

// Note: Page-level SEO overrides
// - To override metadata per page, use `export const metadata` or `export async function generateMetadata()` in page files.
// - Titles will use the template "%s | InheritX" unless a page provides an absolute title.

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD)
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InheritX',
    url: siteUrl,
    logo: `${siteUrl}/image/logo/og-banner.png`,
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
        {/* Google Fonts: optimized loading with font-display swap */}
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          media='print'
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          />
        </noscript>
        {/* Preload critical hero image for LCP with high priority */}
        <link rel='preload' as='image' href='/image/page-title/herobanner-final.jpg' fetchPriority='high' />
        {/* Safe CSS preloads to speed up first paint without changing behavior */}
        <link rel='preload' as='style' href='/css/bootstrap.min.css' />
        <link rel='preload' as='style' href='/css/styles.min.css' />
        {/* Keep core CSS render-path-critical */}
        <link rel='stylesheet' href='/css/bootstrap.min.css' />
        <link rel='stylesheet' href='/css/styles.min.css' />
        <link rel='stylesheet' href='/css/overrides.min.css' />
        {/* Defer non-critical CSS to avoid render-blocking */}
        {/* Defer lower-priority CSS */}
        <link rel='preload' as='style' href='/css/animate.min.css' />
        <link rel='stylesheet' href='/css/animate.min.css' media='print' onLoad="this.media='all'" />
        <link rel='preload' as='style' href='/css/animate2.min.css' />
        <link rel='stylesheet' href='/css/animate2.min.css' media='print' onLoad="this.media='all'" />
        <link rel='preload' as='style' href='/css/magnific-popup.min.css' />
        <link rel='stylesheet' href='/css/magnific-popup.min.css' media='print' onLoad="this.media='all'" />
        <link rel='stylesheet' href='/css/nice-select.css' />
        <link rel='preload' as='style' href='/css/jquery-ui.min.css' />
        <link rel='stylesheet' href='/css/jquery-ui.min.css' media='print' onLoad="this.media='all'" />
        <link rel='preload' as='style' href='/css/map.min.css' />
        <link rel='stylesheet' href='/css/map.min.css' media='print' onLoad="this.media='all'" />
        <link rel='preload' as='style' href='/css/nouislider.min.css' />
        <link rel='stylesheet' href='/css/nouislider.min.css' media='print' onLoad="this.media='all'" />
        {/* Keep essential interactive CSS render-ready to avoid feature regressions */}
        <link rel='stylesheet' href='/css/swiper-bundle.min.css' />
        <link rel='stylesheet' href='/css/odometer-theme-default.css' />
        <link rel='stylesheet' href='/icons/icomoon/style.css' />

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
          <RouteHistoryTracker />
          <div className='flex-grow-1'>{children}</div>
          <Footer />
          <CounterInitializer />
        </div>

        {/* Global Back-to-Top button (matches footer icon behavior) */}
        <div className='progress-wrap'>
          <svg className='progress-circle svg-content' width='100%' height='100%' viewBox='-1 -1 102 102'>
            <path d='M50,1 a49,49 0 1,1 0,98 a49,49 0 1,1 0,-98' />
          </svg>
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


        {/* Vendor scripts (kept for parity; can be refactored to React later) */}
        {/* Defer jQuery to not block rendering */}
        <Script src='/js/jquery.min.js' strategy='afterInteractive' />
        <Script src='/js/jquery-init.js' strategy='afterInteractive' />
        <Script src='/js/bootstrap.min.js' strategy='lazyOnload' />
        <Script src='/js/gsap.min.js' strategy='afterInteractive' />
        <Script src='/js/ScrollToPlugin.min.js' strategy='afterInteractive' />
        <Script src='/js/ScrollTrigger.min.js' strategy='afterInteractive' />
        <LazyScripts />
        <Script src='/js/magnific-popup.min.js' strategy='afterInteractive' />
        <Script src='/js/jquery.nice-select.min.js' strategy='afterInteractive' />
        <Script src='/js/odometer.min.js' strategy='afterInteractive' />
        <Script src='/js/wow.min.js' strategy='afterInteractive' />
        <Script src='/js/lazysize.min.js' strategy='afterInteractive' />
        <Script src='/js/main-wrapper.js' strategy='afterInteractive' />
        <Script src='/js/gsap-animation.js' strategy='afterInteractive' />
        <Script src='/js/ScrollSmooth.js' strategy='afterInteractive' />
        <Script src='/js/carousel.js' strategy='afterInteractive' />
        <Script src='/js/jquery-validate.js' strategy='afterInteractive' />
      </body>
    </html>
  )
}


