'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { projectItems, projectCategories } from '../../data/projectsData'
import ProjectItem from './ProjectItem'
import Breadcrumbs from '../Breadcrumbs'

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

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
                    <div className='page-title-content text-center'>
                        <h1 className='title split-text effect-right'>Our Projects</h1>
                        <Breadcrumbs />
                        <h3 className='text-center pt-5 mt-3 mb-5'>Innovative Solutions That Drive Success</h3>
                        <p className='text-center'>Explore our comprehensive portfolio of cutting-edge projects that showcase our expertise in web development, mobile applications, IoT solutions, and AI-powered innovations.<br />Each project represents our commitment to delivering excellence and driving digital transformation.</p>
                    </div>
                </div>
            </div>

            <div className='main-content tf-spacing-2'>
                <div className='tf-container'>
                    {/* Modern Category Filter */}
                    <div className='projects-filter-section mb-50'>
                        <div className='filter-header text-center mb-30'>
                            <h2 className='filter-title fw-6 mb-3'>Browse by Category</h2>
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
                        <div className='projects-grid'>
                            {filteredItems.map((item) => (
                                <ProjectItem key={item.id} item={item} />
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
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 20px;
                    padding: 40px 30px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .filter-title {
                    font-size: 32px;
                    background: linear-gradient(90deg, #e6f7ff 0%, #aee6ff 35%, #8af7d0 65%, #e6f7ff 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
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
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                    margin-bottom: 40px;
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

                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .filter-tabs {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .filter-tab {
                        width: 200px;
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

