import PageTitle from '../components/PageTitle'
import Link from 'next/link'
import dynamicImport from 'next/dynamic'

const ContactForm = dynamicImport(() => import('../components/ContactForm'), { ssr: false })

export const dynamic = 'force-static'

export default function Page () {
  return (
    <>
      {/* <!-- Page-title --> */}

      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Contact Us</h1>
            <div className='breadkcum'>
              <Link
                href='/'
                className='link-breadkcum body-2 fw-7 split-text effect-right'
              >
                Home
              </Link>
              <span className='dot'></span>
              <span className='page-breadkcum body-2 fw-7 split-text effect-right'>
                {' '}
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- /.page-title --> */}

      {/* <!-- Main-content --> */}

      <div className='main-content'>
        <section className='section-contact p-contact tf-spacing-2'>
          <div className='tf-container'>
            <div className='section-contact-inner flex justify-content-between flex-wrap pb-5 mb-5'>
              <div className='left'>
                <div className='heading-section mb-30'>
                  <div className='sub-title body-2 fw-7 mb-17 title-animation'>
                    Get In Touch
                  </div>
                  <h2 className='title fw-6 mb-10 title-animation'>
                    Got a Project in
                    <span className='fw-3'>&nbsp;Mind?</span>
                  </h2>
                  <div className='desc text-animation'>
                    <p className='lh-30 fs-2'>
                      We’re just a call or email away! We are happy to help you,
                      always.
                    </p>
                  </div>
                </div>

                <div className='contact-social'>
                  <div className='title body-2 fw-7 title-animation'>Follow Me</div>
                  <ul className='post-social style-radius-50 style-bg-white g-10 title-animation'>
                    <li>
                      <a
                        href='https://www.facebook.com/InheritxSolutions/'
                        className='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='icon-fb'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://x.com/inheritx'
                        className='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='icon-X'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/'
                        className='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='icon-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.instagram.com/inheritxsolutions/'
                        className='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='icon-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='right'>
                <ContactForm className='form-contact-us px-md-15 rounded-3 overflow-hidden' />
              </div>
            </div>

            <div className='locations-contact pt-5'>
              <div className='locations-footer item mb-30'>
                <h2 className='title fw-6 mb-3 title-animation'>We’re Here!</h2>
                <p className='lh-30 mb-5 fs-2 mb-5 pb-5'>
                  Headquartered in India, we have a global presence to serve our
                  esteemed clients more effectively.
                </p>

                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='address fs-4 lh-30 mb-5'>
                      <h3 className='fs-3 text-uppercase mb-1 d-flex gap-2 align-items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 640 400'
                        >
                          <rect width='640' height='133.33' fill='#FF9933' />
                          <rect
                            y='133.33'
                            width='640'
                            height='133.34'
                            fill='#FFFFFF'
                          />
                          <rect
                            y='266.67'
                            width='640'
                            height='133.33'
                            fill='#138808'
                          />

                          <circle
                            cx='320'
                            cy='200'
                            r='40'
                            fill='none'
                            stroke='#000080'
                            strokeWidth='4'
                          />

                          <g stroke='#000080' strokeWidth='2'>
                            <g transform='translate(320,200)'>
                              <line x1='0' y1='0' x2='0' y2='-40' />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(15)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(30)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(45)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(60)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(75)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(90)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(105)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(120)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(135)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(150)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(165)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(180)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(195)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(210)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(225)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(240)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(255)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(270)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(285)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(300)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(315)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(330)'
                              />
                              <line
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='-40'
                                transform='rotate(345)'
                              />
                            </g>
                          </g>
                        </svg>

                        <strong>INDIA</strong>
                      </h3>
                      8th Floor, Panchdhara Complex, S G Highway, Bodakdev,
                      <br />
                      Ahmedabad - 380054
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='address fs-4 lh-30 mb-5'>
                      <h3 className='fs-3 text-uppercase mb-1 d-flex gap-2 align-items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 7410 3900'
                        >
                          <rect width='7410' height='3900' fill='#b22234' />
                          <g fill='#ffffff'>
                            <rect y='300' width='7410' height='300' />
                            <rect y='900' width='7410' height='300' />
                            <rect y='1500' width='7410' height='300' />
                            <rect y='2100' width='7410' height='300' />
                            <rect y='2700' width='7410' height='300' />
                            <rect y='3300' width='7410' height='300' />
                          </g>
                          <rect width='2964' height='2100' fill='#3c3b6e' />
                        </svg>

                        <strong>United States</strong>
                      </h3>
                     222 Broadway, New York, NY 10038
                      <br />
                     United States
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='address fs-4 lh-30 mb-5'>
                      <h3 className='fs-3 text-uppercase mb-1 d-flex gap-2 align-items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 5 3'
                        >
                          <rect width='5' height='1' y='0' fill='#000000' />
                          <rect width='5' height='1' y='1' fill='#DD0000' />
                          <rect width='5' height='1' y='2' fill='#FFCE00' />
                        </svg>

                        <strong>Germany</strong>
                      </h3>
                     Kloster 3, 79713 Bad Säckingen
                      <br />
                      Germany
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='address fs-4 lh-30 mb-5'>
                      <h3 className='fs-3 text-uppercase mb-1 d-flex gap-2 align-items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 3 2'
                        >
                          <rect width='3' height='2' fill='#ffffff' />
                          <circle cx='1.5' cy='1' r='0.6' fill='#bc002d' />
                        </svg>

                        <strong>Japan</strong>
                      </h3>
                     1-36-13 Hashiba, Taito-ku, Tokyo
                      <br />
                      Japan
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact-footer item'>
                <div className='title fs-1 fw-7'>Contact</div>
                <div>
                  <ul>
                    <li className='top-bar-item fs-2'>
                      <i className='icon-email'></i>
                      <a href='mailto:contact@inheritx.com' className='mb-0'>
                        contact@inheritx.com
                      </a>
                    </li>
                  </ul>
                  <ul className='lh-45 fw-6'>
                    <li className='top-bar-item fs-2'>
                      <i className='icon-phone'></i>
                      <a href='tel:+13473940007' className='mb-0'>
                        +1(347) 394-0007
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
