import PageTitle from '../components/PageTitle'
import Link from 'next/link'
import dynamicImport from 'next/dynamic'
import Breadcrumbs from '../components/Breadcrumbs'
import JsonLd from '../components/seo/JsonLd'

const ContactForm = dynamicImport(() => import('../components/ContactForm'), { ssr: false })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

export const metadata = {
  title: 'Contact InheritX — Start a Project or Hire Developers',
  description:
    'Contact InheritX to discuss your software project. Hire expert developers for AI, mobile, and web apps.',
  alternates: { canonical: `${siteUrl}/contact` },
  keywords: ['Contact Inheritx', 'business inquiry', 'hire developers']
}

export const dynamic = 'force-static'

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly can we start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects kick off within 1–2 weeks after scope alignment.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which industries do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with fintech, healthcare, wellness, retail, and SaaS startups and enterprises.'
        }
      }
    ]
  }

  return (
    <>
      <JsonLd data={faqJsonLd} />
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
                  <h2 className='title fw-6 mb-10'>
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
                  <div className='title body-2 fw-7 text-primary'>Follow Us</div>
                  <ul className='post-social style-radius-50 style-bg-white g-10'>
                    <li>
                      <a
                        href='https://www.facebook.com/InheritxSolutions/'
                        className='icon-social'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Visit our Facebook page'
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
                        aria-label='Visit our Twitter/X page'
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
                        aria-label='Visit our LinkedIn page'
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
                        aria-label='Visit our Instagram page'
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
