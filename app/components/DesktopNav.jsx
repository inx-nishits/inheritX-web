'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useCallback } from 'react'

export default function DesktopNav ({ menuData }) {
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

  const handleLinkClick = useCallback(() => {
    // Add a temporary class that disables hover-open so menu closes immediately
    document.body.classList.add('menu-closing')
  }, [])

  const handleMenuHover = useCallback(() => {
    // Remove menu-closing class immediately on hover so dropdown appears instantly
    document.body.classList.remove('menu-closing')
  }, [])

  const isActive = path => pathname === path || pathname.startsWith(`${path}/`)
  const isParentActive = (href, columns) => {
    if (pathname === href || pathname.startsWith(`${href}/`)) return true
    if (!columns) return false
    return columns.some(col =>
      col.items.some(i => pathname === i.href || pathname.startsWith(`${i.href}/`))
    )
  }

  return (
    <nav className='main-menu'>
      <ul className='menu-primary-menu'>
        {menuData.map(item => {
          if (item.type === 'link') {
            return (
              <li
                key={item.href}
                className={`menu-item ${isActive(item.href) ? 'current-menu-item' : ''}`}
              >
                <Link href={item.href} className='item-link body-2' onClick={handleLinkClick}>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          }

          const active = isParentActive(item.href, item.columns)
          return (
            <li
              key={item.href}
              className={`menu-item menu-item-has-children position-static ${active ? 'current-menu-item' : ''}`}
              onMouseEnter={handleMenuHover}
            >
              <Link href={item.href} className='item-link body-2' onClick={handleLinkClick}>
                <span>{item.label}</span>
              </Link>
              <div className='sub-menu mega-menu p-4 py-5'>
                <div className='container'>
                  <div className='row'>
                    {item.columns?.map((col, idx) => (
                      <div className='col-lg-3' key={`${item.href}-col-${idx}`}>
                        {col.title ? (
                          <div className='text-primary fw-bold mb-4 cursor-default'>{col.title}</div>
                        ) : null}
                        <ul className='list-unstyled'>
                          {col.items.map(link => (
                            <li key={link.href} className={`mb-3 ${isActive(link.href) ? 'current-menu-item' : ''}`}>
                              <Link href={link.href} className='text-decoration-none text-white' onClick={handleLinkClick}>
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


