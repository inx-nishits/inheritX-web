import Script from 'next/script'
import { Suspense } from 'react'
import { Poppins } from 'next/font/google'
import './styles/globals.css'
import Header from './components/Header'
import RouteHistoryTracker from './components/RouteHistoryTracker'
import Footer from './components/Footer'
import CounterInitializer from './components/CounterInitializer'
import LazyScripts from './components/LazyScripts'
import AsyncCSS from './components/AsyncCSS'
import ChatBot from './components/chatbot/ChatBot'
import { Toaster } from 'react-hot-toast'

// Optimize Google Fonts using Next.js font optimization
// This eliminates render-blocking font requests
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true
})

// SEO base configuration
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com' // Placeholder: set NEXT_PUBLIC_SITE_URL in env
// Use the requested icon asset for social previews
const defaultOgImage = `${siteUrl}/image/logo/og-banner-schema-theme.png`
const themeColor = '#546EA4' // Placeholder: adjust theme color to match brand

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Global AI & Custom Software Partner | InheritX',
    template: '%s | InheritX'
  },
  description:
    'Building scalable Web, Mobile & Automation solutions for Startups & Enterprises. 🏆 Top Rated. ⭐ Verified 5* Reviews. 💯 100% Client Retention.',
  keywords: [
    'AI development',
    'Custom Software',
    'Mobile App Development',
    'Web Development',
    'Automation Solutions',
    'Enterprise Software',
    'Cloud & DevOps',
    'Machine Learning',
    'Data Engineering'
  ],
  applicationName: 'InheritX',
  authors: [{ name: 'InheritX' }],
  creator: 'InheritX',
  publisher: 'InheritX',
  alternates: {
    canonical: '/',
    languages: { en: '/', 'x-default': '/' }
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'InheritX',
    title: 'Global AI & Custom Software Partner | InheritX',
    description:
      'Building scalable Web, Mobile & Automation solutions for Startups & Enterprises. 🏆 Top Rated. ⭐ Verified 5* Reviews. 💯 100% Client Retention.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'InheritX — Global AI & Custom Software Partner',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    // Large image card for better impact
    card: 'summary_large_image',
    title: 'Global AI & Custom Software Partner | InheritX',
    description:
      'Building scalable Web, Mobile & Automation solutions for Startups & Enterprises. 🏆 Top Rated. ⭐ Verified 5* Reviews. 💯 100% Client Retention.',
    images: [defaultOgImage]
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/image/logo/favicon.ico',
    apple: [{ url: '/image/logo/inx-icon.png', sizes: '180x180' }]
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
    logo: `${siteUrl}/image/logo/og-banner-schema.png`,
    sameAs: [
      'https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/',
      'https://x.com/inheritx',
      'https://www.facebook.com/InheritxSolutions/',
      'https://www.instagram.com/inheritxsolutions/'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 84870 06480',
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

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'InheritX Technologies',
    image: `${siteUrl}/image/logo/og-banner-schema.png`,
    url: siteUrl,
    telephone: '+91 84870 06480',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/',
      'https://x.com/inheritx',
      'https://www.facebook.com/InheritxSolutions/',
      'https://www.instagram.com/inheritxsolutions/'
    ]
  }

  return (
    <html lang='en' className={poppins.className}>
      <head>
        <link rel='icon' href='/image/logo/favicon.ico' />
        {/* Preload critical hero image for LCP with high priority */}
        <link rel='preload' as='image' href='/image/page-title/herobanner-final.jpg' fetchPriority='high' />
        {/* Preload icon font for faster icon rendering */}
        <link rel='preload' as='font' href='/icons/icomoon/fonts/icomoon.woff' type='font/woff' crossOrigin='anonymous' />
        {/* Preload critical CSS for faster first paint */}
        <link rel='preload' as='style' href='/css/bootstrap.min.css' />
        <link rel='preload' as='style' href='/css/styles.min.css' />
        <link rel='preload' as='style' href='/icons/icomoon/style.css' />
        {/* Keep only critical CSS render-path-critical to avoid blocking */}
        <link rel='stylesheet' href='/css/bootstrap.min.css' />
        <link rel='stylesheet' href='/css/styles.min.css' />
        <link rel='stylesheet' href='/css/overrides.min.css' />
        {/* Icon font CSS - critical for above-the-fold icons */}
        <link rel='stylesheet' href='/icons/icomoon/style.css' />
        {/* Non-critical CSS is loaded asynchronously via AsyncCSS component */}

        {/* Canonical and alternate */}


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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className='counter-scroll'>
        {/* Load non-critical CSS asynchronously to prevent render-blocking */}
        <AsyncCSS />
        <div className='d-flex flex-column min-vh-100'>
          <Header />
          <Suspense fallback={null}>
            <RouteHistoryTracker />
          </Suspense>
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

        {/* AI Chatbot Widget */}
        <ChatBot />


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


