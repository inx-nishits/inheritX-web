'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNav ({ menuData, onNavigate }) {
  const pathname = usePathname()

  const initialOpenMap = useMemo(() => {
    // All closed initially irrespective of current route
    const map = {}
    menuData.forEach((item, idx) => {
      if (item.type === 'mega') {
        map[idx] = false
      }
    })
    return map
  }, [menuData])

  const [open, setOpen] = useState(initialOpenMap)

  const toggle = idx => {
    // Accordion behavior: only one open at a time
    setOpen(prev => {
      const next = {}
      Object.keys(prev).forEach(key => { next[key] = false })
      next[idx] = !prev[idx]
      return next
    })
  }

  const isActive = href => pathname === href || pathname.startsWith(`${href}/`)
  const isParentActive = (href, columns) => {
    if (pathname === href || pathname.startsWith(`${href}/`)) return true
    if (!columns) return false
    return columns.some(col =>
      col.items.some(i => pathname === i.href || pathname.startsWith(`${i.href}/`))
    )
  }

  return (
    <nav className='mobile-main-nav'>
      <ul id='menu-mobile' className='menu'>
        {menuData.map((item, idx) => {
          if (item.type === 'link') {
            return (
              <li key={item.href} className={isActive(item.href) ? 'current-menu-item' : ''}>
                <Link href={item.href} onClick={onNavigate}>{item.label}</Link>
              </li>
            )
          }

          // mega menu
          const active = isParentActive(item.href, item.columns)
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
                {item.columns?.map((col, colIdx) => (
                  <div className='mobile-mega-col' key={`${item.href}-col-${colIdx}`}>
                    {col.title ? (
                      <h6 className='text-primary fw-bold mb-3 cursor-default'>{col.title}</h6>
                    ) : null}
                    <ul className='list-unstyled'>
                      {col.items.map(link => (
                        <li key={link.href} className={isActive(link.href) ? 'current-menu-item' : ''}>
                          <Link href={link.href} className='text-decoration-none' onClick={onNavigate}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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


