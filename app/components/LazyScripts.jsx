'use client'

import Script from 'next/script'

/**
 * Client Component to handle lazy-loaded scripts with callbacks
 * This is needed because Server Components cannot pass event handlers to Client Components
 */
export default function LazyScripts() {
  return (
    <>
      <Script 
        src='/js/swiper-bundle.min.js' 
        strategy='lazyOnload'
        onLoad={() => {
          // Initialize carousels when Swiper loads
          if (typeof window !== 'undefined' && typeof window.initCarousels === 'function') {
            window.initCarousels();
          }
        }}
      />
    </>
  )
}

