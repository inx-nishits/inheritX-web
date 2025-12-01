import Link from 'next/link'
import { fetchPortfolioItems } from '../../utils/portfolioUtils'
import PortfolioItem from './PortfolioItem'
import Breadcrumbs from '../Breadcrumbs'
 


export const dynamic = 'force-dynamic'

export default async function PortfolioPage() {
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
                        <Breadcrumbs />
                        <h3 className='text-center pt-5 mt-3 mb-3'>Portfolio Showcase of Our Creative Work.</h3>
                        <p className='text-center'>Our work and happy clients speak for us. Here is a compilation of our work that we have created, managed, and optimized with utmost love and dedication.<br />Take a look at our comprehensive portfolio.</p>
                    </div>
                </div>
            </div>

            <div className='main-content tf-spacing-2'>
                <div className='tf-container'>
                    <div className='flat-animate-tab mb-5'>
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
                            <div className='container'>
                                <div className='row rg-70'>
                                    {allItems.map((item) => (
                                        <PortfolioItem key={item.slug} item={item} category="all" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='tab-pane' id='tab2' role='tabpanel'>
                            <div className='container'>
                                <div className='row rg-70'>
                                    {webItems.map((item) => (
                                        <PortfolioItem key={item.slug} item={item} category="web" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='tab-pane' id='tab3' role='tabpanel'>
                            <div className='container'>
                                <div className='row rg-70'>
                                    {mobileItems.map((item) => (
                                        <PortfolioItem key={item.slug} item={item} category="mobile" />
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


