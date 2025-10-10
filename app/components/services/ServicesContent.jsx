import Link from 'next/link'
import { servicesData } from './servicesData'
import Breadcrumbs from '../Breadcrumbs'

export default function ServicesContent() {
  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Services</h1>
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
              <div className='col-lg-6'>
                <div className='left'>
                  <div className='image tf-animate-2'>
                    <img
                      src='image/section/img-section-about-p-serveic-1.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                  <div className='img-secion-item img-1 tf-animate-3'>
                    <img
                      src='image/section/img-section-about-p-serveic-2.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='right'>
                  <div className='heading-section mb-45'>
                    <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                      We Are <span className='text-primary'>InheritX</span>{' '}
                      Solutions
                    </div>
                    <h2 className='title fw-6 title-animation'>
                      From Web to Mobility, and DevOps to Cloud Management
                      <span className='fw-3'>&nbsp;- we excel across the full spectrum of digital services.</span>
                    </h2>
                  </div>
                  <div className='section-content'>
                    <div className='desc mb-5 '>
                      <p className='lh-30 fs-2'>
                        Our range of IT services includes web development,
                        enterprise mobility, and cloud management.
                      </p>
                    </div>
                    <div className='list-benefit'>
                      <div className='benefit-item style-big title-animation'>
                        <i className='icon-star-of-life'></i>
                        <span className='fs-20'>15+ Years Of Experience</span>
                      </div>
                      <div className='benefit-item style-big title-animation'>
                        <i className='icon-star-of-life'></i>
                        <span className='fs-20'>Elite Developer Team</span>
                      </div>
                      <div className='benefit-item style-big title-animation'>
                        <i className='icon-star-of-life'></i>
                        <span className='fs-20'>40+ Industries Served</span>
                      </div>

                      <div className='benefit-item style-big title-animation'>
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
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='list-services flex flex-wrap'>
              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='image/services-item/WebDevelopment.png'
                    alt=''
                    className='lazyload'
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <Link href='/' className='title-service'>
                    Web Development
                  </Link>
                </h5>

                <div className='desc lh-30 mb-2'>
                  Since its inception, InheritX Solutions has delivered seamlessly performing websites that meet our clients’ corporate needs efficiently. We craft excellent and elegant websites in all major frameworks. Delve in to know more.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='image/services-item/MobileApplicationDevelopment.png'
                    alt=''
                    className='lazyload'
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <Link href='/' className='title-service'>
                    Enterprise Mobility
                  </Link>
                </h5>

                <div className='desc lh-30 mb-2'>
                  We offer a comprehensive range of enterprise mobility solutions that can enhance the productivity, security, and scalability of your business processes. We always meet deadlines while developing high-quality apps.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='image/services-item/Blockchain.png'
                    alt=''
                    className='lazyload'
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <Link href='/' className='title-service'>
                    Blockchain
                  </Link>
                </h5>

                <div className='desc lh-30 mb-2'>
                  Our blockchain-based app solutions ensure the safety of your online, high-volume transactions. You can build trust and bring flexibility by providing your customers with a highly secure way of conducting online transactions.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='image/services-item/DevOps.png'
                    alt=''
                    className='lazyload'
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <Link href='/' className='title-service'>
                    DevOps
                  </Link>
                </h5>

                <div className='desc lh-30 mb-2'>
                  We integrate advancements from contemporary and emerging technologies to build customized, high-end enterprise software solutions. We serve our global corporate clientele with best-in-class IT solutions.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='image/services-item/CloudComputing.png'
                    alt=''
                    className='lazyload'
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <Link href='/' className='title-service'>
                    Cloud Management Services
                  </Link>
                </h5>

                <div className='desc lh-30 mb-2'>
                  We offer reliable cloud management services at reasonable rates. You can meet data storage and access needs effectively with our cloud-based solutions. Welcome to new opportunities and the scope for expansion.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div className='icon bg-white p-3 rounded-4 overflow-hidden d-flex align-items-center justify-content-center text-center'>
                  <img
                    src='image/services-item/IOT.png'
                    alt=''
                    className='lazyload'
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <Link href='/' className='title-service'>
                    Internet of Things (IoT)
                  </Link>
                </h5>

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
                <div className='heading-section mb-53'>
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    <span className='text-primary'>Grow</span> & Development
                  </div>
                  <h2 className='title fw-6 title-animation'>
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
                        className='title-according'
                      >
                        Learn Our Company’s Mission<span></span>
                      </a>
                    </h5>
                    <div
                      id='according1'
                      className='collapse show'
                      data-bs-parent='#According1'
                    >
                      <div className='according-content'>
                        <div className='right'>
                          <div className='desc lh-30 mb-2'>
                            Since its inception, InheritX Solutions has set many milestones by offering quality IT solutions and services that are capable of bringing disruptive changes to the corporate world.
                          </div>
                          <div className='desc lh-30 mb-0'>
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
                          <div className='desc lh-30 mb-2'>
                            To be recognized as leaders in quality services and in developing relationships that make a positive difference in our customers’ lives.
                          </div>

                          <div className='desc lh-30 mb-0'>
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
              <div className='right-section'>
                <div className='image image-section tf-animate-1 rounded-4 overflow-hidden'>
                  <img
                    src='image/home/img-section-company.png'
                    alt=''
                    className='lazyload'
                  />
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
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-60 text-center'>
                  <h2 className='title fw-6 title-animation mb-5'>
                    Our <span className='text-primary'>Platforms</span>
                  </h2>
                  <p className='title-animation'>
                    InheritX provides web app development services in PHP, ASP.NET, AngularJS, Node.js, and UI/UX design.
                  </p>
                </div>
              </div>
            </div>

            <div className='list-services flex flex-wrap'>
              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/apple.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    iOS Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/android.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    Android Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/flutter.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    Flutter Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/react.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    React Native Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/angular.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    AngularJS Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/python.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    Python Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/nextjs.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    NextJS Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/laravel.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    Laravel Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/react.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    ReactJS Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/nodejs.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    Node.js Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/php.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    PHP Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/aws.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    AWS Services
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/IOT.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    IOT Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/pwa.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    PWA Development
                  </span>
                </h5>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src='image/services-icon/digitalmarketing.svg'
                    alt=''
                    className='lazyload img-fluid'
                    style={{ maxWidth: '60px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    Digital Marketing
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
