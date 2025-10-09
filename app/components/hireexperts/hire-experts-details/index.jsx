import Link from 'next/link'
import { HireUsData } from '../../../hire-experts/hireusJsonData'
import Breadcrumbs from '../../Breadcrumbs'


export const dynamic = 'force-static'

// Utility function to convert category to slug
const toSlug = (category) => (category || '').replace(/^hire-/, '')

export async function generateStaticParams() {
  const uniqueSlugs = Array.from(new Set(
    HireUsData.Data.map(d => toSlug(d.category)).filter(Boolean)
  ))
  return uniqueSlugs.map(slug => ({ slug }))
}

// Helper function to find the best candidate from multiple matches
const findBestCandidate = (candidates) => {
  if (candidates.length === 0) return null
  if (candidates.length === 1) return candidates[0]

  // Prefer candidates with more complete data
  return candidates.find(d =>
    d.our_services_icons &&
    d.our_services_icons.length > 0 &&
    d.our_services_icons.some(i => i.content)
  ) || candidates[0]
}

export default function HireDetailsPage({ params }) {
  const candidates = HireUsData.Data.filter(d => toSlug(d.category) === params.slug)
  const full = findBestCandidate(candidates)

  if (!full) {
    return (
      <div className="page-title">
        <div className="tf-container">
          <div className="page-title-content text-center">
            <h1 className="title">Developer Not Found</h1>
            <Breadcrumbs />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>{full.heading}</h1>
            <Breadcrumbs />
          </div>
        </div>
      </div>

      <div className='main-content position-relative'>
        <div className='mask mask-service-4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' fill='none'>
            <circle cx='400' cy='400' r='325' stroke='url(#b6)' strokeWidth='150'></circle>
            <defs>
              <linearGradient id='b6' x1='176' x2='569' y1='70.5' y2='674'>
                <stop offset='0' stopColor='#fff' stopOpacity='0.05'></stop>
                <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className='tf-container tf-spacing-8'>
          <div className='row'>
            <div className='col-12'>
              <div className='wg-details wg-service-details'>
                <div className='details-content'>
                  <div className='mb-5'>
                    <h2 className='title mb-3'>{full.heading_caption}</h2>
                    {full.content && full.content.length > 0 && (
                      <div className='desc'>
                        {full.content.map((p, i) => (
                          <p key={i} className={`lh-30 ${i < full.content.length - 1 ? 'mb-3' : 'mb-0'}`}>{p}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {full.we_offer && full.we_offer.length > 0 && (
                    <div className='details-content-2'>
                      <h3 className='title'>We Offer</h3>
                      <div className='desc'>
                        {full.we_offer.map((p, i) => (
                          <p key={i} className={`lh-30 ${i < full.we_offer.length - 1 ? 'mb-3' : 'mb-0'}`}>{p}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {full.hire_developers_model && full.hire_developers_model.length > 0 && (
                    <div className='details-content-2'>
                      <h3 className='title'>Our Hiring Model</h3>
                      <div className='desc'>
                        {full.hire_developers_model.map((p, i) => (
                          <p key={i} className={`lh-30 ${i < full.hire_developers_model.length - 1 ? 'mb-3' : 'mb-0'}`}>{p}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {full.our_services_icons && full.our_services_icons.length > 0 && (
                    <div className='details-content-2'>
                      <h3 className='title mb-5'>What You Can Hire Us For</h3>
                      <div className='row'>
                        {full.our_services_icons.map((service, index) => (
                          <div key={`${service.imageTitle || service.title}-${index}`} className='col-12 col-sm-6 col-lg-4 mb-5'>
                            <div
                              className='d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100 tf-animation fade-up'
                              data-animation-delay={`${index * 0.2}s`}
                            >
                              <h4 className='title-animation text-primary lh-40'>
                                {service.imageTitle || service.title}
                              </h4>
                              {(service.content || service.desc) && (
                                <p className='lh-30'>{service.content || service.desc}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='section-services p-services tf-spacing-2'>
          <div className='top-section'>
            <div className='tf-marquee'>
              <div className='marquee-wrapper'>
                <div className='initial-child-container'>
                  <div className='big-text'>Flexible <span className='text-stroke'>Hiring</span> Models</div>
                  <div className='big-text'>Flexible <span className='text-stroke'>Hiring</span> Models</div>
                  <div className='big-text'>Flexible <span className='text-stroke'>Hiring</span> Models</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='custom-services-wrapper d-flex flex-wrap'>
              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center' style={{ width: '100px', height: '100px' }}>
                  <img src='/image/services-icon/business_modal_1.png' alt='Full‑Time Hiring icon' className='lazyload img-fluid' style={{ width: '60px', height: '60px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                </div>
                <h5 className='lh-30 fw-6 mt-3'><h3 className='title-service'>Full‑Time Hiring</h3></h5>
                <div className='desc lh-30 fs-3 mb-0'>
                  <div>Duration: 160 Hours/Month</div>
                  <div>Communication: Email, Skype, Phone</div>
                  <div>Billing: 50% Advance</div>
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center' style={{ width: '100px', height: '100px' }}>
                  <img src='/image/services-icon/business_modal_2.png' alt='Part‑Time Hiring icon' className='lazyload img-fluid' style={{ width: '60px', height: '60px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                </div>
                <h5 className='lh-30 fw-6 mt-3'><h3 className='title-service'>Part‑Time Hiring</h3></h5>
                <div className='desc lh-30 fs-3 mb-0'>
                  <div>Duration: 80 Hours/Month</div>
                  <div>Communication: Email, Skype, Phone</div>
                  <div>Billing: 50% Advance</div>
                </div>
              </div>

              <div className='services-item px-lg-15 col-md-4 no-img services-item-force'>
                <div className='icon bg-white p-3 rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-center' style={{ width: '100px', height: '100px' }}>
                  <img src='/image/services-icon/business_modal_3.png' alt='Hourly Hiring icon' className='lazyload img-fluid' style={{ width: '60px', height: '60px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                </div>
                <h5 className='lh-30 fw-6 mt-3'><h3 className='title-service'>Hourly Hiring</h3></h5>
                <div className='desc lh-30 fs-3 mb-0'>
                  <div>Duration: Pay Per Use</div>
                  <div>Communication: Email, Skype, Phone</div>
                  <div>Billing: Weekly</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='tf-container tf-spacing-8'>
          <div className='details-content-2 mb-0'>
            <h3 className='title mb-4'>Tools We Use</h3>
            {full.tools_we_use && full.tools_we_use.length > 0 && (
              <div className='desc lh-30 mb-4'>
                {full.tools_we_use.map((p, i) => (
                  <p key={i} className={`lh-30 ${i < full.tools_we_use.length - 1 ? 'mb-2' : 'mb-0'}`}>{p}</p>
                ))}
              </div>
            )}
            <div className='row g-3 tools-grid' role='list'>
              <div className='col-12 col-sm-6 col-md-4' role='listitem'>
                <div className='tool-card p-3 rounded-3 h-100 d-flex align-items-start gap-3'>
                  <div className='tool-icon d-flex align-items-center justify-content-center' aria-hidden='true' style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 82, 204, 0.12)' }}>

                    <svg width="36px" height="36px" viewBox="0 0 32 32" fill="none">
                      <path d="M29.6647 15.2165L17.2075 3.1679L16 2L6.62269 11.0697L2.33526 15.2165C1.88825 15.6494 1.88825 16.3506 2.33526 16.7835L10.9025 25.0697L16 30L25.3773 20.9303L25.5225 20.7899L29.6647 16.7835C30.1118 16.3506 30.1118 15.6494 29.6647 15.2165ZM16 20.1394L11.7202 16L16 11.8606L20.2798 16L16 20.1394Z" fill="#2684FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 11.8606C13.1979 9.15007 13.1842 4.75994 15.9694 2.0332L6.60352 11.0881L11.701 16.0184L15.9999 11.8606Z" fill="url(#paint0_linear_87_7658)" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.2912 15.9888L16 20.1392C17.3525 21.4466 18.1124 23.2202 18.1124 25.0695C18.1124 26.9189 17.3525 28.6925 16 29.9999L25.3888 20.9191L20.2912 15.9888Z" fill="url(#paint1_linear_87_7658)" />
                      <defs>
                        <linearGradient id="paint0_linear_87_7658" x1="15.2357" y1="7.67312" x2="8.09646" y2="10.7902" gradientUnits="userSpaceOnUse">
                          <stop offset="0.18" stopColor="#0052CC" />
                          <stop offset="1" stopColor="#2684FF" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_87_7658" x1="16.8177" y1="24.2786" x2="23.9441" y2="21.1836" gradientUnits="userSpaceOnUse">
                          <stop offset="0.18" stopColor="#0052CC" />
                          <stop offset="1" stopColor="#2684FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className='body-2 fs-1 fw-7 mb-1'>Jira</div>
                    <div className='fs-3 lh-30 text-secondary'>Agile boards, sprint tracking, project visibility.</div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4' role='listitem'>
                <div className='tool-card p-3 rounded-3 h-100 d-flex align-items-start gap-3'>
                  <div className='tool-icon d-flex align-items-center justify-content-center' aria-hidden='true' style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(74, 21, 75, 0.1)' }}>
                    <svg width="36px" height="36px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.5002 14.9996C27.8808 14.9996 29 13.8804 29 12.4998C29 11.1192 27.8807 10 26.5001 10C25.1194 10 24 11.1193 24 12.5V14.9996H26.5002ZM19.5 14.9996C20.8807 14.9996 22 13.8803 22 12.4996V5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5V12.4996C17 13.8803 18.1193 14.9996 19.5 14.9996Z" fill="#2EB67D" />
                      <path d="M5.49979 17.0004C4.11919 17.0004 3 18.1196 3 19.5002C3 20.8808 4.1193 22 5.49989 22C6.8806 22 8 20.8807 8 19.5V17.0004H5.49979ZM12.5 17.0004C11.1193 17.0004 10 18.1197 10 19.5004V26.5C10 27.8807 11.1193 29 12.5 29C13.8807 29 15 27.8807 15 26.5V19.5004C15 18.1197 13.8807 17.0004 12.5 17.0004Z" fill="#E01E5A" />
                      <path d="M17.0004 26.5002C17.0004 27.8808 18.1196 29 19.5002 29C20.8808 29 22 27.8807 22 26.5001C22 25.1194 20.8807 24 19.5 24L17.0004 24L17.0004 26.5002ZM17.0004 19.5C17.0004 20.8807 18.1197 22 19.5004 22L26.5 22C27.8807 22 29 20.8807 29 19.5C29 18.1193 27.8807 17 26.5 17L19.5004 17C18.1197 17 17.0004 18.1193 17.0004 19.5Z" fill="#ECB22E" />
                      <path d="M14.9996 5.49979C14.9996 4.11919 13.8804 3 12.4998 3C11.1192 3 10 4.1193 10 5.49989C10 6.88061 11.1193 8 12.5 8L14.9996 8L14.9996 5.49979ZM14.9996 12.5C14.9996 11.1193 13.8803 10 12.4996 10L5.5 10C4.11929 10 3 11.1193 3 12.5C3 13.8807 4.11929 15 5.5 15L12.4996 15C13.8803 15 14.9996 13.8807 14.9996 12.5Z" fill="#36C5F0" />
                    </svg>
                  </div>
                  <div>
                    <div className='body-2 fs-1 fw-7 mb-1'>Slack</div>
                    <div className='fs-3 lh-30 text-secondary'>Channels, huddles, and async updates.</div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-4' role='listitem'>
                <div className='tool-card p-3 rounded-3 h-100 d-flex align-items-start gap-3'>
                  <div className='tool-icon d-flex align-items-center justify-content-center' aria-hidden='true' style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)' }}>
                    <svg width="36px" height="36px" viewBox="0 -21.5 256 256" preserveAspectRatio="xMidYMid">
                      <g>
                        <path d="M128.300525,0 C59.6596401,0 5.88330599,87.3292379 0.795322946,161.089363 C22.33503,198.473015 74.2776064,212.524878 128.300525,212.524878 C182.319971,212.524878 234.266021,198.473015 255.795309,161.089363 C250.707325,87.3292379 196.937937,0 128.300525,0" fill="#B6DEFF">

                        </path>
                        <path d="M237.860602,143.519325 C237.860602,143.519325 222.700844,110.744379 207.291028,91.621898 C191.870793,72.492471 173.040046,51.6612613 161.905525,51.6612613 C150.777949,51.6612613 119.670056,106.73998 105.399392,106.73998 C91.1252553,106.73998 83.7068719,81.7723964 66.1576716,81.7723964 C48.6015254,81.7723964 20.7096538,141.980775 20.7096538,141.980775 L18.8203277,152.187998 C18.8203277,152.187998 28.5100702,195.149329 129.884225,195.149329 C231.261853,195.149329 239.364423,152.893022 239.364423,152.893022 L237.860602,143.519325" fill="#66CC66">

                        </path>
                        <path d="M106.986565,130.24542 C91.2433382,130.24542 83.1720259,114.710575 78.7960131,105.12155 C74.8610747,96.4841344 74.1803616,82.8455614 63.0145831,82.4635286 C64.1120594,82.0294003 65.1678592,81.7723964 66.1576716,81.7723964 C83.7068719,81.7723964 91.1252553,106.73998 105.399392,106.73998 C119.670056,106.73998 150.777949,51.6612613 161.905525,51.6612613 C164.003232,51.6612613 166.36489,52.4010158 168.927983,53.7172926 C167.031711,53.4672348 164.600593,53.6408861 162.728632,55.5197931 C159.130577,59.117848 126.477187,130.24542 106.986565,130.24542" fill="#17AD49">

                        </path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className='body-2 fs-1 fw-7 mb-1'>Basecamp</div>
                    <div className='fs-3 lh-30 text-secondary'>Tasks, docs, and announcements in one place.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='wg-cta tf-spacing-2 alert alert-dismissible fade show mb-0' role='alert'>
          <div className='tf-container'>
            <div className='cta-inner flex align-items-center justify-content-center'>
              <div className='left flex align-items-center'>
                <div className='icon'>
                  <i className='icon-chat-2'></i>
                </div>
                <h5 className='fw-4 title'>Ready to hire {full.type} developers? Let’s discuss your requirements.</h5>
                <Link href='/contact' className='tf-btn no-bg text-underline hover-color-main-dark'>
                  <span>Consult our experts</span>
                  <i className='icon-arrow-right'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


