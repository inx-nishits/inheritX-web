'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { servicesData } from './servicesData'
import Breadcrumbs from '../Breadcrumbs'
import Image from 'next/image'
import OurPlatforms from '../OurPlatforms'

export default function ServicesContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener?.('change', update);
    return () => mql.removeEventListener?.('change', update);
  }, []);

  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title'>Services</h1>
            <Breadcrumbs />
          </div>
        </div>
      </div>

      {/* // <!-- /.page-title --> */}

      {/* // <!-- Main-content --> */}

      <div className='main-content position-relative'>
        <div className='mask mask-service-4 d-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='800'
            height='800'
            fill='none'
          >
            <circle
              cx='400'
              cy='400'
              r='325'
              stroke='url(#b6)'
              strokeWidth='150'
            />
            <defs>
              <linearGradient id='b6' x1='176' x2='569' y1='70.5' y2='674'>
                <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                <stop offset='1' stopColor='#fff' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section className='section-about p-services tf-spacing-3'>
          <div className='tf-container'>
            <div className='row'>
              <div className='col-lg-6 mb-5'>
                <div className={`h-100 position-relative rounded-4 overflow-hidden ${!isMobile ? 'tf-animate-2' : ''}`} style={{ minHeight: '300px' }}>
                  <Image
                    src='/image/page-title/image-12.jpg'
                    alt=''
                    fill
                    className='lazyload'
                    objectFit='cover'
                    objectPosition='top'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='right'>
                  <div className='heading-section mb-45'>
                    <div className='sub-title body-2 fw-7 mb-17'>
                      We Are<span className='text-primary'>&nbsp;InheritX&nbsp;</span>
                      Solutions
                    </div>
                    <h3 className='title fw-6'>
                      From Web to Mobility, and DevOps to Cloud Management
                      <span className='fw-3'>&nbsp;- we excel across the full spectrum of digital services.</span>
                    </h3>
                  </div>
                  <div className='section-content'>
                    <div className='desc mb-5'>
                      <p className='lh-30 fs-2'>
                        Our range of IT services includes web development,
                        enterprise mobility, and cloud management.
                      </p>
                    </div>
                    <div className='list-benefit'>
                      <div className='benefit-item style-big'>
                        <i className='icon-star-of-life'></i>
                        <span className='fs-20'>15+ Years Of Experience</span>
                      </div>
                      <div className='benefit-item style-big'>
                        <i className='icon-star-of-life'></i>
                        <span className='fs-20'>Elite Developer Team</span>
                      </div>
                      <div className='benefit-item style-big'>
                        <i className='icon-star-of-life'></i>
                        <span className='fs-20'>40+ Industries Served</span>
                      </div>

                      <div className='benefit-item style-big'>
                        <i className='icon-star-of-life'></i>
                        <span className='fs-20'>24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-services p-services tf-spacing-2'>
          <div className='top-section'>
            <div className='tf-marquee'>
              <div className='marquee-wrapper'>
                <div className='initial-child-container'>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='list-services flex flex-wrap'>
              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='/image/services-item/WebDevelopment.png'
                    alt='Web Development'
                    className='lazyload'
                    loading='lazy'
                    width='100'
                    height='100'
                  />
                </div>

                <div className='lh-30 fw-6'>
                  <h3 className='title-service text-primary mb-4'>
                    Web Development
                  </h3>
                </div>

                <div className='desc lh-30 mb-2'>
                  Since its inception, InheritX Solutions has delivered seamlessly performing websites that meet our clients’ corporate needs efficiently. We craft excellent and elegant websites in all major frameworks. Delve in to know more.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='/image/services-item/MobileApplicationDevelopment.png'
                    alt='Mobile Application Development'
                    className='lazyload'
                    loading='lazy'
                    width='100'
                    height='100'
                  />
                </div>

                <div className='lh-30 fw-6'>
                  <h3 className='title-service text-primary mb-4'>
                    Enterprise Mobility
                  </h3>
                </div>

                <div className='desc lh-30 mb-2'>
                  We offer a comprehensive range of enterprise mobility solutions that can enhance the productivity, security, and scalability of your business processes. We always meet deadlines while developing high-quality apps.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='/image/services-item/Blockchain.png'
                    alt='Blockchain'
                    className='lazyload'
                    loading='lazy'
                    width='100'
                    height='100'
                  />
                </div>

                <div className='lh-30 fw-6'>
                  <h3 className='title-service text-primary mb-4'>
                    Blockchain
                  </h3>
                </div>

                <div className='desc lh-30 mb-2'>
                  Our blockchain-based app solutions ensure the safety of your online, high-volume transactions. You can build trust and bring flexibility by providing your customers with a highly secure way of conducting online transactions.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='/image/services-item/DevOps.png'
                    alt='DevOps'
                    className='lazyload'
                    loading='lazy'
                    width='100'
                    height='100'
                  />
                </div>

                <div className='lh-30 fw-6'>
                  <h3 className='title-service text-primary mb-4'>
                    DevOps
                  </h3>
                </div>

                <div className='desc lh-30 mb-2'>
                  We integrate advancements from contemporary and emerging technologies to build customized, high-end enterprise software solutions. We serve our global corporate clientele with best-in-class IT solutions.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='/image/services-item/CloudComputing.png'
                    alt='Cloud Computing'
                    className='lazyload'
                    loading='lazy'
                    width='100'
                    height='100'
                  />
                </div>

                <div className='lh-30 fw-6'>
                  <h3 className='title-service text-primary mb-4'>
                    Cloud Management Services
                  </h3>
                </div>

                <div className='desc lh-30 mb-2'>
                  We offer reliable cloud management services at reasonable rates. You can meet data storage and access needs effectively with our cloud-based solutions. Welcome to new opportunities and the scope for expansion.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='/image/services-item/IOT.png'
                    alt='IoT'
                    className='lazyload'
                    loading='lazy'
                    width='100'
                    height='100'
                  />
                </div>

                <div className='lh-30 fw-6'>
                  <h3 className='title-service text-primary mb-4'>
                    Internet of Things (IoT)
                  </h3>
                </div>

                <div className='desc lh-30 mb-2'>
                  From smart homes to smart offices, IoT takes it all! We provide IoT app development services for individuals, the healthcare and manufacturing sectors, and our corporate clients across the world at competitive rates.
                </div>
              </div>
            </div>
          </div>

        </section>

        <div
          className='wg-cta tf-spacing-2 alert alert-dismissible fade show'
          role='alert'
        >
          <div className='tf-container'>
            <div className='cta-inner flex align-items-center justify-content-center'>
              <div className='left flex align-items-center'>
                <div className='icon'>
                  <i className='icon-chat-2'></i>
                </div>
                <h5 className='fw-4 title'>
                  Let’s discuss your app idea and implement an innovative mobility solution for your business needs.
                </h5>
                <a
                  href='/contact'
                  className='tf-btn no-bg text-underline hover-color-main-dark'
                >
                  <span>Let’s Talk</span>
                  <i className='icon-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className='section-company tf-spacing-3'>
          <div className='tf-container w-1810'>
            <div className='section-company-inner'>
              <div className='left-section'>
                <div className='heading-section mb-5'>
                  <div className='sub-title body-2 fw-7 mb-17'>
                    <span className='text-primary'>Grow</span> & Development
                  </div>
                  <h2 className='title fw-6'>
                    Modern Technology and
                    <span className='fw-3'>&nbsp;Advancement Incentives</span>
                  </h2>
                </div>
                <div className='wg-according' id='According1'>
                  <div className='according-item'>
                    <h5 className='fw-5'>
                      <a
                        href='#according1'
                        data-bs-toggle='collapse'
                        className='title-according collapsed'
                      >
                        Learn Our Company’s Mission<span></span>
                      </a>
                    </h5>
                    <div
                      id='according1'
                      className='collapse'
                      data-bs-parent='#According1'
                    >
                      <div className='according-content'>
                        <div className='right'>
                          <div className='desc mb-2'>
                            Since its inception, InheritX Solutions has set many milestones by offering quality IT solutions and services that are capable of bringing disruptive changes to the corporate world.
                          </div>
                          <div className='desc mb-2'>
                            We strive to offer superior-quality solutions that clients prefer for their customers, employees feel pride in, customers appreciate, and investors choose for long-term returns.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='according-item'>
                    <h5 className='fw-5'>
                      <a
                        href='#according2'
                        data-bs-toggle='collapse'
                        className='title-according collapsed'
                      >
                        Our Company’s Vision<span></span>
                      </a>
                    </h5>
                    <div
                      id='according2'
                      className='collapse'
                      data-bs-parent='#According1'
                    >
                      <div className='according-content'>
                        <div className='right'>
                          <div className='desc mb-2'>
                            To be recognized as leaders in quality services and in developing relationships that make a positive difference in our customers’ lives.
                          </div>

                          <div className='desc mb-2'>
                            We provide enterprise-grade design and development services to our clients to boost the productivity of their businesses across the world, with a vision to become the most reliable offshore partner.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='according-item'>
                    <h5 className='fw-5'>
                      <a
                        href='#according3'
                        data-bs-toggle='collapse'
                        className='title-according collapsed'
                      >
                        Why Choose InheritX?<span></span>
                      </a>
                    </h5>
                    <div
                      id='according3'
                      className='collapse'
                      data-bs-parent='#According1'
                    >
                      <div className='according-content'>
                        <div className='right'>
                          <div className='desc lh-30 mb-2'>
                          InheritX Solutions is a leading tablet app development company in India and the USA, specializing in iPad and Android tablet apps. We deliver customized, cost-effective solutions that enhance business value, boost ROI, and meet complex requirements. With on-time delivery and excellent performance, our expert iPad developers build scalable apps for diverse industries.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='according-item'>
                    <h5 className='fw-5'>
                      <a
                        href='#according4'
                        data-bs-toggle='collapse'
                        className='title-according collapsed'
                      >
                        What We Offer?<span></span>
                      </a>
                    </h5>
                    <div
                      id='according4'
                      className='collapse'
                      data-bs-parent='#According1'
                    >
                      <div className='according-content'>
                        <div className='right'>
                          <div className='desc lh-30 mb-2'>
                            InheritX Solutions has an in-house team of experienced developers who can handle projects of any size in the domains of web, mobile apps, and IoT.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right-section w-100'>
                <div className={`image image-section rounded-4 overflow-hidden position-relative accordion-section-image ${!isMobile ? 'tf-animate-1' : ''}`}>
                  <Image
                    src='/image/page-title/image-7.jpg'
                    alt=''
                    className='lazyload'
                    width={900}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurPlatforms />
      </div>
    </>
  )
}
