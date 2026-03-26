'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
import menuData from './navigation/menuData'
import DesktopNav from './DesktopNav'
import { trackEvent } from '../utils/ga4'

export default function Header() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    if (!isMobileOpen) return

    // Save scroll position and previous inline styles
    const scrollY = window.scrollY || window.pageYOffset
    const prevBodyStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width
    }
    const prevHtmlOverflow = document.documentElement.style.overflow

    // Lock scroll: fixed body prevents background scroll on iOS/Android
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      // Restore styles
      document.documentElement.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyStyle.overflow
      document.body.style.position = prevBodyStyle.position
      document.body.style.top = prevBodyStyle.top
      document.body.style.width = prevBodyStyle.width

      // Don't restore scroll position when closing mobile menu after navigation
      // The onNavigate handler will handle scrolling to top
    }
  }, [isMobileOpen])


  // Helper to check if path is active
  const isActive = path => pathname === path
  // Helper for parent menus with multiple sub-links
  const isParentActive = paths => paths.some(p => pathname.startsWith(p))

  return (
    <>
      <div className='top-bar'>
        <div className='top-bar-inner flex align-items-center justify-content-end justify-content-xl-between'>
          <div className='tf-tb-left d-none d-xl-block'>
            <ul className='list-topbar-item flex align-items-center' style={{ gap: '20px' }}>
              <li className='top-bar-item'>
                <Link
                  href='mailto:contact@inheritx.com'
                  target='_blank'
                  className='d-inline-flex align-items-center gap-2'
                  onClick={() => trackEvent('lead_click', { section: 'header', type: 'email' })}
                >
                  <i className='icon-email' style={{ opacity: 0.6 }}></i>
                  <span>contact@inheritx.com</span>
                </Link>
              </li>
              <li style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }}></li>
              <li className='top-bar-item'>
                <Link
                  href='https://wa.me/918487006480?text=Hello%20inheritx%2C%20I%27d%20like%20to%20get%20in%20touch.'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='d-inline-flex align-items-center gap-2'
                  onClick={() => trackEvent('lead_click', { section: 'header', type: 'whatsapp_sales' })}
                >
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '11px', letterSpacing: '0.05em' }}>SALES INQUIRIES</span>
                  <span>+91 84870 06480</span>
                </Link>
              </li>
              <li style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }}></li>
              <li className='top-bar-item'>
                <Link
                  href='https://wa.me/918160047106?text=Hello%20inheritx%2C%20I%27m%20interested%20in%20career%20opportunities.'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='d-inline-flex align-items-center gap-2'
                  onClick={() => trackEvent('lead_click', { section: 'header', type: 'whatsapp_career' })}
                >
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '11px', letterSpacing: '0.05em' }}>CAREER INQUIRIES</span>
                  <span>+91 8160047106</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className='tf-tb-right flex align-items-center text-end ms-auto ms-xl-0'>
            <ul className='post-social'>
              <li>
                <Link
                  href='https://www.facebook.com/inheritxSolutions/'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit our Facebook page'
                >
                  <i className='icon-fb'></i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://x.com/inheritx'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit our Twitter/X page'
                >
                  <i className='icon-X'></i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit our LinkedIn page'
                >
                  <i className='icon-linkedin'></i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/inheritxsolutions/'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit our Instagram page'
                >
                  <i className='icon-instagram'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className='header header-sticky' id='header'>
        <div className='header-content flex justify-content-between align-items-center'>
          <div className='header-left flex align-items-center'>
            <div className='logo logo-header'>
              <Link href='/' className='d-flex align-items-center' aria-label='InheritX - Go to homepage'>
                <Image src='/image/logo/inx-logo.svg' alt='InheritX logo' width={250} height={40} priority />
              </Link>
            </div>

            <DesktopNav menuData={menuData} />
          </div>

          <div className='header-right'>
            <div className='nav-btn'>
              <Link
                href='/contact'
                className='tf-btn px-4'
                onClick={() => trackEvent('contact_click', { section: 'header', type: 'get_a_quote' })}
              >
                <span>Get A Quote</span>
                <i className='icon-arrow-right'></i>
              </Link>
            </div>

            <div className='nav-megamenu d-none'>
              <a
                href='#canvnasMegamenu'
                data-bs-toggle='offcanvas'
                className='megamenu-btn'
                aria-label='Open mega menu'
              >
                <div className='burger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>

            <div className='mobile-button nav-item d-xl-none'>
              <a href='#canvasMobile' aria-expanded={isMobileOpen} aria-controls='canvasMobile' aria-label='Open navigation menu' onClick={(e) => { e.preventDefault(); setIsMobileOpen(true) }}>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav (offcanvas) */}
      <div
        className={`offcanvas offcanvas-start mobile-nav-wrap ${isMobileOpen ? 'show' : ''}`}
        id='canvasMobile'
        aria-hidden={!isMobileOpen}
      >
        <div className='inner-mobile-nav'>
          <div className='top-header-mobi'>
            <div className='logo-mobile'>
              <Link href='/' onClick={() => { setIsMobileOpen(false); window.scrollTo(0, 0) }} aria-label='InheritX - Go to homepage'>
                <Image src='/image/logo/inx-logo.svg' alt='InheritX logo' width={250} height={40} priority />
              </Link>
            </div>
            <button
              className='mobile-nav-close overflow-hidden'
              aria-label='Close'
              onClick={() => setIsMobileOpen(false)}
            >
              <span className='visually-hidden'>Close</span>
              <svg className='mobile-nav-close-icon' width='20' height='20' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M6 6L18 18M18 6L6 18' />
              </svg>
            </button>
          </div>
          <MobileNav menuData={menuData} onNavigate={() => {
            setIsMobileOpen(false)
            // Scroll to top when navigating to a new page
            window.scrollTo(0, 0)
          }} />
        </div>
      </div>
      {isMobileOpen && (
        <div className='offcanvas-backdrop fade show' onClick={() => {
          setIsMobileOpen(false)
          window.scrollTo(0, 0)
        }}></div>
      )}
      <style jsx>{`
        /* Ensure sidebar content has no outer spacing so header can touch edges */
        .mobile-nav-wrap { padding: 0; }
        .mobile-nav-wrap .inner-mobile-nav { padding: 0; margin: 0; }

        .mobile-nav-close {
          min-width: 40px;
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1; /* keep centered vertically */
        }
        .mobile-nav-close-icon { display: block; width: 20px; height: 20px; stroke: #fff; stroke-width: 2; fill: none; }
        .inner-mobile-nav .top-header-mobi {
          position: sticky;
          padding: 5px 16px;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
          width: 100%;
          margin: 0; /* flush to edges */
          background-color: var(--offcanvas-bg, #0b0f19);
        }

        .post-social li {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1199px) {
          .top-bar .tf-tb-right {
            display: flex;
            justify-content: flex-end;
          }
        }
      `}</style>
    </>
  )
}
