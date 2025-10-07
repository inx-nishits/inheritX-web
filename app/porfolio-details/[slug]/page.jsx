import Link from 'next/link'
import { portfolioItems } from '../../components/portfolio/portfolioData'

export const dynamic = 'force-static'

export async function generateStaticParams () {
  return portfolioItems.map(item => ({ slug: item.slug }))
}

export default function PortfolioDetailsPage ({ params }) {
  const { slug } = params || {}
  const idx = portfolioItems.findIndex(p => p.slug === slug)
  const item = idx >= 0 ? portfolioItems[idx] : null
  const prev = idx > 0 ? portfolioItems[idx - 1] : null
  const next = idx >= 0 && idx < portfolioItems.length - 1 ? portfolioItems[idx + 1] : null

  if (!item) {
    return (
      <div className='tf-container tf-spacing-8'>
        <h2 className='title'>Portfolio not found</h2>
        <Link href='/porfolio-grid' className='tf-btn'>
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
              <div className='project-description-section'>
                <p className='project-description-text'>
                  {item.title === 'Smart TV' 
                    ? 'TV app built for Hotels where they provide better TV experience for customers who stay in hotel rooms. TV apps provide features like hotel booking, in-room dining, nearby events, Movie to watch, etc... Feature and UI will be based on hotel config in the control panel. TV will operate this app only as TV devices are customized and only operate this app from boot to turn-off.'
                    : item.description
                  }
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
              <div className='col-sm-6'>
                {prev && (
                  <div className='prev-details next-prev-item'>
                    <Link href={`/porfolio-details/${prev.slug}`} className='link'>
                      <i className='icon-arrow-left'></i> Previous
                    </Link>
                    <h4 className='title'>
                      <Link href={`/porfolio-details/${prev.slug}`}>{prev.title}</Link>
                    </h4>
                    <Link href={`/porfolio-details/${prev.slug}`} className='image'>
                      <img src='/image/section/service-details-prev.jpg' alt='' className='lazyload' />
                    </Link>
                  </div>
                )}
              </div>
              <div className='col-sm-6'>
                {next && (
                  <div className='next-details next-prev-item'>
                    <Link href={`/porfolio-details/${next.slug}`} className='link'>
                      {' '}Next <i className='icon-arrow-right'></i>
                    </Link>
                    <h4 className='title'>
                      <Link href={`/porfolio-details/${next.slug}`}>{next.title}</Link>
                    </h4>
                    <Link href={`/porfolio-details/${next.slug}`} className='image'>
                      <img src='/image/section/service-details-next.jpg' alt='' className='lazyload' />
                    </Link>
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


