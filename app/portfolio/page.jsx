import Link from 'next/link'

export const dynamic = 'force-static'

export default function Page () {
  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Our Portfolio</h1>
            <div className='breadkcum'>
              <a href='index.html' className='link-breadkcum body-2 fw-7 split-text effect-right'>Home</a>
              <span className='dot'></span>
              <span className='page-breadkcum body-2 fw-7 split-text effect-right'>Portfolio</span>
            </div>
            <h3 className='text-center pt-5 mt-3 mb-5'>Portable Showcase of Our Creative Work.</h3>
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
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/mobile-application-design' className='image'>
                        <img src='image/project-item/project-item-2.jpg' data-src='image/project-item/project-item-2.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details/mobile-application-design'>Mobile Application Design</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/ui-ux-design' className='image'>
                        <img src='image/project-item/project-item-3.jpg' data-src='image/project-item/project-item-3.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details/ui-ux-design'>UI/UX Design</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/contemporary-art' className='image'>
                        <img src='image/project-item/project-item-4.jpg' data-src='image/project-item/project-item-4.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>UI/UX Design</div>
                        <h3 className='title-project'><Link href='/porfolio-details/contemporary-art'>Contemporary Art</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/app-for-rent-a-car' className='image'>
                        <img src='image/project-item/project-item-5.jpg' data-src='image/project-item/project-item-5.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details/app-for-rent-a-car'>App For Rent A Car</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/business-analysis' className='image'>
                        <img src='image/project-item/project-item-6.jpg' data-src='image/project-item/project-item-6.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Business</div>
                        <h3 className='title-project'><Link href='/porfolio-details/business-analysis'>Business Analysis</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/data-recovery' className='image'>
                        <img src='image/project-item/project-item-7.jpg' data-src='image/project-item/project-item-7.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Technology</div>
                        <h3 className='title-project'><Link href='/porfolio-details/data-recovery'>Data Recovery</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane' id='tab2' role='tabpanel'>
              <div className='tf-container'>
                <div className='row rg-70'>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/perfit-hr' className='image'>
                        <img src='image/project-item/project-item-2.jpg' data-src='image/project-item/project-item-2.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details/perfit-hr'>PerFit-HR</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/tvs' className='image'>
                        <img src='image/project-item/project-item-3.jpg' data-src='image/project-item/project-item-3.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details/tvs'>TVS</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/solen-online' className='image'>
                        <img src='image/project-item/project-item-4.jpg' data-src='image/project-item/project-item-4.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Solen Online</div>
                        <h3 className='title-project'><Link href='/porfolio-details/solen-online'>Contemporary Art</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details/app-for-rent-a-car' className='image'>
                        <img src='image/project-item/project-item-5.jpg' data-src='image/project-item/project-item-5.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Roula</div>
                        <h3 className='title-project'><Link href='/porfolio-details/app-for-rent-a-car'>App For Rent A Car</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane' id='tab3' role='tabpanel'>
              <div className='tf-container'>
                <div className='row rg-70'>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details' className='image'>
                        <img src='image/project-item/project-item-2.jpg' data-src='image/project-item/project-item-2.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details'>Mobile Application Design</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details' className='image'>
                        <img src='image/project-item/project-item-3.jpg' data-src='image/project-item/project-item-3.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details'>UI/UX Design</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details' className='image'>
                        <img src='image/project-item/project-item-4.jpg' data-src='image/project-item/project-item-4.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>UI/UX Design</div>
                        <h3 className='title-project'><Link href='/porfolio-details'>Contemporary Art</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='project-gird-item project-item'>
                      <Link href='/porfolio-details' className='image'>
                        <img src='image/project-item/project-item-5.jpg' data-src='image/project-item/project-item-5.jpg' alt='' className='lazyload' />
                      </Link>
                      <div className='item-content'>
                        <div className='sub-title body-2 fw-7'>Software Development</div>
                        <h3 className='title-project'><Link href='/porfolio-details'>App For Rent A Car</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


