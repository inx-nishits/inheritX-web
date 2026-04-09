'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import OurPlatforms from "../OurPlatforms";
import BottomCTA from "./BottomCTA";
import StickyLeadBar from "./StickyLeadBar";

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
      <StickyLeadBar techName="Experts" />
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
                <div className={`h-100 position-relative rounded-4 overflow-hidden ${!isMobile ? 'tf-animate-2' : ''}`} style={{ minHeight: '400px' }}>
                  <Image
                    src='/image/page-title/image-6.jpg'
                    alt='Dedicated Developers Team'
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
                        Since inception in 2011, InheritX Solutions has
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
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                  <div className='big-text'>Core <span className='text-stroke'>Advantages</span> of Our Hiring Model&nbsp;</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <h3 className='text-center p-2 mb-5'>
              Whether it is a DRE (Dedicated Resource Engagement), T&M (Time and
              Material), or a Fixed Price model, our flexible engagement models
              come with these key characteristics.
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
                    alt='Seamless Collaboration Icon'
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
                  <h3 className='title-service text-primary'>Collaboration</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  We utilize real-time collaboration frameworks and Agile methodologies to integrate seamlessly with your internal technical teams and domain requirements.
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
                    alt='App Maintenance Icon'
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
                  <h3 className='title-service text-primary'>App Maintenance</h3>
                </div>
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
                    alt='Platform Migration Icon'
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
                  <h3 className='title-service text-primary'>App Platform Migration Service
                  </h3>
                </div>
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
                    alt='Data-Driven Mobile App Marketing'
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
                  <h3 className='title-service text-primary'>Mobile App Marketing</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  Leverage our data-driven growth strategies, including ASO (App Store Optimization) and multi-channel analytics, to maximize your product’s reach and user retention.
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
                    alt='Zero-Trust Operational Transparency'
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
                  <h3 className='title-service text-primary'>Transparency</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  We prioritize IP integrity with strict NDAs and 'Zero-Trust' security protocols, providing total transparency through real-time reporting and audit trails.
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
                    alt='Synchronous Multi-Channel Communication'
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
                  <h3 className='title-service text-primary'>Communication</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  Our developers maintain a synchronous communication pulse via Slack, Teams, and Jira, ensuring zero alignment gaps between vision and implementation.
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
                    alt='Proven Technical Engineering Trust'
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
                  <h3 className='title-service text-primary'>Trust</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  Since 2011, we have built a reputation for high-performance engineering and technical reliability, earning the long-term trust of our global B2B clientele.
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
                    alt='Technical Assistance Icon'
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
                  <h3 className='title-service text-primary'>24/7 Technical Assistance</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  Our Site Reliability Engineers (SRE) provide proactive 24/7 monitoring and technical support to ensure zero downtime and peak infrastructure health.
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
                    alt='Proactive Software Modernization'
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
                  <h3 className='title-service text-primary'>Maintenance and Upgrade</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  We go beyond regular patches, providing proactive roadmap planning and library modernization to prevent technical debt and ensure long-term scalability.
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
                    alt='Zero-Loss Data Migration Services'
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
                  <h3 className='title-service text-primary'>Migration</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  Execute complex cloud and protocol migrations with zero data loss, ensuring your modernization journey is risk-free and performance-optimized.
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
                    alt='High-Conversion Technical SEO'
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
                  <h3 className='title-service text-primary'>Digital Marketing and SEO</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  Increase your market authority with advanced technical SEO and conversion rate optimization (CRO) designed to transform your website into a lead engine.
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
                    alt='Infrastructure Migration Icon'
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
                  <h3 className='title-service text-primary'>Migration Service</h3>
                </div>
                <div className='desc lh-30 fs-3 mb-2'>
                  Our infrastructure experts ensure your transition to AWS, Azure, or GCP is architected for maximum cost-efficiency and enterprise-grade scalability.
                </div>
              </div>
            </div>
          </div>
        </section>

        <BottomCTA 
          techName="Expert"
          title="Ready to take your project to the next level?"
          subtitle="Let’s discuss your app idea and implement an innovative solution for your business needs with our expert developers."
          buttonText="INQUIRE NOW"
        />


        <OurPlatforms />
      </div>
    </>
  )
}
