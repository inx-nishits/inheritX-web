'use client'
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ProjectsPage from '../components/projects'

export default function PortfolioPageClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Redirect query parameters to path-based URLs
    const tabParam = searchParams?.get('tab')
    if (tabParam) {
      // Map tab values (handle backward compatibility)
      const tabMapping = {
        'web-development': 'web-development',
        'mobile-app-development': 'mobile-app-development',
        'mobile-development': 'mobile-app-development', // Backward compatibility
        'ai-ml-projects': 'ai-ml-projects',
        'aiml-projects': 'ai-ml-projects', // Backward compatibility
        'web': 'web-development',
        'mobile': 'mobile-app-development',
        'aiml': 'ai-ml-projects',
      }
      
      const mappedTab = tabMapping[tabParam] || tabParam
      router.replace(`/portfolio/${mappedTab}`, { scroll: false })
    }
  }, [searchParams, router])

  // If there's a tab parameter, don't render yet (redirect is happening)
  const tabParam = searchParams?.get('tab')
  if (tabParam) {
    return null // Wait for redirect
  }

  return (
    <ProjectsPage
      basePath='/portfolio'
      detailsBasePath='/portfolio'
      pageTitle='Our Portfolio'
      enableUrlTabSync={true}
      usePathBasedRouting={true}
    />
  )
}
