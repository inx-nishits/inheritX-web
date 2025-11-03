'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { projectItems, projectCategories } from '../../data/projectsData'
import ProjectItem from './ProjectItem'
import Breadcrumbs from '../Breadcrumbs'

export default function ProjectsPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [activeCategory, setActiveCategory] = useState(() => {
        // Avoid flicker to 'all' when returning: initialize from storage only if restore flag is set
        try {
            const shouldRestore = sessionStorage.getItem('inx_restore_projects') === '1'
            if (shouldRestore) {
                return sessionStorage.getItem('inx_projects_category') || 'all'
            }
        } catch { }
        return 'all'
    })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // On mount:
        // - If returning from details (restore flag present): restore saved tab + scroll
        // - Else (direct load/refresh): reset to defaults and clear saved values
        try {
            // Highest priority: explicit tab in URL
            const tabParam = searchParams?.get('tab')
            const allowed = ['all', 'web', 'mobile']
            if (tabParam && allowed.includes(tabParam)) {
                setActiveCategory(tabParam)
                try { sessionStorage.setItem('inx_projects_category', tabParam) } catch { }
            }

            const restore = sessionStorage.getItem('inx_restore_projects')
            if (restore === '1') {
                const y = sessionStorage.getItem('inx_projects_scroll')
                if (y) {
                    requestAnimationFrame(() => {
                        window.scrollTo(0, parseInt(y, 10) || 0)
                    })
                }
                // Consume the flag so a refresh won't restore again
                sessionStorage.removeItem('inx_restore_projects')
            } else {
                // Direct load/refresh: ensure defaults
                if (!tabParam) {
                    setActiveCategory('all')
                    sessionStorage.removeItem('inx_projects_category')
                }
                sessionStorage.removeItem('inx_projects_scroll')
                // Ensure we're at the normal position (do nothing; browser default is top)
            }
        } catch { }
        setMounted(true)
    }, [searchParams])

    // Persist active category for future restores and reflect in URL (shallow)
    useEffect(() => {
        try {
            sessionStorage.setItem('inx_projects_category', activeCategory)
        } catch { }
        // Update the URL to include ?tab= when not 'all' to preserve history state
        const currentTabParam = searchParams?.get('tab') || null
        const desiredTabParam = activeCategory !== 'all' ? activeCategory : null
        if (currentTabParam !== desiredTabParam) {
            const query = desiredTabParam ? `?tab=${desiredTabParam}` : ''
            router.replace(`/projects${query}`, { scroll: false })
        }
    }, [activeCategory])

    const filteredItems = activeCategory === 'all'
        ? (() => {
            const webItems = projectItems.filter(item => item.category === 'Web Development')
            const mobileItems = projectItems.filter(item => item.category === 'Mobile App Development')
            return [...webItems, ...mobileItems]
        })()
        : projectItems.filter(item => {
            switch (activeCategory) {
                case 'web':
                    return item.category === 'Web Development'
                case 'mobile':
                    return item.category === 'Mobile App Development'
                default:
                    return true
            }
        })

    return (
        <>
            <div className='page-title'>
                <div className='tf-container'>
                    <div className='page-title-content text-center pb-5'>
                        <h1 className='title split-text effect-right'>Our Projects</h1>
                        <Breadcrumbs />
                        <h3 className='text-center pt-3 mt-3 mb-3'>Innovative Solutions That Drive Success</h3>
                        <p className='text-center'>Explore our comprehensive portfolio of cutting-edge projects that showcase our expertise in web development, mobile applications, IoT solutions, and AI-powered innovations.<br />Each project represents our commitment to delivering excellence and driving digital transformation.</p>
                    </div>
                </div>
            </div>

            <div className='main-content tf-spacing-2'>
                <div className='tf-container'>
                    {/* Modern Category Filter */}
                    <div className='projects-filter-section mb-30 p-5 pt-4'>
                        <div className='filter-header text-center mb-4'>
                            <h2 className='filter-title fw-7 mb-3'>Browse by Category</h2>
                            <p className='filter-subtitle body-2'>Discover projects tailored to your industry needs</p>
                        </div>

                        <div className='filter-tabs-wrapper'>
                            <div className='filter-tabs'>
                                {projectCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        <span className='tab-name'>{category.name}</span>
                                        <span className='tab-count d-none' suppressHydrationWarning>
                                            {mounted ? category.count : ''}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className='projects-grid-section'>
                        <div className='projects-grid' key={activeCategory}>
                            {filteredItems.map((item, index) => (
                                <ProjectItem key={item.id} item={item} index={index} currentCategory={activeCategory} />
                            ))}
                        </div>

                        {filteredItems.length === 0 && (
                            <div className='no-projects-found text-center py-5'>
                                <div className='no-projects-icon mb-3'>
                                    <i className='icon-search' style={{ fontSize: '48px', color: 'var(--primary)', opacity: 0.6 }}></i>
                                </div>
                                <h3 className='no-projects-title fw-6 mb-2'>No Projects Found</h3>
                                <p className='no-projects-text body-2'>No projects match the selected category. Try selecting a different category.</p>
                            </div>
                        )}
                    </div>

                    {/* Call to Action */}
                    <div className='projects-cta-section text-center mt-50'>
                        <div className='cta-content'>
                            <h2 className='cta-title fw-6 mb-3'>Ready to Start Your Project?</h2>
                            <p className='cta-text body-2 mb-4'>Let's discuss how we can bring your vision to life with our innovative solutions.</p>
                            <div className='text-center flex justify-content-center items-center'>
                                <Link href='/contact' className='tf-btn'>
                                    <span>Start Your Project</span>
                                    <i className='icon-arrow-right'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .projects-filter-section {
                    // background: rgba(255, 255, 255, 0.02);
                    border-radius: 20px;
                    padding: 40px 30px;
                    // border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .filter-title {
                    font-size: 26px;
                    background: linear-gradient(90deg, #e6f7ff 0%, #aee6ff 35%, #8af7d0 65%, #e6f7ff 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    line-height: initial;
                }

                .filter-subtitle {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 16px;
                }

                .filter-tabs-wrapper {
                    display: flex;
                    justify-content: center;
                }

                .filter-tabs {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .filter-tab {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50px;
                    background: rgba(255, 255, 255, 0.02);
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .filter-tab::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, var(--primary), rgba(0, 179, 255, 0.6));
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .filter-tab:hover {
                    border-color: rgba(0, 179, 255, 0.4);
                    background: rgba(0, 179, 255, 0.05);
                    transform: translateY(-2px);
                }

                .filter-tab.active {
                    border-color: var(--primary);
                    background: rgba(0, 179, 255, 0.1);
                    color: white;
                }

                .filter-tab.active::before {
                    opacity: 0.1;
                }

                .tab-name {
                    position: relative;
                    z-index: 1;
                }

                .tab-count {
                    position: relative;
                    z-index: 1;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .filter-tab.active .tab-count {
                    background: rgba(255, 255, 255, 0.2);
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    margin-bottom: 40px;
                }

                /* Enter animation for items when switching tabs */
                .projects-grid :global(.project-card) {
                    opacity: 0;
                    transform: translateY(12px) scale(0.98);
                    animation: fadeInUp 420ms ease forwards;
                    animation-delay: calc(var(--stagger, 0) * 60ms);
                    will-change: opacity, transform;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(12px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .no-projects-found {
                    padding: 60px 20px;
                }

                .no-projects-title {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 24px;
                }

                .no-projects-text {
                    color: rgba(255, 255, 255, 0.6);
                }

                .projects-cta-section {
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 20px;
                    padding: 50px 30px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .cta-title {
                    font-size: 28px;
                    color: white;
                }

                .cta-text {
                    color: rgba(255, 255, 255, 0.7);
                    max-width: 600px;
                    margin: 0 auto;
                }

                .projects-cta-section .tf-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin: 0 auto;
                }

                @media (max-width: 575px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .filter-tabs {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .filter-tab {
                        // width: 200px;
                        justify-content: center;
                    }
                    
                    .projects-filter-section {
                        padding: 30px 20px;
                    }
                    
                    .filter-title {
                        font-size: 24px;
                    }
                }
            `}</style>
        </>
    )
}

