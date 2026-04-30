'use client'
import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNav ({ menuData, onNavigate }) {
  const pathname = usePathname()

  const initialOpenMap = useMemo(() => {
    // All closed initially irrespective of current route
    const map = {}
    menuData.forEach((item, idx) => {
      if (item.type === 'mega' || item.type === 'mega-cards') {
        map[idx] = false
      }
    })
    return map
  }, [menuData])

  const [open, setOpen] = useState(initialOpenMap)

  // Close all mega sections on route change so menu is reset when reopened
  useEffect(() => {
    setOpen(initialOpenMap)
  }, [pathname, initialOpenMap])

  const toggle = idx => {
    // Accordion behavior: only one open at a time
    setOpen(prev => {
      const next = {}
      Object.keys(prev).forEach(key => { next[key] = false })
      next[idx] = !prev[idx]
      return next
    })
  }

  const isActive = path => pathname === path || (path !== '/' && path !== '#' && pathname.startsWith(`${path}/`))
  
  const getActiveParentIndex = () => {
    return menuData.findIndex(item => {
      if (pathname === item.href || (item.href !== '/' && item.href !== '#' && pathname.startsWith(`${item.href}/`))) return true
      if (item.columns) {
        return item.columns.some(col =>
          col.items.some(i => pathname === i.href || (i.href !== '/' && i.href !== '#' && pathname.startsWith(`${i.href}/`)))
        )
      }
      return false
    })
  }
  
  const activeIndex = getActiveParentIndex()

  return (
    <nav className='mobile-main-nav'>
      <ul id='menu-mobile' className='menu'>
        {menuData.map((item, idx) => {
          if (item.type === 'link') {
            return (
              <li key={item.href} className={activeIndex === idx ? 'current-menu-item' : ''}>
                <Link href={item.href} onClick={onNavigate}>{item.label}</Link>
              </li>
            )
          }

          // mega menu
          const active = activeIndex === idx
          const expanded = !!open[idx]
          return (
            <li key={item.href} className={active ? 'current-menu-item' : ''}>
              <div className='mobile-row flex justify-content-between align-items-center'>
                <Link href={item.href} className='mobile-link' onClick={onNavigate}>{item.label}</Link>
                <button
                  type='button'
                  aria-expanded={expanded}
                  aria-controls={`mega-${idx}`}
                  className='mobile-sub-toggle'
                  onClick={() => toggle(idx)}
                >
                  {expanded ? '−' : '+'}
                </button>
              </div>
              <div
                id={`mega-${idx}`}
                className={`mobile-mega ${expanded ? 'open' : 'collapsed'}`}
                style={{ maxHeight: expanded ? '1000vh' : '0px' }}
                aria-hidden={!expanded}
              >
                {/* render columns stacked for mobile */}
                {item.type === 'mega-cards' ? (
                  <div className='mobile-mega-cards-wrap'>
                    {item.columns?.map((col, colIdx) => (
                      <div className='mobile-mega-col' key={`${item.href}-col-${colIdx}`}>
                        {col.title ? (
                          <div className='text-primary fw-bold mb-3 cursor-default'>{col.title}</div>
                        ) : null}
                        <ul className='list-unstyled mb-0'>
                          {col.items.map(link => (
                            <li key={`${link.href}-${link.label}`} className={isActive(link.href) && activeIndex === idx ? 'current-menu-item' : 'mb-3'}>
                              <Link href={link.href} className={`text-decoration-none d-flex align-items-center ${isActive(link.href) && activeIndex === idx ? 'text-primary' : 'text-white'}`} onClick={onNavigate}>
                                <span>{link.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.promoCards && item.promoCards.length > 0 && (
                      <div className='mt-4 pt-3 border-top border-secondary border-opacity-25'>
                        {item.promoCards.map((card, idx) => (
                          <Link key={`promo-mobi-${idx}`} href={card.href} onClick={onNavigate} className='d-block mb-3 p-3 rounded position-relative overflow-hidden text-decoration-none' style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className='position-relative z-1'>
                              <div className='text-primary fw-bold mb-1' style={{ fontSize: '10px', letterSpacing: '1px' }}>{card.subtitle}</div>
                              <div className='text-white fw-bold mb-1' style={{ fontSize: '14px' }}>{card.title}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.columns?.map((col, colIdx) => (
                    <div className='mobile-mega-col' key={`${item.href}-col-${colIdx}`}>
                      {col.title ? (
                        <div className='text-primary fw-bold mb-3 cursor-default'>{col.title}</div>
                      ) : null}
                      <ul className='list-unstyled'>
                        {col.items.map(link => (
                          <li key={`${link.href}-${link.label}`} className={isActive(link.href) && activeIndex === idx ? 'current-menu-item' : ''}>
                            <Link href={link.href} className='text-decoration-none' onClick={onNavigate}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        .mobile-row { display: flex; align-items: center; }
        .mobile-link { display: inline-flex; align-items: center; }
        .mobile-sub-toggle { background: transparent; border: 0; color: #fff; padding: 8px 12px; font-size: 18px; line-height: 1; display: inline-flex; align-items: center; justify-content: center; }
        .mobile-mega { padding-left: 8px; overflow: hidden; transition: max-height 300ms ease; }
        .mobile-mega-col { margin: 10px 0; }
      `}</style>
    </nav>
  )
}


