'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AboutContent () {
  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>About Us</h1>
            <div className='breadkcum mb-5'>
              <a
                href='index.html'
                className='link-breadkcum body-2 fw-7 split-text effect-right'
              >
                Home
              </a>
              <span className='dot'></span>
              <span className='page-breadkcum body-2 fw-7 split-text effect-right'>
                About Us
              </span>
            </div>

            <p className='pt-4'>Our Only Aim - Make Clients Happy!</p>
          </div>
        </div>
      </div>

      {/* <!-- /.page-title --> */}

      {/* <!-- Main-content --> */}

      <div className='main-content'>
        <section className='section-counting tf-spacing-5'>
          <div className='tf-container w-1810'>
            <div className='section-counting-inner flex'>
              <div className='left rounded-3 overflow-hidden'>
                <div className='position-relative image tf-animate-1'>
                  <Image
                    src='/image/home/img-section-counting-1.png'
                    alt='Counting section'
                    fill
                  />
                </div>
                <div className='box-logo tf-animate-2'>
                  <img src='/image/logo/logo-icon.svg' alt='' />
                  <h4 className='title'>InheritX</h4>
                </div>
                <div className='box-avatar tf-animate-3'>
                  <div className='text'>
                    <p className='fs-20 fw-6'>
                      850+ Trusted
                      <br />
                      Global Clients
                    </p>
                    <img
                      src='image/icon/icon-box-avatar.png'
                      data-src='image/icon/icon-box-avatar.png'
                      className='lazyload'
                      alt=''
                    />
                  </div>
                  <div className='list-agent'>
                    <div className='agent agent-1'>
                      <img
                        src='image/avatar/agent-1.jpg'
                        data-src='image/avatar/agent-1.jpg'
                        alt=''
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-2'>
                      <img
                        src='image/avatar/agent-2.jpg'
                        data-src='image/avatar/agent-2.jpg'
                        alt=''
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-3'>
                      <img
                        src='image/avatar/agent-3.jpg'
                        data-src='image/avatar/agent-3.jpg'
                        alt=''
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-plus'>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='heading-section mb-60'>
                  <div className='fs-1 fw-7 mb-5 title-animation'>
                    Who We Are
                  </div>
                  <p className='lh-30 fs-2 title-animation mb-5'>
                    Since 2011, excellent customer service is not just a phrase,
                    but a core value of InheritX Solutions. Developing
                    high-quality solutions in web and mobile app domains has
                    been a way of life at InheritX for over eight years. Our
                    client-centric approach and no compromise on performance
                    have made us an undisputed leader in mobile app, web, game,
                    and digital marketing.
                  </p>

                  <p className='lh-30 fs-2 title-animation mb-5'>
                    At InheritX, our aim has remained the same since inception –
                    to make and keep our clients happy. This is the reason why
                    we have a large clientele across different industry sectors
                    worldwide. Our happy clients include startups, SMEs, and
                    even a few Fortune 500 companies. Our in-house team of
                    experienced developers makes it possible to transform your
                    creative concepts into innovative IT solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-about tf-spacing-6'>
          <div className='about-top'>
            <div className='tf-marquee'>
              <div className='marquee-wrapper'>
                <div className='initial-child-container'>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                  <div className='big-text'>Software Development</div>
                </div>
              </div>
            </div>
          </div>
          <div className='tf-container pb-5 mb-5'>
            <div className='about-inner flex g-30'>
              <div className='left'>
                <div className='wg-curve-text'>
                  <div className='icon'>
                    <i className='icon-arrow-up'></i>
                  </div>
                  <div className='text-rotate'>
                    <svg
                      width='250'
                      height='250'
                      viewBox='0 0 250 250'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <path
                          id='textPathCircle'
                          d='M 125,125 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0'
                          fill='none'
                        />
                      </defs>
                      <text>
                        <textPath
                          href='#textPathCircle'
                          startOffset='0'
                          textLength='691'
                          lengthAdjust='spacing'
                        >
                          - Digital - Software - Solutions - Agency&nbsp;
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='heading-section mb-30'>
                  <div className='sub-title fs-1 fw-7 mb-17 title-animation'>
                    Our Exciting Journey So Far
                  </div>
                </div>
                <div className='section-content'>
                  <div className='desc mb-40 text-animation'>
                    <p className='lh-30'>
                      A small team of experienced and dedicated IT professionals
                      founded InheritX Solutions back in 2011. Since then, we
                      have never looked back in providing high-quality,
                      result-driven, advanced technology solutions to our
                      esteemed clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='row'>
              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2011
                    </span>
                    Birth of InheritX
                  </h3>
                  <p className='lh-30'>
                    Started with a small team of passionate IT professionals,
                    aiming to deliver quality technology solutions.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2012
                    </span>
                    Steady Growth
                  </h3>
                  <p className='lh-30'>
                    Our small setup evolved rapidly, and InheritX Solutions
                    became a member of NASSCOM, IGDA, and other reputed industry
                    organizations.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2013
                    </span>
                    Expansion Phase
                  </h3>
                  <p className='lh-30'>
                    Moved to a larger office with employee strength reaching 50,
                    setting the stage for more ambitious projects.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2014
                    </span>
                    International Presence
                  </h3>
                  <p className='lh-30'>
                    Established offices in the USA, Canada, and Australia,
                    extending our services to global clients.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2015
                    </span>
                    Gaining Recognition
                  </h3>
                  <p className='lh-30'>
                    Enhanced business policies, launched digital marketing
                    services, and recognized as a top mobile app development
                    company by GESIA.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2016
                    </span>
                    Milestone Achieved
                  </h3>
                  <p className='lh-30'>
                    Reached 100+ employees and crossed $1 million in revenue on
                    Upwork, solidifying our industry reputation.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2017
                    </span>
                    Diversifying Expertise
                  </h3>
                  <p className='lh-30'>
                    Started assisting startups as development partners and
                    ventured into IoT, BLE, and AR/VR solutions.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2018
                    </span>
                    Global Recognition
                  </h3>
                  <p className='lh-30'>
                    Represented InheritX Solutions at MWCA LA, gaining
                    recognition as a leading global IT outsourcing agency.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2019
                    </span>
                    Expanding Horizons
                  </h3>
                  <p className='lh-30'>
                    Celebrated 8 years of success, expanded into AI, blockchain,
                    indoor navigation, and sports data analytics solutions.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2020
                    </span>
                    Resilience and Innovation
                  </h3>
                  <p className='lh-30'>
                    Adapted to global challenges with remote-first operations
                    and accelerated adoption of cloud-based solutions for
                    clients worldwide.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2021
                    </span>
                    Technological Leadership
                  </h3>
                  <p className='lh-30'>
                    Launched advanced AI and machine learning solutions, helping
                    clients transform businesses digitally and gain a
                    competitive edge.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2022
                    </span>
                    Expanding Clientele
                  </h3>
                  <p className='lh-30'>
                    Partnered with leading enterprises globally, delivering
                    scalable software, mobile, and AI solutions across multiple
                    sectors.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2023
                    </span>
                    Strengthening Ecosystem
                  </h3>
                  <p className='lh-30'>
                    Focused on innovation, sustainability, and nurturing tech
                    talent, positioning InheritX as a trusted partner for
                    end-to-end digital transformation.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2024
                    </span>
                    Future-Ready
                  </h3>
                  <p className='lh-30'>
                    Continuing our journey of excellence, delivering futuristic
                    solutions in AI, blockchain, and cloud, empowering
                    businesses to thrive in a digital-first world.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 mb-5'>
                <div className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100'>
                  <h3 className='title-animation'>
                    <span className='text-primary d-block year-animate mb-2'>
                      2025
                    </span>
                    Expanding Horizons
                  </h3>
                  <p className='lh-30'>
                    Continuing our growth trajectory, InheritX Solutions
                    strengthens global partnerships, innovates with cutting-edge
                    technologies, and empowers businesses with AI-driven,
                    blockchain, and cloud solutions for a smarter future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-company tf-spacing-3'>
          <div className='tf-container w-1810'>
            <div className='section-company-inner'>
              <div className='left-section'>
                <div className='heading-section mb-53'>
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    <span className='text-primary'>About</span> InheritX
                    Solutions
                  </div>
                  <h2 className='title fw-6 title-animation'>
                    Leaders in providing Mobile, Web, Game and Internet
                    Marketing solutions.
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
                        Learn Our Company Mission<span></span>
                      </a>
                    </h5>
                    <div
                      id='according1'
                      className='collapse show'
                      data-bs-parent='#According1'
                    >
                      <div className='according-content'>
                        <div className='image left'>
                          <img
                            src='image/home/img-according-1.jpg'
                            data-src='image/home/img-according-1.jpg'
                            alt=''
                            className='lazyload'
                          />
                        </div>
                        <div className='right'>
                          <div className='desc lh-30'>
                            Since inception, InheritX Solutions has set many
                            milestones by offering quality IT solutions and
                            services that are capable of bringing disruptive
                            changes in the corporate world.
                          </div>
                          <div className='desc lh-30 mb-0'>
                            We are striving for offering superior quality
                            solutions that CLIENTS prefer for their customers,
                            EMPLOYEES feel pride of, CUSTOMERS appreciate, and
                            INVESTORS choose to get long-term returns.
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
                        Our Company Vision<span></span>
                      </a>
                    </h5>
                    <div
                      id='according2'
                      className='collapse'
                      data-bs-parent='#According1'
                    >
                      <div className='according-content'>
                        <div className='image left'>
                          <img
                            src='image/home/img-according-1.jpg'
                            data-src='image/home/img-according-1.jpg'
                            alt=''
                            className='lazyload'
                          />
                        </div>
                        <div className='right'>
                          <div className='desc lh-30'>
                            To be recognized as leaders in quality services and
                            developing relationships that make a positive
                            difference in our customer’s lives.
                          </div>

                          <div className='desc lh-30 mb-0'>
                            We provide enterprise-grade design and development
                            services to our clients to boost the productivity of
                            their business across the world with a vision to
                            become the most reliable offshore partner.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right-section'>
                <div className='image image-section tf-animate-1 rounded-3 overflow-hidden'>
                  <img
                    src='image/home/img-section-company.png'
                    data-src='image/home/img-section-company.png'
                    alt=''
                    className='lazyload'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='section-services p-services tf-spacing-2'>
          <div class='top-section'>
            <div class='tf-marquee'>
              <div class='marquee-wrapper'>
                <div class='initial-child-container'>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                  <div class='big-text'>
                    Explore <span class='text-stroke'>Popular</span> Services
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-60 text-center'>
                  <h2 className='title fw-6 title-animation mb-5'>
                    What We <span className='text-primary'>Offer?</span>
                  </h2>
                  <p className='title-animation'>
                    InheritX Solutions has an in-house team of experienced
                    developers who can handle projects of any size in the
                    domains of web, mobile apps, and IoT.
                  </p>
                </div>
              </div>
            </div>

            <div class='list-services flex flex-wrap'>
              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/certificate.svg'
                    data-src='image/about/certificate.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>

                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    Certified Developers
                  </a>
                </h5>

                <div class='desc lh-30'>
                  Our skilled developers have a knack for developing futuristic
                  solutions in web and mobile app development.
                </div>
              </div>

              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/email.svg'
                    data-src='image/about/email.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    Quick Delivery
                  </a>
                </h5>

                <div class='desc lh-30'>
                  At InheritX, we ensure timely project completion through our
                  structured work approach. We also provide regular updates on
                  the progress of your project.
                </div>
              </div>

              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/office.svg'
                    data-src='image/about/office.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    State-of-the-art Infrastructure
                  </a>
                </h5>

                <div class='desc lh-30'>
                  Excellent digital infrastructure can be the key to success for
                  an IT company. At InheritX, we have advanced infrastructure
                  equipped with servers, cutting-edge tools, and the latest
                  gadgets.
                </div>
              </div>

              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/receipt.svg'
                    data-src='image/about/receipt.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    Competitive Pricing
                  </a>
                </h5>

                <div class='desc lh-30'>
                  Our flexible pricing models can easily adapt to your
                  ever-changing business needs. We offer transparent pricing
                  with no hidden charges.
                </div>
              </div>

              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/innovation.svg'
                    data-src='image/about/innovation.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    Domain Expertise
                  </a>
                </h5>

                <div class='desc lh-30'>
                  When it comes to domain insight and hands-on experience with
                  the latest tools, our developers always stay updated with
                  modern trends and advancements.
                </div>
              </div>

              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/customer-service.svg'
                    data-src='image/about/customer-service.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    IT Consultancy
                  </a>
                </h5>

                <div class='desc lh-30'>
                  We provide top-notch IT consulting services along with
                  end-to-end IT solutions. From design to deployment, and
                  maintenance to marketing, we take care of every aspect of your
                  project.
                </div>
              </div>

              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/responsive.svg'
                    data-src='image/about/responsive.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    Flexible Development Process
                  </a>
                </h5>

                <div class='desc lh-30'>
                  By implementing the agile methodology, we ensure that our
                  development process remains client-centric and flexible to
                  meet changing business needs.
                </div>
              </div>

              <div class='services-item px-lg-15 no-img'>
                <div
                  class='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px' }}
                >
                  <img
                    src='image/about/encrypted.svg'
                    data-src='image/about/encrypted.svg'
                    alt=''
                    class='lazyload img-fluid'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 class='lh-30 fw-6'>
                  <a
                    href='services-details.html'
                    class='title-service text-primary'
                  >
                    Higher Security
                  </a>
                </h5>

                <div class='desc lh-30'>
                  Our employees and stakeholders are committed to preventing
                  your confidential company and project data from falling into
                  the wrong hands. We give the utmost importance to the safety
                  of your data.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-testimonial tf-spacing-2'>
          <div className='mask mask-1'>
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
                stroke='url(#a4)'
                stroke-width='150'
              />
              <defs>
                <linearGradient id='a4' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stop-color='#fff' stop-opacity='0.05' />
                  <stop offset='1' stop-color='#fff' stop-opacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container'>
            <div className='row justify-content-between rg-50'>
              <div className='col-lg-7'>
                <div className='heading-section mb-60'>
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    Clients Feedback
                  </div>
                  <h2 className='title fw-6 title-animation'>
                    1250+ People Say&nbsp;
                    <span className='fw-3'>About Us</span>
                  </h2>
                </div>
                <div
                  className='swiper tf-swiper sw-testimonial'
                  data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 30,
                                "speed": 1000,
                                "pagination": { "el": ".sw-pagination-testimonial", "clickable": true }
                                }'
                >
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          Overall, I was very satisfied with Inheritx. They are
                          hard workers, very reliable, and very flexible.
                          Overall, I would recommend INX team for any
                          development work.
                        </div>
                        <div className='user-testimonial'>
                          <a href='#' className='name-user body-2 '>
                            Edward
                          </a>
                          <a href='#' className='position text-medium'>
                            CEO
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          InheritX is very professional and articulate in their
                          approach to this project. The most impressive thing is
                          the input and intelligent contributions they have made
                          in the design of the app.
                        </div>
                        <div className='user-testimonial'>
                          <a href='#' className='name-user body-2 '>
                            Badri
                          </a>
                          <a href='#' className='position text-medium'>
                            Manager
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          Inheritx have proven themselves to be dependable with
                          solid problem solving and technical skills. They are
                          persistent, reliable, flexible and responsive.
                        </div>
                        <div className='user-testimonial'>
                          <a href='#' className='name-user body-2 '>
                            Saady
                          </a>
                          <a href='#' className='position text-medium'>
                            Developer
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          Inheritx has done a fabulous job. We want to continue
                          using them in the future and recommend them to all
                          developers looking for professional, high quality
                          work.
                        </div>
                        <div className='user-testimonial'>
                          <a href='#' className='name-user body-2 '>
                            Simon
                          </a>
                          <a href='#' className='position text-medium'>
                            Developer
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          The team has been fantastic, I have been working with
                          them for nearly 2 years now and have not been able to
                          find a fault in their performance or attitude. They
                          are extremely professional and polite w...
                        </div>
                        <div className='user-testimonial'>
                          <a href='#' className='name-user body-2 '>
                            Dorain
                          </a>
                          <a href='#' className='position text-medium'>
                            Developer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-testimonial sw-pagination mt-50'></div>
              </div>
              <div className='col-lg-4'>
                <div className='list-image'>
                  <div className='img-section img-1 img-elip tf-animate-1'>
                    <img
                      src='image/home/section-testimonial-1.png'
                      data-src='image/home/section-testimonial-1.png'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-2 tf-animate-2'>
                    <img
                      src='image/home/section-testimonial-2.png'
                      data-src='image/home/section-testimonial-2.png'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-3 tf-animate-3'>
                    <img
                      src='image/home/section-testimonial-3.png'
                      data-src='image/home/section-testimonial-3.png'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-4 img-elip tf-animate-4'>
                    <img
                      src='image/home/section-testimonial-4.jpg'
                      data-src='image/home/section-testimonial-4.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
