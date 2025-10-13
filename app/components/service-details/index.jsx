"use client";
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { servicesData } from '../../components/services/servicesData';

export default function ServiceDetails({ params }) {
  const { category } = params || {};
  const service = servicesData[category];

  if (!service) {
    return (
      <div className="tf-container tf-spacing-8">
        <h2 className="title">Service not found</h2>
        <p className="lh-30">We couldn't find details for this service.</p>
        <Link href="/services" className="tf-btn">
          <span>Back to Services</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="page-title">
        <div className="tf-container">
          <div className="page-title-content text-center">
            <h1 className="title split-text effect-right">{service.heading}</h1>
            <Breadcrumbs />
          </div>
        </div>
      </div>

      <div className="main-content position-relative">
        <div className="mask mask-service-4 d-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none">
            <circle cx="400" cy="400" r="325" stroke="url(#b6)" strokeWidth="150"></circle>
            <defs>
              <linearGradient id="b6" x1="176" x2="569" y1="70.5" y2="674">
                <stop offset="0" stopColor="#fff" stopOpacity="0.05"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="tf-container tf-spacing-8">
          <div className="row">
            <div className="col-12">
              <div className="wg-details wg-service-details">
                <div className="details-content">
                  <div className="mb-5">
                    <h3 className="title mb-3">{service.content_heading} Development Services</h3>
                    <p className="fs-2">{service.heading_caption}</p>
                  </div>

                  {service.banner && (
                    <div className="image rounded-3 mb-5 overflow-hidden">
                      <img
                        src={service.banner}
                        alt={service.heading}
                        className="lazyload rounded-4"
                        style={{ width: 'auto', height: '450px', objectFit: 'cover' }}
                      />
                    </div>
                  )}

                  <div className="desc">
                    <h4 className="mb-4 text-primary">{service.content_caption}</h4>
                    {(service.content || []).map((para, idx) => (
                      <p key={idx} className="lh-30">{para}</p>
                    ))}
                  </div>
                </div>

                {Array.isArray(service.key_services) && service.key_services.length > 0 && (
                  <div className="details-content-2 key-services">
                    <div className="ks-header d-flex align-items-center justify-content-between">
                      <h4 className="title mb-0">Our Key Services Include:</h4>
                      <span className="ks-accent" aria-hidden="true"></span>
                    </div>
                    <div className="list-features key-services-grid" role="list" aria-label="Key services list">
                      {service.key_services.map((item, index) => (
                        <div
                          key={index}
                          className="features-item key-service-card d-flex align-items-start mb-0"
                          data-animation-delay={`${index * 0.06}s`}
                          role="listitem"
                        >
                          <div className="number-features fw-7 ks-badge" aria-hidden="true">{index + 1}</div>
                          <div className="item-content">
                            <span className="body-2 fw-7 mb-0 ks-text" title={item}>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* {Array.isArray(service.accordions) && service.accordions.length > 0 && (
                  <div className="details-content-2">
                    <h4 className="title">More About This Service</h4>
                    <div className="wg-according" id="According1">
                      {service.accordions.map((acc, index) => (
                        <div key={index} className="according-item">
                          <h5 className="fw-5">
                            <a
                              href={`#according${index}`}
                              data-bs-toggle="collapse"
                              className={`title-according ${index === 0 ? '' : 'collapsed'}`}
                            >
                              {acc.title}<span></span>
                            </a>
                          </h5>
                          <div
                            id={`according${index}`}
                            className={`collapse ${index === 0 ? 'show' : ''}`}
                            data-bs-parent="#According1"
                          >
                            <div className="according-content">
                              <div className="right">
                                <div className="desc lh-30">{acc.content}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
        {service.services && (
          <section className="section-services p-services tf-spacing-2">
            <div className="top-section">
              <div className="tf-marquee">
                <div className="marquee-wrapper">
                  <div className="initial-child-container">
                    {Array(12).fill().map((_, index) => (
                      <div key={index} className="big-text">
                        {service.services.title} <span className="text-stroke">Process</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="tf-container">
              <div className="row">
                {service.services.items.map((item, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-4 mb-5">
                    <div
                      className="d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100 tf-animation fade-up"
                      data-animation-delay={`${index * 0.2}s`}
                    >
                      <h4 className=" text-primary lh-40">
                        {/* <span className="text-primary d-block year-animate mb-2">
                          Step {index + 1}
                        </span> */}
                        {item.title}
                      </h4>
                      <p className="lh-30">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      
        <section className="section-services p-services tf-spacing-2">
          <div className="top-section">
            <div className="tf-marquee">
              <div className="marquee-wrapper">
                <div className="initial-child-container">
                  {Array(12).fill().map((_, index) => (
                    <div key={index} className="big-text">
                      Value <span className="text-stroke">Added</span> Services
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>

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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Collaboration</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
                  We tend to collaborate with various teams of the client’s
                  company to come up with the most suitable solution in the web
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>App Maintenance</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>App Platform Migration Service
                  </h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Mobile App Marketing</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Transparency</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
                  By implementing the best method for ensuring the safety of the
                  client’s data and signing NDA, we provide the highest level of
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Communication</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Trust</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
                  Since inception, we have never compromised on the quality and
                  performance of our solutions to gain trust of our global
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>24/7 Technical Assistance</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Maintenance and Upgrade</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Migration</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Digital Marketing and SEO</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
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
                <div className='lh-30 fw-6 mt-3'>
                  <h3 className='title-service text-primary mb-4'>Migration Service</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-1'>
                  Our Migration Service ensures smooth, secure, and efficient data or system transitions with minimal downtime—helping businesses modernize infrastructure and optimize performance seamlessly.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wg-cta tf-spacing-2 alert alert-dismissible fade show" role="alert">
          <div className="tf-container">
            <div className="cta-inner flex align-items-center justify-content-center">
              <div className="left flex align-items-center">
                <div className="icon">
                  <i className="icon-chat-2"></i>
                </div>
                <h5 className="fw-4 title">How about connecting with our experts to resolve your queries or doubts?</h5>
                <Link href="/contact" className="tf-btn no-bg text-underline hover-color-main-dark">
                  <span>Let’s Talk</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {Array.isArray(service.faqs) && service.faqs.length > 0 && (
          <div className="tf-container tf-spacing-8">
            <div className="details-content-2 mb-0">
              <h4 className="title mb-4">Frequently Asked Questions</h4>
              <div className="wg-according" id="FaqAccording">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="according-item style-2 px-sm-15">
                    <a
                      href={`#faq${index}`}
                      data-bs-toggle="collapse"
                      className={`title-according ${index === 0 ? '' : 'collapsed'} body-2 fw-5`}
                    >
                      {faq.q}<i className="icon-arrow-right"></i>
                    </a>
                    <div
                      id={`faq${index}`}
                      className={`collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#FaqAccording"
                    >
                      <div className="according-content">
                        <p className="lh-30">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((category) => ({ category }));
}

export const dynamic = 'force-static';
