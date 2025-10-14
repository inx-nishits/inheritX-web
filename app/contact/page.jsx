import PageTitle from '../components/PageTitle'
import Link from 'next/link'
import dynamicImport from 'next/dynamic'
import Breadcrumbs from '../components/Breadcrumbs'

const ContactForm = dynamicImport(() => import('../components/ContactForm'), { ssr: false })

export const dynamic = 'force-static'

export default function Page() {
  return (
    <>
      {/* <!-- Page-title --> */}

      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Contact Us</h1>
            <Breadcrumbs />
          </div>
        </div>
      </div>

      {/* <!-- /.page-title --> */}

      {/* <!-- Main-content --> */}

      <div className='main-content'>
        <section className='section-contact p-contact tf-spacing-2'>
          <div className='tf-container'>
            <div className='section-contact-inner flex justify-content-between row flex-wrap pb-5 mb-5 gap-0'>
              <div className='col-12 col-lg-6 mb-5'>
                <div className='heading-section mb-30'>
                  <div className='sub-title body-2 fw-7 mb-17  text-primary'>
                    Get In Touch
                  </div>
                  <h2 className='title fw-6 mb-10 '>
                    Let’s Build Something
                    <span className='fw-3'>&nbsp;Great&nbsp;Together</span>
                  </h2>
                  <div className='desc text-animation'>
                    <p className='lh-30 fs-2'>
                      We’re just a call or email away! We are happy to help you,
                      always.
                    </p>
                  </div>
                </div>

                <div className='contact-social'>
                  <div className='title body-2 fw-7 '>Follow Us</div>
                  <ul className='post-social style-radius-50 style-bg-white g-10 '>
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

              <div className='col-12 col-lg-6'>
                <ContactForm className='form-contact-us px-md-15 rounded-4 overflow-hidden' />
              </div>
            </div>


          </div>
        </section>
      </div>
    </>
  )
}
