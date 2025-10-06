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
          <div className='wg-details wg-project-details tf-spacing-2'>
            <div className='image-blog img-1'>
              <img src={item.cover} alt='' className='lazyload' />
            </div>
            <div className='details-content flex justify-content-between g-30 rg-50'>
              <div className='left'>
                <h3 className='title'>We Create digital Product For Business</h3>
                <div className='desc'>
                  <div className='desc-flex flex g-20'>
                    <span className='frame-item fw-7 fs-27'>S</span>
                    <span className='lh-30'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque seeney laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis</span>
                  </div>
                  <p className='lh-30'>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aufugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...</p>
                </div>
              </div>
              <div className='right'>
                <div className='box-info'>
                  <div className='info-item'>
                    <div className='sub-title fw-5'>Category</div>
                    <h5 className='title-info fw-5'>{item.category}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='next-prev-details tf-spacing-2'>
          <div className='tf-container'>
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


