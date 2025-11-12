"use client"
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className='mask mask-1'></div>
      <div className='mask mask-2'></div>
      <div className='footer-inner position-relative'>
        <div className='footer-top'>
          <div className='tf-marquee'>
            <div className='marquee-wrapper'>
              <div className='initial-child-container'>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
                <div className='big-text'>Get In Touch <span className='text-stroke'>Contact Us&nbsp;</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className='tf-container'>
          <div className='footer-middle flex justify-content-between'>
            <div className='left'>
              <div className='logo logo-header mb-5'>
                <Link href='/' className='d-flex align-items-center' aria-label='InheritX - Go to homepage'>
                  <Image src='/image/logo/inx-logo.svg' alt='logo' width={250} height={40} />
                </Link>
              </div>
              <p className='mb-5'>
                Since 2011, InheritX has delivered web, mobile, and AI solutions
                worldwide — blending innovation, quality, and timely delivery to
                help businesses grow.
              </p>

              <div className='contact-footer item'>
                <div className='title fs-1 fw-7 mb-4'>Contact</div>
                <div>
                  <ul>
                    <li className='top-bar-item'>
                      <Link href='mailto:contact@inheritx.com' target='_blank' className='mb-0 d-inline-flex align-items-center gap-2 p-2'>
                        <i className='icon-email'></i>
                        <span>contact@inheritx.com</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className='lh-45 fw-6'>
                    <li className='top-bar-item'>
                      <Link href='https://wa.me/918487006480?text=Hello%20inheritx%2C%20I%27d%20like%20to%20get%20in%20touch.' className='mb-0 d-inline-flex align-items-center gap-2 p-2' target='_blank' rel='noopener noreferrer'>
                        <span aria-hidden='true' className='whatsapp-icon' style={{ display: 'inline-flex', alignItems: 'center' }}>
                          <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z' />
                          </svg>
                        </span>
                        <span>+91 84870 06480</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='footer-content footer-col-block d-none'>
              <div className='title-mobile body-2 fw-7'>
                Services <i className='icon-angle-down'></i>
              </div>
              <div className='tf-collapse-content' style={{ display: 'unset' }}>
                <ul>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>iOS App Development</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>Android App Development</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>
                      Cross-Platform App Development
                    </Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>Web Development</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>E-Commerce Development</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>UI/UX Design</Link>
                  </li>

                  <li className='support-item-footer'>
                    <Link href='/services-details'>AI & Machine Learning</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>Cloud Services</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>Progressive Web Apps (PWA)</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>SEO & Digital Marketing</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>IoT Development</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>Custom Software Solutions</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>Flutter App Development</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>React Native App Development</Link>
                  </li>
                  <li className='support-item-footer'>
                    <Link href='/services-details'>App Modernization</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='locations-contact'>
              <div className='locations-footer item mb-30'>
                <div className='title fs-1 fw-7'>We’re Here!</div>

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
                      <p>
                        8th Floor, Panchdhara Complex, S G Highway, Bodakdev,
                        <br />
                        Ahmedabad - 380054, India
                      </p>
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
                      <p> 222 Broadway, New York, NY 10038
                        <br />
                        United States</p>
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
                      <p>Kloster 3, 79713 Bad Säckingen
                        <br />
                        Germany</p>
                    </div>
                  </div>

                  <div className='col-12 col-md-6'>
                    <div className='address fs-4 lh-30 mb-0 mb-md-5'>
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
                      <p>1-36-13 Hashiba, Taito-ku, Tokyo
                        <br />
                        Japan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tf-container'>
          <div className='footer-bottom'>
            <div className='line'></div>
            <a
              href='#'
              className='footer-go-top'
              onClick={(e) => {
                e.preventDefault()
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              aria-label='Scroll back to top'
            >
              <i className='icon-arrow-up'></i>
            </a>
            <div className='list-bottom flex align-items-center justify-content-center flex-wrap rg-15 g-30 pt-5'>
              <span className='text-center lh-30'>
                © 2025
                <Link href='/' className='fw-7'>
                  &nbsp;InheritX&nbsp;
                </Link>
                - IT Services.<br className='d-block d-md-none' />&nbsp;All&nbsp;rights&nbsp;reserved.
              </span>
              <ul className='d-none align-items-center justify-content-center flex-wrap rg-15'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/about-us'>About</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
