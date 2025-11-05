import Image from "next/image";
import Link from "next/link";
import OurPlatforms from "../OurPlatforms";

// Mapping platform titles to service categories
const platformServiceMapping = {
  "iOS Development": "iphone-app-development",
  "Android Development": "android-app-development", 
  "Flutter Development": "flutter-app-development",
  "React Native Development": "react-native-app-development",
  "AngularJS Development": "angularjs-development",
  "Python Development": "python-development",
  "NextJS Development": "nextjs-development",
  "Laravel Development": "laravel-development",
  "ReactJS Development": "reactjs-development",
  "Node.js Development": "nodejs-development",
  "PHP Development": "php-development",
  "AWS Services": "aws-services",
  "IOT Development": "iot-development",
  "PWA Development": "pwa-development",
  "Digital Marketing": "seo-services"
};

export default function HireExpertContent() {
  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Hire Experts</h1>
            <div className='breadkcum'>
              <Link
                href='/'
                className='link-breadkcum body-2 fw-7 split-text effect-right'
              >
                Home
              </Link>
              <span className='dot'></span>
              <span className='page-breadkcum body-2 fw-7 split-text effect-right'>
                Hire Experts
              </span>
            </div>
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
                <div className='h-100 tf-animate-2 position-relative rounded-4 overflow-hidden' style={{ minHeight: '400px' }}>
                  <Image
                    src='/image/page-title/image-6.jpg'
                    alt=''
                    fill
                    className='lazyload'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='right'>
                  <div className='heading-section mb-45'>
                    <h2 className='title fw-6'>
                      Hire Dedicated and Professional Developers
                    </h2>
                  </div>
                  <div className='section-content'>
                    <div className='desc mb-5'>
                      <p className='fs-2 mb-5'>
                        A Robust Website or an Engaging App- We Have Developers
                        for Every Need of Yours!
                      </p>

                      <p className='mb-4'>
                        A highly competitive environment compels entrepreneurs
                        to come up with innovative IT solutions that easily
                        connect them with employees and customers. But, at
                        times, startups and SMEs find it difficult to bring
                        advanced solutions to their business due to budget
                        constraints and other limitations. Hiring models are
                        designed to meet this issue effectively.
                      </p>
                      <p className='mb-4'>
                        Since inception in 2011, Inheritx Solutions has
                        supported many SMEs and startups as a technology
                        partner. We have provided the best resources to our
                        global clientele to accomplish their web and app
                        projects on time. Our experienced web and app developers
                        are capable of handling projects of any size and
                        scale while meeting deadlines. Whatever hiring model
                        you choose, you can remain assured of the best IT
                        solutions at reasonable rates.
                      </p>
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
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Four <span className='text-stroke'>Pillars</span> of Our Hiring Model&nbsp;</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <h3 className='text-center p-2 mb-5'>
              Whether it is a DRE (Dedicated Resource Engagement), T&M (Time and
              Material), or a Fixed Price model, our flexible engagement models
              come with these four key characteristics.
            </h3>

            <div className='custom-services-wrapper d-flex flex-wrap'>
              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/collaboration.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Collaboration</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  We tend to collaborate with various teams of the client's
                  company to come up with the most suitable solutions in the web
                  and mobility domains
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/App_Maintenance.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>App Maintenance</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  We provide regular updates, performance optimization, and bug fixes to ensure your app runs smoothly, securely, and efficiently across all devices.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/appplatformmigration.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>App Platform Migration Service
                  </h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  Seamlessly migrate your app across platforms or technologies with zero data loss, ensuring enhanced performance, scalability, and compatibility.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/App_Marketing.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Mobile App Marketing</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  Boost your app’s visibility and downloads with our targeted marketing strategies, including ASO, social campaigns, and user engagement optimization.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/transparency.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Transparency</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  By implementing the best methods for ensuring the safety of the
                  client's data and signing NDAs, we provide the highest level of
                  transparency
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/communication.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Communication</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  Our dedicated and experienced developers can communicate
                  easily and effectively to understand all your requirements and
                  market trends
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/trust.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Trust</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  Since inception, we have never compromised on the quality and
                  performance of our solutions to gain the trust of our global
                  corporate clientele
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/support-after-development.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>24/7 Technical Assistance</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  Our expert team provides round-the-clock technical assistance,
                  ensuring your systems run smoothly, problems are resolved
                  promptly, and business operations remain uninterrupted at all
                  times.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/Web_Maintenance_and_Upgrade.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Maintenance and Upgrade</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  We offer comprehensive maintenance and upgrades, keeping your
                  software and systems updated, optimized, and fully secure,
                  ensuring peak performance and reliability for your business.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/migrationservice.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Migration</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  Our seamless migration services safely transfer your data and
                  systems to new platforms, minimizing downtime, reducing risks,
                  and ensuring a smooth transition for your business.
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/Digital_Marketing_and_SEO_Services.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Digital Marketing and SEO</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  We provide effective digital marketing and SEO strategies to
                  enhance your online presence, drive targeted traffic, and
                  maximize conversions for sustainable business growth
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div
                  className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img
                    src='/image/services-icon/migration_service.png'
                    alt=''
                    className='lazyload img-fluid'
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary'>Migration Service</h3>
                </h5>
                <div className='desc lh-30 fs-3 mb-2'>
                  Our Migration Service ensures smooth, secure, and efficient data or system transitions with minimal downtime—helping businesses modernize their infrastructure and optimize performance seamlessly.
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


        <OurPlatforms />
      </div>
    </>
  )
}
