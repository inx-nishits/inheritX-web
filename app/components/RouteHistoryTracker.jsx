'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function RouteHistoryTracker () {
  const pathname = usePathname()
  const lastPathRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prevPath = lastPathRef.current
    if (prevPath && prevPath !== pathname) {
      const label = makeTitleCase(prevPath.split('/').filter(Boolean).slice(-1)[0] || 'Home')
      try {
        sessionStorage.setItem('inx_prev_route', JSON.stringify({ href: prevPath, label }))
      } catch {}
    }
    lastPathRef.current = pathname
  }, [pathname])

  return null
}

function makeTitleCase (value) {
  return (value || '')
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
