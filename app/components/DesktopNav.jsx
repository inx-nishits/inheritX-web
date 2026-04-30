'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useCallback, useState } from 'react'

export default function DesktopNav({ menuData }) {
  const pathname = usePathname()

  // Ensure any hover-based mega menu is force-closed during navigation
  useEffect(() => {
    // On route change, suppress hover-open. Remove when the cursor leaves the header,
    // or after a fallback timeout if the user doesn't move the mouse.
    const remove = () => { document.body.classList.remove('menu-closing') }
    const headerEl = document.getElementById('header')
    document.body.classList.add('menu-closing')
    const fallbackTimer = window.setTimeout(remove, 3000)

    const onHeaderLeave = () => {
      remove()
      if (headerEl) headerEl.removeEventListener('mouseleave', onHeaderLeave)
      window.removeEventListener('mousemove', onFirstMove)
      window.clearTimeout(fallbackTimer)
    }

    const onFirstMove = () => {
      // If user moves the mouse outside header quickly, header leave may not fire immediately
      if (!headerEl) {
        remove()
        window.clearTimeout(fallbackTimer)
        window.removeEventListener('mousemove', onFirstMove)
      }
    }

    if (headerEl) headerEl.addEventListener('mouseleave', onHeaderLeave)
    window.addEventListener('mousemove', onFirstMove, { once: true })

    return () => {
      window.clearTimeout(fallbackTimer)
      if (headerEl) headerEl.removeEventListener('mouseleave', onHeaderLeave)
      window.removeEventListener('mousemove', onFirstMove)
    }
  }, [pathname])

  const [preferredIndex, setPreferredIndex] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('activeNavIndex')
      if (saved !== null) {
        setPreferredIndex(parseInt(saved, 10))
      }
    }
  }, [pathname])

  const handleLinkClick = useCallback((idx) => {
    document.body.classList.add('menu-closing')
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('activeNavIndex', idx.toString())
    }
    setPreferredIndex(idx)
  }, [])

  const handleMenuHover = useCallback(() => {
    // Remove menu-closing class immediately on hover so dropdown appears instantly
    document.body.classList.remove('menu-closing')
  }, [])

  const isActive = path => pathname === path || (path !== '/' && path !== '#' && pathname.startsWith(`${path}/`))
  
  const getMatchingParentIndices = () => {
    const matches = []
    menuData.forEach((item, idx) => {
      if (pathname === item.href || (item.href !== '/' && item.href !== '#' && pathname.startsWith(`${item.href}/`))) {
        matches.push(idx)
      } else if (item.columns) {
        const hasChildMatch = item.columns.some(col =>
          col.items.some(i => pathname === i.href || (i.href !== '/' && i.href !== '#' && pathname.startsWith(`${i.href}/`)))
        )
        if (hasChildMatch) matches.push(idx)
      }
    })
    return matches
  }
  
  const matchingIndices = getMatchingParentIndices()
  let activeIndex = matchingIndices.length > 0 ? matchingIndices[0] : -1
  if (preferredIndex !== null && matchingIndices.includes(preferredIndex)) {
    activeIndex = preferredIndex
  }

  return (
    <nav className='main-menu'>
      <ul className='menu-primary-menu'>
        {menuData.map((item, menuIdx) => {
          if (item.type === 'link') {
            return (
              <li
                key={item.href}
                className={`menu-item ${activeIndex === menuIdx ? 'current-menu-item' : ''}`}
              >
                <Link href={item.href} className='item-link body-2' onClick={() => handleLinkClick(menuIdx)}>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          }

          const active = activeIndex === menuIdx

          if (item.type === 'mega-cards') {
            return (
              <li
                key={item.href}
                className={`menu-item menu-item-has-children position-static ${active ? 'current-menu-item' : ''}`}
                onMouseEnter={handleMenuHover}
              >
                <Link href={item.href} className='item-link body-2' onClick={() => handleLinkClick(menuIdx)}>
                  <span>{item.label}</span>
                </Link>
                <div className='sub-menu mega-menu px-4 py-4' style={{ width: '100%', left: 0 }}>
                  <div className='container'>
                    <div className='row mb-4'>
                      {item.columns?.map((col, idx) => (
                        <div className='col-lg-4' key={`${item.href}-col-${idx}`}>
                          {col.title ? (
                            <div className='text-primary fw-bold mb-4 cursor-default'>{col.title}</div>
                          ) : null}
                          <div className='row'>
                            {col.items.map(link => (
                              <div key={`${link.href}-${link.label}`} className='col-12 mb-3'>
                                <Link
                                  href={link.href}
                                  className={`text-decoration-none d-flex align-items-center ${isActive(link.href) && activeIndex === menuIdx ? 'text-primary' : 'text-white'}`}
                                  onClick={() => handleLinkClick(menuIdx)}
                                  style={{ transition: 'color 0.3s ease' }}
                                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)' }}
                                  onMouseLeave={(e) => { e.currentTarget.style.color = (isActive(link.href) && activeIndex === menuIdx) ? 'var(--primary)' : 'white' }}
                                >
                                  <span className='fw-medium'>{link.label}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {item.promoCards && item.promoCards.length > 0 && (
                      <div className='row pt-4 border-top border-secondary border-opacity-25'>
                        {item.promoCards.map((card, idx) => (
                          <div className='col-lg-6 mb-3 mb-lg-0' key={`promo-${idx}`}>
                            <Link href={card.href} onClick={() => handleLinkClick(menuIdx)} className='text-decoration-none d-block h-100 overflow-hidden rounded-3 position-relative' style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)`, border: '1px solid rgba(255,255,255,0.1)' }}>
                              <div className='p-4 d-flex flex-column justify-content-center h-100 position-relative z-1'>
                                <span className='text-primary fw-bold mb-2' style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{card.subtitle}</span>
                                <h4 className='text-white fw-bold mb-2'>{card.title}</h4>
                                <p className='text-white-50 mb-0'>{card.description}</p>
                              </div>
                              {card.bgImage && (
                                <div className='position-absolute top-0 start-0 w-100 h-100' style={{ backgroundImage: `url(${card.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, mixBlendMode: 'overlay', zIndex: 0 }}></div>
                              )}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            )
          }

          return (
            <li
              key={item.href}
              className={`menu-item menu-item-has-children position-static ${active ? 'current-menu-item' : ''}`}
              onMouseEnter={handleMenuHover}
            >
              <Link href={item.href} className='item-link body-2' onClick={() => handleLinkClick(menuIdx)}>
                <span>{item.label}</span>
              </Link>
              <div className='sub-menu mega-menu px-4 py-4'>
                <div className='container'>
                  <div className='row'>
                    {item.columns?.map((col, idx) => (
                      <div className='col-lg-3' key={`${item.href}-col-${idx}`}>
                        {col.title ? (
                          <div className='text-primary fw-bold mb-4 cursor-default'>{col.title}</div>
                        ) : null}
                        <ul className='list-unstyled'>
                          {col.items.map(link => (
                            <li key={`${link.href}-${link.label}`} className={`mb-3 ${isActive(link.href) && activeIndex === menuIdx ? 'current-menu-item' : ''}`}>
                              <Link href={link.href} className='text-decoration-none text-white' onClick={() => handleLinkClick(menuIdx)}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}


