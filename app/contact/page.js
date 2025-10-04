import PageTitle from '../components/PageTitle'

export const dynamic = 'force-static'

export default function Page () {
  return (
    <>
      {/* <!-- Page-title --> */}

      <div class='page-title'>
        <div class='tf-container'>
          <div class='page-title-content text-center'>
            <h1 class='title split-text effect-right'>Contact Us</h1>
            <div class='breadkcum'>
              <a
                href='index.html'
                class='link-breadkcum body-2 fw-7 split-text effect-right'
              >
                Home
              </a>
              <span class='dot'></span>
              <span class='page-breadkcum body-2 fw-7 split-text effect-right'>
                {' '}
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- /.page-title --> */}

      {/* <!-- Main-content --> */}

      <div class='main-content'>
        <section class='section-contact p-contact tf-spacing-2'>
          <div class='tf-container'>
            <div class='section-contact-inner flex justify-content-between flex-wrap pb-5 mb-5'>
              <div class='left'>
                <div class='heading-section mb-30'>
                  <div class='sub-title body-2 fw-7 mb-17 title-animation'>
                    Get In Touch
                  </div>
                  <h2 class='title fw-6 mb-10 title-animation'>
                    Got a Project in
                    <span class='fw-3'>Mind?</span>
                  </h2>
                  <div class='desc text-animation'>
                    <p class='lh-30 fs-2'>
                      We’re just a call or email away! We are happy to help you,
                      always.
                    </p>
                  </div>
                </div>

                <div class='contact-social'>
                  <div class='title body-2 fw-7 title-animation'>Follow Me</div>
                  <ul class='post-social style-radius-50 style-bg-white g-10 title-animation'>
                    <li>
                      <a
                        href='https://www.facebook.com/InheritxSolutions/'
                        class='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i class='icon-fb'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://x.com/inheritx'
                        class='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i class='icon-X'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/'
                        class='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i class='icon-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.instagram.com/inheritxsolutions/'
                        class='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i class='icon-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='right'>
                <form
                  id='contactform'
                  className='form-contact-us px-md-15 rounded-3 overflow-hidden'
                  method='post'
                  action=''
                >
                  <div className='heading-form text-center'>
                    <h3 className='title'>Need Help For Project!</h3>

                    <div className='desc lh-30'>
                      We are ready to help your next projects, let’s work
                      together
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
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
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

            <div className='locations-contact pt-5'>
              <div className='locations-footer item mb-30'>
                <h2 class='title fw-6 mb-5 title-animation'>We’re Here!</h2>
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
                            stroke-width='4'
                          />

                          <g stroke='#000080' stroke-width='2'>
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
                      222 BROADWAY, New York, NY, 10038
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
                      Kloster 3, 79713, Bad Säckingen
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
                      1-36-13 hashiba, TAITO-KU Tokyo
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
                    <li class='top-bar-item fs-2'>
                      <i class='icon-phone'></i>
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
