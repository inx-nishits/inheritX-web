'use client'
import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function RouteHistoryTracker () {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastPathRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Include search params in the full path
    const search = searchParams?.toString()
    const fullPath = search ? `${pathname}?${search}` : pathname
    
    const prevPath = lastPathRef.current
    if (prevPath && prevPath !== fullPath) {
      const label = makeTitleCase(pathname.split('/').filter(Boolean).slice(-1)[0] || 'Home')
      try {
        sessionStorage.setItem('inx_prev_route', JSON.stringify({ href: prevPath, label }))
      } catch {}
    }
    lastPathRef.current = fullPath
  }, [pathname, searchParams])

  return null
}

function makeTitleCase (value) {
  return (value || '')
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
