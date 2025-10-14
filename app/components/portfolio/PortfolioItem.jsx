import Link from 'next/link'

export default function PortfolioItem({ item, category }) {
  const getCategoryParam = () => {
    if (category === 'web') return '?category=web'
    if (category === 'mobile') return '?category=mobile'
    return ''
  }

  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
      <div className='project-gird-item project-item'>
        <Link href={`/porfolio-details/${item.slug}${getCategoryParam()}`} className='image w-100 rounded-4 overflow-hidden'>
          <img 
            src={item.thumb} 
            data-src={item.thumb} 
            alt={item.title} 
            className='lazyload' 
          />
        </Link>
        <div className='item-content'>
          <h4 className='title-project'>
            <Link href={`/porfolio-details/${item.slug}${getCategoryParam()}`}>{item.title}</Link>
          </h4>
          <div className='project-meta-clean'>
            <div className='meta-line'>
              <i className='meta-icon icon-star'></i>
              <span className='meta-label'>Industry:</span>
              <span className='meta-value'>{item.industry}</span>
            </div>
            <div className='meta-line'>
              <i className='meta-icon icon-check'></i>
              <span className='meta-label'>Technology:</span>
              <span className='meta-value'>{item.technology}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
