import Link from 'next/link'
import { fetchPortfolioItems } from '../../utils/portfolioUtils'

export const dynamic = 'force-dynamic'

export default async function PortfolioDetailsPage({ params }) {
    const { slug } = params || {}
    const portfolioItems = await fetchPortfolioItems()
    const idx = portfolioItems.findIndex(p => p.slug === slug)
    const item = idx >= 0 ? portfolioItems[idx] : null
    const prev = idx > 0 ? portfolioItems[idx - 1] : null
    const next = idx >= 0 && idx < portfolioItems.length - 1 ? portfolioItems[idx + 1] : null

    if (!item) {
        return (
            <div className='tf-container tf-spacing-8'>
                <h2 className='title'>Portfolio not found</h2>
                <Link href='/portfolio' className='tf-btn'>
                    <span>Back to Portfolio</span>
                </Link>
            </div>
        )
    }
    return (
        <>
            <div className='page-title'>
                <div className='tf-container'>
                    <div className='page-title-content text-center'>
                        <h1 className='title split-text effect-right'>{item.title}</h1>
                        <div className='breadkcum'>
                            <Link href='/' className='link-breadkcum body-2 fw-7 split-text effect-right'>Home</Link>
                            <span className='dot'></span>
                            <span className='page-breadkcum body-2 fw-7 split-text effect-right'> Project Details</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-content tf-spacing-2'>
                <div className='tf-container'>
                    <div className='project-modal-style mb-50 pb-5'>
                        <div className='project-modal-header'>
                            <Link href='/portfolio' className='project-modal-back'>
                                <i className='icon-arrow-left'></i>
                            </Link>
                            <h1 className='project-modal-title'>{item.title}</h1>
                        </div>

                        <div className='project-modal-content'>
                            {item.cover && (
                                <div className='project-image-section mb-4'>
                                    <img
                                        src={item.cover}
                                        alt={item.title}
                                        className='rounded'
                                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                                    />
                                </div>
                            )}

                            <div className='project-description-section'>
                                <p className='project-description-text'>
                                    {item.description || 'No description available for this project.'}
                                </p>
                            </div>

                            <div className='project-details-grid'>
                                <div className='project-detail-item'>
                                    <div className='detail-icon-wrapper'>
                                        <i className='icon-location-dot detail-icon'></i>
                                    </div>
                                    <div className='detail-content'>
                                        <span className='detail-label'>Country:</span>
                                        <span className='detail-value'>{item.country}</span>
                                    </div>
                                </div>

                                <div className='project-detail-item'>
                                    <div className='detail-icon-wrapper'>
                                        <i className='icon-custom-software detail-icon'></i>
                                    </div>
                                    <div className='detail-content'>
                                        <span className='detail-label'>Platform:</span>
                                        <span className='detail-value'>Mobile & TV</span>
                                    </div>
                                </div>

                                <div className='project-detail-item'>
                                    <div className='detail-icon-wrapper'>
                                        <i className='icon-outsourcing detail-icon'></i>
                                    </div>
                                    <div className='detail-content'>
                                        <span className='detail-label'>Industry:</span>
                                        <span className='detail-value'>{item.industry}</span>
                                    </div>
                                </div>

                                <div className='project-detail-item'>
                                    <div className='detail-icon-wrapper'>
                                        <i className='icon-software-product detail-icon'></i>
                                    </div>
                                    <div className='detail-content'>
                                        <span className='detail-label'>Technology:</span>
                                        <span className='detail-value'>{item.technology}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='next-prev-details tf-spacing-2 pt-5'>
                    <div className='tf-container pt-5'>
                        <div className='row rg-50'>
                            <div className='col-6'>
                                {prev && (
                                    <div className='prev-details next-prev-item'>
                                        <Link href={`/porfolio-details/${prev.slug}`} className='link'>
                                            <i className='icon-arrow-left'></i> Previous
                                        </Link>
                                        <div className='prev-content-wrapper'>
                                            <div className='prev-text-content'>
                                                <h5 className='title'>
                                                    <Link href={`/porfolio-details/${prev.slug}`}>{prev.title}</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='col-6'>
                                {next && (
                                    <div className='next-details next-prev-item'>
                                        <Link href={`/porfolio-details/${next.slug}`} className='link'>
                                            {' '}Next <i className='icon-arrow-right'></i>
                                        </Link>
                                        <div className='next-content-wrapper'>
                                            <div className='next-text-content'>
                                                <h5 className='title'>
                                                    <Link href={`/porfolio-details/${next.slug}`}>{next.title}</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


