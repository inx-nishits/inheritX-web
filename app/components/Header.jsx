'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
import menuData from './navigation/menuData'
import DesktopNav from './DesktopNav'

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
      <div className='top-bar d-none d-md-block'>
        <div className='top-bar-inner flex align-items-center justify-content-between'>
          <div className='tf-tb-left'>
            <ul className='list-topbar-item flex align-items-center'>
              <li className='top-bar-item'>
                <Link href='mailto:contact@inheritx.com' target='_blank' className='d-inline-flex align-items-center gap-2'>
                  <i className='icon-email'></i>
                  <span>contact@inheritx.com</span>
                </Link>
              </li>
              <li className='top-bar-item'>
                <Link href='https://wa.me/918487006480?text=Hello%20inheritx%2C%20I%27d%20like%20to%20get%20in%20touch.' target='_blank' rel='noopener noreferrer' className='d-inline-flex align-items-center gap-2'>
                  <span aria-hidden='true' className='whatsapp-icon' style={{display:'inline-flex',alignItems:'center'}}>
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z'/>
                    </svg>
                  </span>
                  <span>+91 84870 06480</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className='tf-tb-right flex align-items-center'>
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
              <Link href='/contact' className='tf-btn px-4'>
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

      `}</style>
    </>
  )
}
