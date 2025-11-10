'use client'

import { useEffect } from 'react'

/**
 * Component to asynchronously load non-critical CSS files
 * This prevents render-blocking and improves page load performance
 */
export default function AsyncCSS() {
  useEffect(() => {
    // List of non-critical CSS files to load asynchronously
    const nonCriticalCSS = [
      '/css/animate.min.css',
      '/css/animate2.min.css',
      '/css/magnific-popup.min.css',
      '/css/nice-select.css',
      '/css/jquery-ui.min.css',
      '/css/map.min.css',
      '/css/nouislider.min.css',
      '/css/swiper-bundle.min.css',
      '/css/odometer-theme-default.css',
      '/icons/icomoon/style.css'
    ]

    // Function to load CSS asynchronously
    const loadCSS = (href) => {
      // Check if link already exists
      if (document.querySelector(`link[href="${href}"]`)) {
        return
      }

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.media = 'print'
      link.onload = function() {
        this.media = 'all'
      }
      document.head.appendChild(link)
    }

    // Load all non-critical CSS files
    nonCriticalCSS.forEach(loadCSS)
  }, [])

  return null
}

