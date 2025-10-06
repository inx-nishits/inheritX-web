'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DesktopNav ({ menuData }) {
  const pathname = usePathname()

  const isActive = path => pathname === path
  const isParentActive = (href, columns) => {
    if (pathname.startsWith(href)) return true
    if (!columns) return false
    return columns.some(col => col.items.some(i => pathname.startsWith(i.href)))
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
                <Link href={item.href} className='item-link body-2'>
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
            >
              <Link href={item.href} className='item-link body-2'>
                <span>{item.label}</span>
              </Link>
              <div className='sub-menu mega-menu p-4 py-5'>
                <div className='container'>
                  <div className='row'>
                    {item.columns?.map((col, idx) => (
                      <div className='col-lg-3' key={`${item.href}-col-${idx}`}>
                        {col.title ? (
                          <h6 className='text-primary fw-bold mb-5 cursor-default'>{col.title}</h6>
                        ) : null}
                        <ul className='list-unstyled'>
                          {col.items.map(link => (
                            <li key={link.href} className={`mb-4 ${isActive(link.href) ? 'current-menu-item' : ''}`}>
                              <Link href={link.href} className='text-decoration-none text-white'>
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


