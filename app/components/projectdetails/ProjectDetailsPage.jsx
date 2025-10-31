'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { projectItems, getProjectBySlug } from '../../data/projectsData'

export default function ProjectDetailsPage({ params }) {
    const router = useRouter()

    const handleBackToProjects = (e) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault()
        const categoryKey = (() => {
            if (!item) return 'all'
            const c = (item.category || '').toLowerCase()
            if (c.includes('web')) return 'web'
            if (c.includes('mobile')) return 'mobile'
            return 'all'
        })()
        try {
            const raw = sessionStorage.getItem('inx_prev_route')
            const prev = raw ? JSON.parse(raw) : null
            if (prev && typeof prev.href === 'string' && prev.href.startsWith('/projects')) {
                router.back()
                return
            }
        } catch { }
        router.push(`/projects?tab=${categoryKey}`)
    }
    const { slug } = params || {}
    const item = getProjectBySlug(slug)

    if (!item) {
        return (
            <div className='tf-container tf-spacing-8'>
                <div className='project-not-found text-center'>
                    <div className='not-found-icon mb-4'>
                        <i className='icon-search' style={{ fontSize: '64px', color: 'var(--primary)', opacity: 0.6 }}></i>
                    </div>
                    <h2 className='not-found-title fw-6 mb-3'>Project Not Found</h2>
                    <p className='not-found-text body-2 mb-4'>The project you're looking for doesn't exist or has been moved.</p>
                    <Link href='/projects?tab=all' className='tf-btn' onClick={handleBackToProjects}>
                        <span>Back to Projects</span>
                        <i className='icon-arrow-left'></i>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='tf-container pt-5 mt-md-5'>
                <div className='project-details-container'>
                    <div className='project-back-btn d-flex gap-2'>
                        <Link href={`/projects?tab=${(() => { const c=(item.category||'').toLowerCase(); return c.includes('web')?'web':c.includes('mobile')?'mobile':'all' })()}`} className='back-link d-flex align-items-center gap-2' onClick={handleBackToProjects}>
                            <i className='icon-arrow-left'></i>
                            <span>Back to Projects</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='page-title'>
                <div className='tf-container'>
                    <div className='project-details-container'>
                        <div className='page-title-content text-center pt-5 pb-5'>
                            <h1 className='title split-text effect-right'>{item.title}</h1>
                            <div className='breadkcum'>
                                <Link href='/' className='link-breadkcum body-2 fw-7 split-text effect-right'>Home</Link>
                                <span className='dot'></span>
                                <Link href={`/projects?tab=${(() => { const c=(item.category||'').toLowerCase(); return c.includes('web')?'web':c.includes('mobile')?'mobile':'all' })()}`} className='link-breadkcum body-2 fw-7 split-text effect-right' onClick={handleBackToProjects}>Projects</Link>
                                <span className='dot'></span>
                                <span className='page-breadkcum body-2 fw-7 split-text effect-right'>Project Details</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-content tf-spacing-2'>
                <div className='tf-container'>
                    <div className='project-details-container'>
                        {/* Project Header */}
                        <div className='project-header-section'>


                            <div className='project-header-content'>
                                <h1 className='project-main-title d-none'>{item.title}</h1>
                                <div className='project-category-badge'>{item.category}</div>
                            </div>
                        </div>

                        {/* Project Overview */}
                        <div className='project-overview-section'>
                            <div className='project-image-container'>
                                <img
                                    src={item.cover}
                                    alt={item.title}
                                    className='project-main-image'
                                />
                            </div>

                            <div className='project-overview-content'>
                                <h2 className='overview-title'>Project Overview</h2>
                                <p className='overview-description'>{item.description}</p>
                            </div>
                        </div>

                        {/* Project Details Grid */}
                        <div className='project-details-grid'>
                            <div className='detail-section'>
                                <h3 className='section-title'>Technologies Used</h3>
                                <div className='tech-stack'>
                                    {item.technology.split(', ').map((tech, index) => (
                                        <div key={index} className='tech-item'>
                                            <i className='tech-icon icon-code'></i>
                                            <span>{tech.trim()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='detail-section'>
                                <h3 className='section-title'>Key Features</h3>
                                <div className='features-grid'>
                                    {item.features.map((feature, index) => (
                                        <div key={index} className='feature-item'>
                                            <i className='feature-icon icon-check'></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='detail-section'>
                                <h3 className='section-title'>Project Information</h3>
                                <div className='project-info-list'>
                                    <div className='info-row'>
                                        <span className='info-label'>Industry:</span>
                                        <span className='info-value'>{item.industry}</span>
                                    </div>
                                    <div className='info-row'>
                                        <span className='info-label'>Category:</span>
                                        <span className='info-value'>{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className='project-cta-section'>
                            <div className='cta-content'>
                                <h2 className='cta-title'>Interested in Similar Projects?</h2>
                                <p className='cta-text'>Let's discuss how we can bring your vision to life with our innovative solutions.</p>
                                <div className='cta-buttons'>
                                    <Link href='/contact' className='tf-btn primary'>
                                        <span>Start Your Project</span>
                                        <i className='icon-arrow-right'></i>
                                    </Link>
                                    <Link href={`/projects?tab=${(() => { const c=(item.category||'').toLowerCase(); return c.includes('web')?'web':c.includes('mobile')?'mobile':'all' })()}`} className='tf-btn secondary' onClick={handleBackToProjects}>
                                        <span>View More Projects</span>
                                        <i className='icon-eye'></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .project-details-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .project-header-section {
                    margin-bottom: 50px;
                }

                .project-back-btn {
                    margin-bottom: 30px;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--primary);
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .back-link:hover {
                    color: white;
                    transform: translateX(-4px);
                }

                .project-header-content {
                    text-align: center;
                }

                
                .project-main-title {
                    font-size: 48px;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 15px;
                    line-height: 1.2;
                }

                .project-category-badge {
                    display: inline-block;
                    background: rgba(0, 179, 255, 0.1);
                    color: var(--primary);
                    padding: 8px 20px;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border: 1px solid rgba(0, 179, 255, 0.3);
                }

                .project-overview-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 50px;
                    margin-bottom: 60px;
                    align-items: start;
                }

                .project-image-container {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    padding: 0px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .project-main-image {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    display: block;
                    margin: 0 auto;
                }

                .project-overview-content {
                    padding: 20px 0 20px;
                }

                .overview-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 10px;
                    line-height: initial;
                }

                .overview-description {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 14px;
                    line-height: 26px;
                    margin-bottom: 5px;
                }

                .project-details-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                    margin-bottom: 60px;
                }

                .detail-section {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 30px;
                }

                .section-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .section-title::before {
                    content: '';
                    width: 4px;
                    height: 20px;
                    background: var(--primary);
                    border-radius: 2px;
                }

                .tech-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .tech-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: rgba(0, 179, 255, 0.05);
                    border: 1px solid rgba(0, 179, 255, 0.1);
                    border-radius: 12px;
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 500;
                }

                .tech-icon {
                    color: var(--primary);
                    font-size: 16px;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 12px;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: rgba(0, 214, 143, 0.05);
                    border: 1px solid rgba(0, 214, 143, 0.1);
                    border-radius: 12px;
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 500;
                }

                .feature-icon {
                    color: #00d68f;
                    font-size: 16px;
                }

                .project-info-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .info-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    gap: 4px;
                }

                .info-row:last-child {
                    border-bottom: none;
                }

                .info-row .info-label {
                    color: rgba(255, 255, 255, 0.6);
                    font-weight: 500;
                }

                .info-row .info-value {
                    color: white;
                    font-weight: 600;
                    text-align: right;
                }

                .project-cta-section {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 50px 40px;
                    text-align: center;
                }

                .cta-title {
                    font-size: 32px;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 15px;
                    line-height: initial;
                }

                .cta-text {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 16px;
                    margin-bottom: 30px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .cta-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .tf-btn.primary {
                    background: linear-gradient(135deg, var(--primary), rgba(0, 179, 255, 0.8));
                    border: none;
                }

                .tf-btn.secondary {
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                }

                .tf-btn.secondary:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--primary);
                }

                @media (max-width: 768px) {
                    .project-overview-section {
                        grid-template-columns: 1fr;
                        gap: 30px;
                        margin-bottom: 30px;
                    }
                    
                    .project-main-title {
                        font-size: 32px;
                    }
                    
                    .project-quick-info {
                        grid-template-columns: 1fr;
                    }
                    
                    .project-details-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .tf-btn {
                        width: 100%;
                        max-width: 300px;
                    }
                }
            `}</style>
        </>
    )

    function getStatusColor(status) {
        switch (status) {
            case 'Completed':
                return '#00d68f'
            case 'In Progress':
                return '#00b3ff'
            case 'Planning':
                return '#ffa726'
            default:
                return '#666'
        }
    }
}
