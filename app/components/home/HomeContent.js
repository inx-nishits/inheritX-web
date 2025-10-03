export default function HomeContent () {
  return (
    <>
      <div className='page-title-home'>
        <div className='mask mask-home-1'>
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
              stroke='url(#a)'
              stroke-width='150'
            />
            <defs>
              <linearGradient id='a' x1='176' x2='569' y1='70.5' y2='674'>
                <stop offset='0' stop-color='#fff' stop-opacity='0.05' />
                <stop offset='1' stop-color='#fff' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='mask mask-home-2'>
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
              stroke='url(#a1)'
              stroke-width='150'
            />
            <defs>
              <linearGradient id='a1' x1='176' x2='569' y1='70.5' y2='674'>
                <stop offset='0' stop-color='#fff' stop-opacity='0.05' />
                <stop offset='1' stop-color='#fff' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='tf-container'>
          <div className='row'>
            <div className='col-12'>
              <div className='top-page-title'>
                <div className='sub-title body-2 fw-5 split-text effect-right'>
                  Welcome to InheritX Solutions
                </div>

                <div className='sub-title body-2 fw-7 split-text effect-right text-primary'>
                  GO MOBILE, GO CLOUD, GO DIGITAL, GO SMART
                </div>
                <h1 className='title fw-6 lh-85 split-text effect-right'>
                  Innovating the Future
                  <br />
                  <span className='fw-3'>
                    of{' '}
                    <span className='highlight text-uppercase'>
                      Mobility with AI
                    </span>{' '}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className='row justify-content-between rg-70'>
            <div className='col-lg-5'>
              <div className='content-left'>
                <div className='desc text-animation'>
                  <p className='fs-20 lh-30'>
                    From building 500+ cutting-edge mobile & web application for
                    startups, SMEs, and enterprises worldwide to delivering
                    AI-powered solutions with Python, we help businesses
                    transform, scale, and innovate. Our in-house experts craft
                    next-gen mobility and AI solutions — tailored to your
                    vision, optimized for performance, and built to lead in the
                    digital era.
                  </p>
                </div>

                <div className='wg-counter flex gap-0 row'>
                  <div className='counter-item col-12 col-lg-6'>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-6'>
                        <span
                          className='number odometer color-primary'
                          data-to='400'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        <span className='color-primary'>+</span>
                      </div>
                      <p className='title-counter body-2 lh-30'>
                        Verified 5* Client Reviews
                      </p>
                    </div>
                  </div>

                  <div className='counter-item col-12 col-lg-6'>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-6'>
                        <span
                          className='number odometer color-primary'
                          data-to='850'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        <span className='color-primary'>+</span>
                      </div>
                      <p className='title-counter body-2 lh-30'>
                        Projects Delivered Successfully
                      </p>
                    </div>
                  </div>
                </div>

                <div className='wg-counter flex gap-0 row'>
                  <div className='counter-item col-12 col-lg-6'>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-6'>
                        <span
                          className='number odometer color-primary'
                          data-to='97'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        <span className='color-primary'>%</span>
                      </div>
                      <p className='title-counter body-2 lh-30'>
                        Client Retention Ratio
                      </p>
                    </div>
                  </div>

                  <div className='counter-item col-12 col-lg-6'>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-6'>
                        <span
                          className='number odometer color-primary'
                          data-to='40'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        <span className='color-primary'>+</span>
                      </div>
                      <p className='title-counter body-2 lh-30'>
                        Industries Served
                      </p>
                    </div>
                  </div>
                </div>

                <div className='wg-counter flex gap-0 row'>
                  <div className='counter-item col-12 col-lg-6'>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-6'>
                        <span
                          className='number odometer color-primary'
                          data-to='120'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        <span className='color-primary'>+</span>
                      </div>
                      <p className='title-counter body-2 lh-30'>
                        Development Staff
                      </p>
                    </div>
                  </div>

                  <div className='counter-item col-12 col-lg-6'>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-6'>
                        <span
                          className='number odometer color-primary'
                          data-to='24/7'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        {/* <span className='color-primary'>+</span> */}
                      </div>
                      <p className='title-counter body-2 lh-30'>Support</p>
                    </div>
                  </div>
                </div>

                <a href='services.html' className='tf-btn'>
                  <span> Click for Free Consultancy </span>
                  <i className='icon-arrow-right'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='image tf-animate-1 rounded-3 overflow-hidden'>
                <img
                  src='image/page-title/img-page-title.jpg'
                  data-src='image/page-title/img-page-title.jpg'
                  alt=''
                  className='lazyload'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- /.page-title --> */}

      {/* <!-- Main-content --> */}

      <div className='main-content'>
        <section className='section-about tf-spacing-2'>
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
          <div className='tf-container'>
            <div className='about-inner flex g-30'>
              <div className='left'>
                <div className='wg-curve-text'>
                  <div className='icon'>
                    <i className='icon-arrow-up'></i>
                  </div>
                  <div className='text-rotate'>
                    <svg
                      width='270 '
                      height='270 '
                      viewBox='0 0 270  270 '
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <path
                          id='textPathCircle'
                          d='M 135,135 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0'
                          fill='none'
                        />
                      </defs>
                      <text>
                        <textPath
                          href='#textPathCircle'
                          startOffset='0'
                          textLength='690'
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
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    <span className='text-primary'>Inheritx</span> Solutions
                  </div>
                  <h2 className='title fw-6 title-animation'>
                    Because We Deliver
                    <span className='fw-3'>
                      {' '}
                      The&nbsp;Best Solutions to Stay Ahead
                    </span>
                  </h2>
                </div>
                <div className='section-content'>
                  <div className='desc mb-40 text-animation'>
                    <p className='lh-30'>
                      At InheritX, customer service is more than just a promise
                      — it’s our core value. Since our inception in 2011, we
                      have consistently made quality a habit, delivering
                      best-in-class web, mobile, and AI-powered solutions to our
                      global clientele. Our strong team of experienced
                      professionals can handle projects of any size or scale,
                      offering innovative IT and AI-driven solutions within
                      committed timelines. We thrive on helping businesses grow
                      by providing futuristic, feature-rich, and intelligent
                      solutions in web development, mobile app development, and
                      AI integration.
                    </p>
                  </div>
                  <div className='title-animation'>
                    <a
                      href='about-us.html'
                      className='tf-btn no-bg text-underline'
                    >
                      <span>Learn More Us</span>
                      <i className='icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-counting tf-spacing-2'>
          <div className='mask mask-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='700'
              height='700'
              fill='none'
            >
              <circle
                cx='350'
                cy='350'
                r='285'
                stroke='url(#a2)'
                stroke-width='130'
              />
              <defs>
                <linearGradient
                  id='a2'
                  x1='154'
                  x2='497.875'
                  y1='61.688'
                  y2='589.75'
                >
                  <stop offset='0' stop-color='#fff' stop-opacity='0.05' />
                  <stop offset='1' stop-color='#fff' stop-opacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container w-1810'>
            <div className='section-counting-inner flex'>
              <div className='left rounded-3 overflow-hidden'>
                <div className='image tf-animate-1'>
                  <img
                    src='image/home/img-section-counting-1.jpg'
                    data-src='image/home/img-section-counting-1.jpg'
                    alt=''
                    className='lazyload'
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
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    Explore Our{' '}
                    <span className='text-primary'>Achievement</span>
                  </div>
                  <h2 className='title fw-6 title-animation'>
                    Premier Tech Innovations
                    <span className='fw-3'>InheritX Software Agency</span>
                  </h2>
                </div>
                <div className='wg-counter flex g-30'>
                  <div className='counter-item style-2 style-bg-primary px-md-15 rounded-3 overflow-hidden'>
                    <div className='icon'>
                      <i className='icon-check'></i>
                    </div>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-7'>
                        <span
                          className='number odometer'
                          data-to='850'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        <span className='title-counter'>+</span>
                      </div>
                      <h6 className='title-counter lh-30 fw-5'>
                        Trusted Global Clients
                      </h6>
                    </div>
                  </div>

                  <div className='counter-item style-2 style-bg-surface px-md-15 rounded-3 overflow-hidden'>
                    <div className='icon'>
                      <i className='icon-check'></i>
                    </div>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-7'>
                        <span
                          className='number odometer'
                          data-to='850'
                          data-inviewport='yes'
                        >
                          {' '}
                          0{' '}
                        </span>
                        <span className='title-counter'>+</span>
                      </div>
                      <h6 className='title-counter lh-30 fw-5'>
                        Best Project Complete
                      </h6>
                    </div>
                  </div>
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
                    <span className="text-primary">Grow</span> & Development
                  </div>
                  <h2 className='title fw-6 title-animation'>
                    Modern Technology and
                    <span className='fw-3'>Advancement Incentives</span>
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
                  <div className='according-item'>
                    <h5 className='fw-5'>
                      <a
                        href='#according3'
                        data-bs-toggle='collapse'
                        className='title-according collapsed'
                      >
                        Why Choose Inheritx?<span></span>
                      </a>
                    </h5>
                    <div
                      id='according3'
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
                            InheritX Solutions is a leading tablet app
                            development company in India and the USA,
                            specializing in iPad and Android tablet apps. We
                            deliver customized, cost-effective solutions that
                            enhance business value, boost ROI, and meet complex
                            requirements. With on-time delivery and excellent
                            performance, our expert iPad developers build
                            scalable apps across diverse industries.
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
                            InheritX Solutions has an in-house team of
                            experienced developers who can handle any size
                            project in the domains of web, mobile app, and IoT.
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
                    src='image/home/img-section-company.jpg'
                    data-src='image/home/img-section-company.jpg'
                    alt=''
                    className='lazyload'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-services tf-spacing-2'>
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
                stroke='url(#a3)'
                stroke-width='150'
              />
              <defs>
                <linearGradient id='a3' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stop-color='#fff' stop-opacity='0.05' />
                  <stop offset='1' stop-color='#fff' stop-opacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='section-top'>
            <div className='tf-marquee'>
              <div className='marquee-wrapper'>
                <div className='initial-child-container'>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                  <div className='big-text'>
                    Explore <span className='text-stroke'>Popular</span>{' '}
                    Services
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-60 text-center'>
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    Our <span className='text-primary'>Popular</span> Services
                  </div>
                  <h2 className='title fw-6 title-animation mb-5'>
                    We Run All kinds Of IT Services
                    <br />
                    <span className='fw-3'>that vow Your Success</span>
                  </h2>
                  <p className='title-animation'>
                    We offer end-to-end services in the IT domain, from mobile
                    and web development to AI-driven business solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div
                  className='swiper tf-swiper sw-services sw-border'
                  data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 0,
                                "speed": 800,
                                "pagination": { "el": ".sw-pagination-services", "clickable": true },
                                "breakpoints": {
                                    "550": { "slidesPerView": 2, "slidesPerGroup": 1},
                                    "1200": { "slidesPerView": 3, "slidesPerGroup": 1}
                                    }
                                }'
                >
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon'>
                          <i className='icon-custom-software'></i>
                        </div>
                        <h6 className='lh-30 fw-6'>
                          <a
                            href='services-details.html'
                            className='title-service'
                          >
                            {' '}
                            Web Development
                          </a>
                        </h6>
                        <div className='desc lh-30'>
                          Robust, reliable, and responsive corporate websites
                        </div>
                        <a href='services-details.html' className='image rounded-3 overflow-hidden'>
                          <img
                            src='image/home/services-1.jpg'
                            data-src='image/home/services-1.jpg'
                            alt=''
                            className='lazyload'
                          />
                        </a>
                        <div className='bottom-item'>
                          <a
                            href='services-details.html'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon'>
                          <i className='icon-outsourcing'></i>
                        </div>
                        <h6 className='lh-30 fw-6'>
                          <a
                            href='services-details.html'
                            className='title-service'
                          >
                            Artificial Intelligence
                          </a>
                        </h6>
                        <div className='desc lh-30'>
                          Predictive analytics, chatbots, computer vision, and
                          custom LLM integrations.
                        </div>
                        <a href='services-details.html' className='image rounded-3 overflow-hidden'>
                          <img
                            src='image/home/services-2.jpg'
                            data-src='image/home/services-2.jpg'
                            alt=''
                            className='lazyload'
                          />
                        </a>
                        <div className='bottom-item'>
                          <a
                            href='services-details.html'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon'>
                          <i className='icon-software-product'></i>
                        </div>
                        <h6 className='lh-30 fw-6'>
                          <a
                            href='services-details.html'
                            className='title-service'
                          >
                            Mobile App Development
                          </a>
                        </h6>
                        <div className='desc lh-30'>
                          Feature-rich apps with a seamless performance
                        </div>
                        <a href='services-details.html' className='image rounded-3 overflow-hidden'>
                          <img
                            src='image/home/services-3.jpg'
                            data-src='image/home/services-3.jpg'
                            alt=''
                            className='lazyload'
                          />
                        </a>
                        <div className='bottom-item'>
                          <a
                            href='services-details.html'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon'>
                          <i className='icon-software-product'></i>
                        </div>
                        <h6 className='lh-30 fw-6'>
                          <a
                            href='services-details.html'
                            className='title-service'
                          >
                            DevOps
                          </a>
                        </h6>
                        <div className='desc lh-30'>
                          Customized solutions by integrating technological
                          advancements
                        </div>
                        <a href='services-details.html' className='image rounded-3 overflow-hidden'>
                          <img
                            src='image/home/services-3.jpg'
                            data-src='image/home/services-3.jpg'
                            alt=''
                            className='lazyload'
                          />
                        </a>
                        <div className='bottom-item'>
                          <a
                            href='services-details.html'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon'>
                          <i className='icon-software-product'></i>
                        </div>
                        <h6 className='lh-30 fw-6'>
                          <a
                            href='services-details.html'
                            className='title-service'
                          >
                            Cloud Computing
                          </a>
                        </h6>
                        <div className='desc lh-30'>
                          Secure and Scalable Cloud-based Apps for Business
                        </div>
                        <a href='services-details.html' className='image rounded-3 overflow-hidden'>
                          <img
                            src='image/home/services-3.jpg'
                            data-src='image/home/services-3.jpg'
                            alt=''
                            className='lazyload'
                          />
                        </a>
                        <div className='bottom-item'>
                          <a
                            href='services-details.html'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-services sw-pagination d-xl-none mt-15 justify-content-center'></div>
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
                  Let’s discuss your app idea and implement the innovative
                  mobility solution for your business needs.
                </h5>
                <a
                  href='#'
                  className='tf-btn no-bg text-underline hover-color-main-dark'
                >
                  <span>Let’s Talk</span>
                  <i className='icon-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className='section-team tf-spacing-2'>
          <div className='mask mask-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='700'
              height='700'
              fill='none'
            >
              <circle
                cx='350'
                cy='350'
                r='285'
                stroke='url(#a8)'
                stroke-width='130'
              />
              <defs>
                <linearGradient
                  id='a8'
                  x1='154'
                  x2='497.875'
                  y1='61.688'
                  y2='589.75'
                >
                  <stop offset='0' stop-color='#fff' stop-opacity='0.05' />
                  <stop offset='1' stop-color='#fff' stop-opacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container'>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='heading-section'>
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    Our <span className="text-primary">Professionals</span>
                  </div>
                  <h2 className='title fw-6 mb-4 title-animation'>
                    Meet Our Experience
                    <span className='fw-3'>Members</span>
                  </h2>
                  <p className='lh-30 mb-5'>
                    People who guide us and lead InheritX Solutions toward
                    excellence with their unique vision
                  </p>
                  <div className='list-btn flex align-items-center g-15 d-none'>
                    <div className='scrolling-effect effectBottom'>
                      <a className='arrow-btn style-border arrow-prev team-prev'>
                        <i className='icon-arrow-left2'></i>
                      </a>
                    </div>
                    <div className='scrolling-effect effectBottom'>
                      <a className='arrow-btn style-border arrow-next team-next'>
                        <i className='icon-arrow-right2'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-9'>
                <div
                  className='swiper tf-swiper sw-team sw-border'
                  data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 30,
                                "speed": 800,
                                "pagination": { "el": ".sw-pagination-team", "clickable": true },
                                "navigation": {
                                    "clickable": true,
                                    "nextEl": ".team-next",
                                    "prevEl": ".team-prev"
                                },  
                                "breakpoints": {
                                    "450": { "slidesPerView": 2, "slidesPerGroup": 2},
                                    "1200": { "slidesPerView": 3, "slidesPerGroup": 1}
                                    }
                                }'
                >
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='team-item hover-image rounded-3 overflow-hidden'>
                        <div className='top-item'>
                          <a
                            href='team.html'
                            className='image  rounded-3 overflow-hidden'
                          >
                            <img
                              src='image/home/ceo-sandip-modi.png'
                              data-src='image/home/ceo-sandip-modi.png'
                              alt=''
                              className='lazyload rounded-3 overflow-hidden'
                            />
                          </a>
                        </div>
                        <div className='item-content'>
                          <h6 className='title'>
                            <a href='team.html'>Sandip Modi</a>
                          </h6>
                          <p className='sub-title'>CEO</p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='team-item hover-image rounded-3 overflow-hidden'>
                        <div className='top-item'>
                          <a
                            href='team.html'
                            className='image  rounded-3 overflow-hidden'
                          >
                            <img
                              src='image/home/aiyub_munshi_profile.jpg'
                              data-src='image/home/aiyub_munshi_profile.jpg'
                              alt=''
                              className='lazyload rounded-3 overflow-hidden'
                            />
                          </a>
                        </div>
                        <div className='item-content'>
                          <h6 className='title'>
                            <a href='team.html'>Aiyub Munshi</a>
                          </h6>
                          <p className='sub-title'>Project Manager</p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='team-item hover-image rounded-3 overflow-hidden'>
                        <div className='top-item'>
                          <a
                            href='team.html'
                            className='image  rounded-3 overflow-hidden'
                          >
                            <img
                              src='image/home/HrManager.jpg'
                              data-src='image/home/HrManager.jpg'
                              alt=''
                              className='lazyload rounded-3 overflow-hidden'
                            />
                          </a>
                        </div>
                        <div className='item-content'>
                          <h6 className='title'>
                            <a href='team.html'>Meera Tank</a>
                          </h6>
                          <p className='sub-title'>HR Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-team sw-pagination d-lg-none mt-15 justify-content-center'></div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-project tf-spacing-2 d-none'>
          <div className='tf-container'>
            <div className='heading-section mb-60 text-center'>
              <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                Our Case Studies
              </div>
              <h2 className='title fw-6 title-animation'>
                Explore Our
                <span className='fw-3'>Recent Case Studies</span>
              </h2>
            </div>
          </div>
          <div
            className='swiper tf-swiper sw-project '
            data-swiper='{
                    "slidesPerView": 1,
                    "spaceBetween": 30,
                    "speed": 800,
                    "pagination": { "el": ".sw-pagination-project", "clickable": true },
                    "navigation": {
                        "clickable": true,
                        "nextEl": ".team-project",
                        "prevEl": ".team-project"
                    },  
                    "breakpoints": {
                        "1200": { "slidesPerView": 1.4125, "slidesPerGroup": 1}
                        }
                    }'
          >
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='project-item hover-image'>
                  <div className='item-content px-sm-15'>
                    <div className='top-content'>
                      <div className='sub-title body-2 fw-7'>
                        Software Development
                      </div>
                      <h3 className='title-project'>
                        <a href='porfolio-details.html'>
                          Mobile Application Design
                        </a>
                      </h3>
                      <div className='desc lh-30'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque seeney laudantium
                        totam
                      </div>
                    </div>
                    <div className='bottom-content'>
                      <a
                        href='porfolio-details.html'
                        className='tf-btn-readmore'
                      >
                        <span className='plus'>+</span>
                        <span className='text'>Read More</span>
                      </a>
                    </div>
                  </div>
                  <a href='porfolio-details.html' className='image'>
                    <img
                      src='image/home/project-item-1.jpg'
                      data-src='image/home/project-item-1.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='project-item hover-image'>
                  <div className='item-content px-sm-15'>
                    <div className='top-content'>
                      <div className='sub-title body-2 fw-7'>
                        Software Development
                      </div>
                      <h3 className='title-project'>
                        <a href='porfolio-details.html'>UI/UX Design</a>
                      </h3>
                      <div className='desc lh-30'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque seeney laudantium
                        totam
                      </div>
                    </div>
                    <div className='bottom-content'>
                      <a
                        href='porfolio-details.html'
                        className='tf-btn-readmore'
                      >
                        <span className='plus'>+</span>
                        <span className='text'>Read More</span>
                      </a>
                    </div>
                  </div>
                  <a href='porfolio-details.html' className='image'>
                    <img
                      src='image/home/project-item-1.jpg'
                      data-src='image/home/project-item-1.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='project-item hover-image'>
                  <div className='item-content px-sm-15'>
                    <div className='top-content'>
                      <div className='sub-title body-2 fw-7'>
                        Software Development
                      </div>
                      <h3 className='title-project'>
                        <a href='porfolio-details.html'>
                          Mobile Application Design
                        </a>
                      </h3>
                      <div className='desc lh-30'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque seeney laudantium
                        totam
                      </div>
                    </div>
                    <div className='bottom-content'>
                      <a
                        href='porfolio-details.html'
                        className='tf-btn-readmore'
                      >
                        <span className='plus'>+</span>
                        <span className='text'>Read More</span>
                      </a>
                    </div>
                  </div>
                  <a href='porfolio-details.html' className='image'>
                    <img
                      src='image/home/project-item-1.jpg'
                      data-src='image/home/project-item-1.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='project-item hover-image'>
                  <div className='item-content px-sm-15'>
                    <div className='top-content'>
                      <div className='sub-title body-2 fw-7'>
                        Software Development
                      </div>
                      <h3 className='title-project'>
                        <a href='porfolio-details.html'>UI/UX Design</a>
                      </h3>
                      <div className='desc lh-30'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque seeney laudantium
                        totam
                      </div>
                    </div>
                    <div className='bottom-content'>
                      <a
                        href='porfolio-details.html'
                        className='tf-btn-readmore'
                      >
                        <span className='plus'>+</span>
                        <span className='text'>Read More</span>
                      </a>
                    </div>
                  </div>
                  <a href='porfolio-details.html' className='image'>
                    <img
                      src='image/home/project-item-1.jpg'
                      data-src='image/home/project-item-1.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='sw-pagination-project sw-pagination mt-70 justify-content-center'></div>
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
                      src='image/home/section-testimonial-1.jpg'
                      data-src='image/home/section-testimonial-1.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-2 tf-animate-2'>
                    <img
                      src='image/home/section-testimonial-2.jpg'
                      data-src='image/home/section-testimonial-2.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-3 tf-animate-3'>
                    <img
                      src='image/home/section-testimonial-3.jpg'
                      data-src='image/home/section-testimonial-3.jpg'
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

        <section className='section-form tf-spacing-4'>
          <div className='section-inner flex'>
            <div className='left rounded-3 overflow-hidden'>
              <div className='image tf-animate-1'>
                <img
                  src='image/home/img-section-form-1.jpg'
                  data-src='image/home/img-section-form-1.jpg'
                  alt=''
                  className='lazyload'
                />
              </div>
              <div className='section-content section-form-content tf-animate-2'>
                <div className='sub-title body-2 fw-7 mb-17'>Work Inquiry</div>
                <h2 className='title fw-6'>
                  Let’s Work For your Next Projects ?
                </h2>
                <a
                  href='contact.html'
                  className='tf-btn style-bg-white hover-bg-main-dark'
                >
                  <span>Contact Us</span>
                  <i className='icon-arrow-right'></i>
                </a>
              </div>
            </div>
            <div className='right'>
              <form
                id='contactform'
                className='form-contact-us px-md-15 rounded-3 overflow-hidden'
                method='post'
                action=''
              >
                <div className='heading-form text-center'>
                  <h3 className='title'>Need Help For Project!</h3>

                  <div className='desc lh-30'>
                    We are ready to help your next projects, let’s work together
                  </div>
                </div>

                <div className='cols mb-20 g-20'>
                  <fieldset className='item'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Name'
                      required
                    />
                    <i className='icon-user'></i>
                  </fieldset>

                  <fieldset className='item'>
                    <input
                      type='email'
                      name='mail'
                      id='mail'
                      placeholder='Email'
                      required
                    />
                    <i className='icon-email'></i>
                  </fieldset>
                </div>

                <div className='cols mb-20 g-20'>
                  <fieldset className='item'>
                    <input
                      type='text'
                      name='name'
                      id='country'
                      placeholder='Country'
                      required
                    />
                    <i className='icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <circle cx='12' cy='12' r='10' />
                        <line x1='2' y1='12' x2='22' y2='12' />
                        <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
                      </svg>
                    </i>
                  </fieldset>

                  <fieldset className='item'>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      placeholder='Phone'
                      required
                    />
                    <i className='icon-phone'></i>
                  </fieldset>
                </div>

                <div className='cols mb-20 g-20'>
                  <fieldset className='item'>
                    <input
                      type='text'
                      name='Project Type'
                      id='projectType'
                      placeholder='Project Type'
                      required
                    />
                  </fieldset>
                </div>

                <div className='cols mb-20 g-20'>
                  <div className='nice-select mb-0'>
                    <span className='current caption-1'>
                      Select Your Budget
                    </span>
                    <ul className='list'>
                      <li className='option option-all selected focus'>
                        Choose Budget
                      </li>
                      <li className='option'>Below $5000</li>
                      <li className='option'>$5000 - $25,000</li>
                      <li className='option'>Augmented Reality</li>
                    </ul>
                  </div>
                </div>

                <fieldset className='mb-20'>
                  <textarea
                    name='message'
                    id='message'
                    placeholder='Brief Your Details*'
                    required
                  />
                </fieldset>

                <button type='submit' className='tf-btn mx-auto'>
                  <span>Schedule a free Consultation</span>
                  <i className='icon-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className='section-blog tf-spacing-2'>
          <div className='mask mask-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='700'
              height='700'
              fill='none'
            >
              <circle
                cx='350'
                cy='350'
                r='285'
                stroke='url(#a5)'
                stroke-width='130'
              />
              <defs>
                <linearGradient
                  id='a5'
                  x1='154'
                  x2='497.875'
                  y1='61.688'
                  y2='589.75'
                >
                  <stop offset='0' stop-color='#fff' stop-opacity='0.05' />
                  <stop offset='1' stop-color='#fff' stop-opacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container'>
            <div className='heading-section mb-60 text-center'>
              <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                Latest News & Blog
              </div>
              <h2 className='title fw-6 title-animation'>
                Read Our Latest&nbsp;
                <span className='fw-3'>News & Blog</span>
              </h2>
            </div>
          </div>
          <div className='tf-container'>
            <div className='row rg-30'>
              <div className='col-lg-6'>
                <div className='tf-post-list style-2 hover-image h-100 overflow-hidden flex-column justify-content-start'>
                  <a
                    href='blog-details.html'
                    className='image  overflow-hidden'
                  >
                    <img
                      src='image/home/Flutter-App-Development.jpg'
                      data-src='image/home/Flutter-App-Development.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </a>
                  <div className='post-content'>
                    <div className='top-post'>
                      <div className='post-meta'>
                        <a href='blog-details.html' className='text-medium'>
                          Sandip Modi,
                          <br />
                          <span className='text-primary'>
                            in Flutter Application Development
                          </span>
                        </a>
                      </div>
                      <h5 className='title fw-5'>
                        <a href='blog-details.html'>
                          Top 15 Flutter Widgets Are Best To Use for App
                          Development
                        </a>
                      </h5>
                    </div>
                    <div className='bottom-post'>
                      <div className='desc lh-30'>
                        Google’s Flutter framework has many features that
                        facilitate developers to build robust and user-friendly
                        apps with a native-like experience.
                      </div>
                      <a
                        href='blog-details.html'
                        className='tf-btn-readmore style-open'
                      >
                        <span className='plus'>+</span>
                        <span className='text'>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='tf-post-list style-2 h-100 hover-image overflow-hidden flex-column'>
                  <a
                    href='blog-details.html'
                    className='image  overflow-hidden'
                  >
                    <img
                      src='image/home/app-development-services.jpg'
                      data-src='image/home/app-development-services.jpg'
                      alt=''
                      className='lazyload'
                    />
                  </a>
                  <div className='post-content'>
                    <div className='top-post'>
                      <div className='post-meta'>
                        <a href='blog-details.html' className='text-medium'>
                          Sandip Modi,
                          <br />
                          <span className='text-primary'>
                            in Flutter Application Development
                          </span>
                        </a>
                      </div>
                      <h5 className='title fw-5'>
                        <a href='blog-details.html'>
                          Why Modern Businesses Prefer Flutter Application
                          Development Services
                        </a>
                      </h5>
                    </div>
                    <div className='bottom-post'>
                      <div className='desc lh-30'>
                        Every visionary entrepreneur like you accepts the
                        importance of having a cross-platform business app.
                        However, as technology evolves rapidly, you may find it
                        difficult to choose the right development platform for
                        building such an app.
                      </div>
                      <a
                        href='blog-details.html'
                        className='tf-btn-readmore style-open'
                      >
                        <span className='plus'>+</span>
                        <span className='text'>Read More</span>
                      </a>
                    </div>
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
