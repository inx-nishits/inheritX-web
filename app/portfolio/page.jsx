import Link from 'next/link'
import PortfolioItem from '../components/portfolio/PortfolioItem'
import { fetchPortfolioItems } from '../utils/portfolioUtils'

export const dynamic = 'force-dynamic'

export default async function Page () {
  const portfolioItems = await fetchPortfolioItems()

  const allItems = portfolioItems
  const webItems = portfolioItems.filter(item => item.category === 'UI/UX Design' || item.category === 'Web')
  const mobileItems = portfolioItems.filter(item => item.category === 'Mobile App Development' || item.category === 'Software Development')

  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Our Portfolio</h1>
            <div className='breadkcum'>
              <Link href='/' className='link-breadkcum body-2 fw-7 split-text effect-right'>Home</Link>
              <span className='dot'></span>
              <span className='page-breadkcum body-2 fw-7 split-text effect-right'>Portfolio</span>
            </div>
            <h3 className='text-center pt-5 mt-3 mb-5'>Portfolio Showcase of Our Creative Work.</h3>
            <p className='text-center lh-30'>Our work and happy clients speak for us. Here is a compilation of our work that we have created, managed and optimized with utmost love and dedication.<br />Take a look at our comprehensive portfolio.</p>
          </div>
        </div>
      </div>

      <div className='main-content tf-spacing-2'>
        <div className='tf-container'>
          <div className='flat-animate-tab mb-70'>
            <div className='wg-tab style-2'>
              <ul className='tab-product' role='tablist'>
                <li className='nav-tab-item' role='presentation'>
                  <a href='#tab1' data-bs-toggle='tab' role='tab' className='active fw-5 body-2'>Show All</a>
                </li>
                <li className='nav-tab-item' role='presentation'>
                  <a href='#tab2' data-bs-toggle='tab' role='tab' className='fw-5 body-2'>Web</a>
                </li>
                <li className='nav-tab-item' role='presentation'>
                  <a href='#tab3' data-bs-toggle='tab' role='tab' className='fw-5 body-2'>Mobile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flat-animate-tab'>
          <div className='tab-content'>
            <div className='tab-pane active show' id='tab1' role='tabpanel'>
              <div className='tf-container'>
                <div className='row rg-70'>
                  {allItems.map((item) => (
                    <PortfolioItem key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className='tab-pane' id='tab2' role='tabpanel'>
              <div className='tf-container'>
                <div className='row rg-70'>
                  {webItems.map((item) => (
                    <PortfolioItem key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className='tab-pane' id='tab3' role='tabpanel'>
              <div className='tf-container'>
                <div className='row rg-70'>
                  {mobileItems.map((item) => (
                    <PortfolioItem key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


