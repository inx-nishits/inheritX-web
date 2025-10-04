export const metadata = {
  title: 'Top Web and Mobile App Development Company | Inheritx',
  description:
    'We are Web &amp; Mobile App Development Company from India &amp; USA offering Custom Web and Mobile App Development services across the globe.',
  keywords:
    'Mobile Application Development Company, Web Development Services, Mobile App Development Company, Web Design and Development Company'
}
import './styles/globals.css'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/image/logo/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
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
      </head>
      <body className='counter-scroll'>
        <div className='d-flex flex-column min-vh-100'>
          <Header />
          <div className='flex-grow-1'>{children}</div>
          <Footer />
        </div>

        <div className='cursor-dot'></div>
        <div className='cursor-dot'></div>
        <div className='cursor-dot'></div>

        {/* Vendor scripts (kept for parity; can be refactored to React later) */}
        <Script src='/js/jquery.min.js' strategy='beforeInteractive' />
        <Script src='/js/bootstrap.min.js' strategy='afterInteractive' />
        <Script src='/js/gsap.min.js' strategy='afterInteractive' />
        <Script src='/js/ScrollToPlugin.min.js' strategy='afterInteractive' />
        <Script src='/js/ScrollTrigger.min.js' strategy='afterInteractive' />
        <Script src='/js/swiper-bundle.min.js' strategy='afterInteractive' />
        <Script src='/js/magnific-popup.min.js' strategy='afterInteractive' />
        <Script
          src='/js/jquery.nice-select.min.js'
          strategy='afterInteractive'
        />
        <Script src='/js/odometer.min.js' strategy='afterInteractive' />
        <Script src='/js/wow.min.js' strategy='afterInteractive' />
        <Script src='/js/lazysize.min.js' strategy='afterInteractive' />
        <Script src='/js/main.js' strategy='afterInteractive' />
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
