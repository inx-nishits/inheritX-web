'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '../Breadcrumbs'
import LifeAtInheritX from '../LifeAtInheritX'

export default function AboutContent() {
  const journeyRef = useRef(null)
  const journeyHeadingRef = useRef(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const galleryVersion = '2'

  const galleryImages = [
    '/image/image-gallery/gallery-1.jpg',
    '/image/image-gallery/gallery-2.jpg',
    '/image/image-gallery/gallery-3.jpg',
    '/image/image-gallery/gallery-4.jpg',
    '/image/image-gallery/gallery-5.jpg',
    '/image/image-gallery/gallery-6.jpg',
    '/image/image-gallery/gallery-7.jpg',
    '/image/image-gallery/gallery-8.jpg',
    '/image/image-gallery/gallery-9.jpg',
    '/image/image-gallery/gallery-10.jpg',
    '/image/image-gallery/gallery-11.jpg',
    '/image/image-gallery/gallery-12.jpg',
    '/image/image-gallery/gallery-13.jpg',
    '/image/image-gallery/gallery-14.jpg',
    '/image/image-gallery/gallery-15.jpg'
  ]
  const gridImages = galleryImages.slice(0, 8)

  useEffect(() => {
    const container = journeyRef.current
    if (!container || typeof window === 'undefined') return

    const cardNodes = Array.from(
      container.querySelectorAll('[data-journey-card]')
    )
    const yearNodes = Array.from(
      container.querySelectorAll('[data-journey-year]')
    )

    const animate = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      })
    }

    const observer = new IntersectionObserver(animate, {
      root: null,
      threshold: 0.2
    })

    // Stagger cards
    cardNodes.forEach((el, index) => {
      el.style.setProperty('--stagger-index', String(index))
      observer.observe(el)
    })

    // Observe year labels for pulse effect
    yearNodes.forEach((el) => observer.observe(el))

    // Heading underline animation
    const headingEl = journeyHeadingRef.current
    if (headingEl) {
      const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headingEl.classList.add('in-view')
            headingObserver.unobserve(headingEl)
          }
        })
      }, { threshold: 0.1 })
      headingObserver.observe(headingEl)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isGalleryOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsGalleryOpen(false)
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % galleryImages.length)
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isGalleryOpen, galleryImages.length])
  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title'>About Us</h1>
            <div className='mb-5'>
              <Breadcrumbs />
            </div>

            <p className='pt-4'>Our only aim — to make clients happy!</p>
          </div>
        </div>
      </div>

      {/* <!-- /.page-title --> */}

      {/* <!-- Main-content --> */}

      <div className='main-content'>
        <section className='section-counting tf-spacing-5'>
          <div className='tf-container w-1810'>
            <div className='section-counting-inner flex'>
              <div className='left'>
                <div className='position-relative image tf-animate-1 rounded-4 overflow-hidden'>
                  <Image
                    src='/image/home/join-our-team.jpeg'
                    alt='Counting section'
                    fill
                  />
                 
                </div>

              </div>
              <div className='right'>
                <div className='heading-section mb-0'>
                  <h2 className='fw-7 mb-5 '>
                    Who <span className='text-primary'>&nbsp;We Are</span>
                  </h2>
                  <p className='lh-30 fs-3  mb-5'>
                    Since 2011, excellent customer service has not just been a phrase, but a core value of InheritX Solutions. Developing high-quality solutions in the web and mobile app domains has been a way of life at InheritX for over fourteen years. Our client-centric approach and no compromise on performance have made us an undisputed leader in mobile app, web, game, and digital marketing.
                  </p>

                  <p className='lh-30 fs-3  mb-0'>
                    At InheritX, our aim has remained the same since inception – to make and keep our clients happy. This is the reason why we have a large clientele across different industry sectors worldwide. Our happy clients include startups, SMEs, and even a few Fortune 500 companies. Our in-house team of experienced developers makes it possible to transform your creative concepts into innovative IT solutions.
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
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                  <div className='big-text'>AWS Experts : <span className='text-stroke'>Wipe Code</span> : Agentic AI Makers : <span className='text-stroke'>Gen AI</span> : DevOPs Specialist</div>
                </div>
              </div>
            </div>
          </div>
          <div className='tf-container pb-0 mb-0'>
            <div className='about-inner flex g-30 px-0'>

              <div className='right'>
                <div className='heading-section mb-30' ref={journeyHeadingRef}>
                  <div className='sub-title fs-1 fw-7 mb-30 '>
                    Our Exciting Journey So Far
                  </div>
                </div>
                <div className='section-content'>
                  <div className='desc mb-40 text-animation'>
                    <p className='lh-30'>
                      A small team of experienced and dedicated IT professionals founded InheritX Solutions back in 2011. Since then, we have never looked back in providing high-quality, result-driven, advanced technology solutions to our esteemed clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container' ref={journeyRef}>
            <div className='row'>
              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
                      2011
                    </span>
                    Birth of InheritX
                  </h3>
                  <p className='lh-30'>
                    Started with a small team of passionate IT professionals, aiming to deliver quality technology solutions.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
                      2012
                    </span>
                    Steady Growth
                  </h3>
                  <p className='lh-30'>
                    Our small setup evolved rapidly, and InheritX Solutions
                    became a member of NASSCOM, IGDA, and other reputable industry
                    organizations.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
                      2013
                    </span>
                    Expansion Phase
                  </h3>
                  <p className='lh-30'>
                    Moved to a larger office, with employee strength reaching 50, setting the stage for more ambitious projects.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
                      2015
                    </span>
                    Gaining Recognition
                  </h3>
                  <p className='lh-30'>
                    Enhanced business policies, launched digital marketing
                    services, and was recognized as a top mobile app development
                    company by GESIA.
                  </p>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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

              <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 mb-5'>
                <div className='journey-card d-flex flex-column gap-4 mb-0 border border-light rounded-4 overflow-hidden p-4 h-100' data-journey-card>
                  <h3 className='clearfix'>
                    <span className='journey-year text-primary d-block mb-5 year-animate mb-2' data-journey-year>
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
                <div className='heading-section mb-5'>
                  <div className='sub-title body-2 fw-7 mb-17 '>
                    About <span className='text-primary'>InheritX Solutions</span>
                  </div>
                  <h2 className='title fw-6 '>
                    Leaders in providing Mobile, Web, Game, and Internet
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
                        <div className='right'>
                          <div className='desc lh-30 mb-1'>
                            Since its inception, InheritX Solutions has set many milestones by offering quality IT solutions and services that are capable of bringing disruptive changes to the corporate world.
                          </div>
                          <div className='desc lh-30 mb-0'>
                            We are striving to offer superior quality solutions that clients prefer for their customers, employees feel pride in, customers appreciate, and investors choose to get long-term returns.
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
                        <div className='right'>
                          <div className='desc lh-30 mb-1'>
                            To be recognized as leaders in quality services and in developing relationships that make a positive difference in our customers' lives.
                          </div>

                          <div className='desc lh-30 mb-0'>
                            We provide enterprise-grade design and development services to our clients to boost the productivity of their businesses across the world, with a vision to become the most reliable offshore partner.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right-section w-100'>
                <div className='image image-section tf-animate-1 rounded-4 overflow-hidden position-relative accordion-section-image' style={{ minHeight: '640px' }}>
                  <Image
                    src='/image/page-title/company-1.jpg'
                    alt=''
                    className='overflow-hidden h-100 w-100'
                    style={{ objectFit: 'cover' }}
                    fill
                    priority
                  />
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
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-60 text-center'>
                  <h2 className='title fw-6  mb-5'>
                    What We <span className='text-primary'>Offer?</span>
                  </h2>
                  <p className='clearfix'>
                    InheritX Solutions has an in-house team of experienced
                    developers who can handle projects of any size in the
                    domains of web, mobile apps, and IoT.
                  </p>
                </div>
              </div>
            </div>

            <div className='list-services flex flex-wrap'>
              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/certificate.svg'
                    alt='Certificate'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>

                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/web-app-development'
                    className='title-service text-primary'
                  >
                    Certified Developers
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
                  Our skilled developers have a knack for developing futuristic
                  solutions in web and mobile app development.
                </div>
              </div>

              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/email.svg'
                    alt='Email'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/web-app-development'
                    className='title-service text-primary'
                  >
                    Quick Delivery
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
                  At InheritX, we ensure timely project completion through our
                  structured work approach. We also provide regular updates on
                  the progress of your project.
                </div>
              </div>

              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/office.svg'
                    alt='Office'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/google-cloud-services'
                    className='title-service text-primary'
                  >
                    State-of-the-art Infrastructure
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
                  Excellent digital infrastructure can be the key to success for
                  an IT company. At InheritX, we have advanced infrastructure
                  equipped with servers, cutting-edge tools, and the latest
                  gadgets.
                </div>
              </div>

              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/receipt.svg'
                    alt='Receipt'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/web-app-development'
                    className='title-service text-primary'
                  >
                    Competitive Pricing
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
                  Our flexible pricing models can easily adapt to your
                  ever-changing business needs. We offer transparent pricing
                  with no hidden charges.
                </div>
              </div>

              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/innovation.svg'
                    alt='Innovation'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/machine-learning-development'
                    className='title-service text-primary'
                  >
                    Domain Expertise
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
                  When it comes to domain insight and hands-on experience with
                  the latest tools, our developers always stay updated with
                  modern trends and advancements.
                </div>
              </div>

              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/customer-service.svg'
                    alt='Customer service'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/web-app-development'
                    className='title-service text-primary'
                  >
                    IT Consultancy
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
                  We provide top-notch IT consulting services along with
                  end-to-end IT solutions. From design to deployment, and
                  maintenance to marketing, we take care of every aspect of your
                  project.
                </div>
              </div>

              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/responsive.svg'
                    alt='Responsive'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/mobile-app-development'
                    className='title-service text-primary'
                  >
                    Flexible Development Process
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
                  By implementing the agile methodology, we ensure that our
                  development process remains client-centric and flexible to
                  meet changing business needs.
                </div>
              </div>

              <div className='services-item px-lg-15 no-img'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '140px', height: '140px', maxWidth: '140px' }}
                >
                  <img
                    src='/image/about/encrypted.svg'
                    alt='Encrypted'
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='100'
                    height='100'
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <h5 className='lh-30 fw-6'>
                  <Link
                    href='/services/google-cloud-services'
                    className='title-service text-primary'
                  >
                    Higher Security
                  </Link>
                </h5>

                <div className='desc lh-30 mb-1'>
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
                strokeWidth='150'
              />
              <defs>
                <linearGradient id='a4' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container'>
            <div className='row justify-content-between rg-50'>
              <div className='col-lg-7'>
                <div className='heading-section mb-60'>
                  <div className='sub-title body-2 fw-7 mb-17 '>
                    Clients Feedback
                  </div>
                  <h2 className='title fw-6 '>
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
                          Overall, I was very satisfied with InheritX. They are hard-working, very reliable, and very flexible. I would highly recommend the INX team for any development work.
                        </div>
                        <div className='user-testimonial'>
                          <span className='name-user body-2 '>
                            Edward
                          </span>
                          <span className='position text-medium'>
                            CEO
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          InheritX is very professional and articulate in their approach to this project. The most impressive thing is the input and intelligent contributions they have made to the design of the app.
                        </div>
                        <div className='user-testimonial'>
                          <span className='name-user body-2 '>
                            Badri
                          </span>
                          <span className='position text-medium'>
                            Manager
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          InheritX has proven themselves to be dependable, with solid problem-solving and technical skills. They are persistent, reliable, flexible, and responsive.
                        </div>
                        <div className='user-testimonial'>
                          <span className='name-user body-2 '>
                            Saady
                          </span>
                          <span className='position text-medium'>
                            Developer
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          InheritX has done a fabulous job. We want to continue using them in the future and recommend them to all developers looking for professional, high-quality work.
                        </div>
                        <div className='user-testimonial'>
                          <span className='name-user body-2 '>
                            Simon
                          </span>
                          <span className='position text-medium'>
                            Developer
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          The team has been fantastic. I have been working with them for nearly two years now and have not been able to find a fault in their performance or attitude. They are extremely professional and polite.
                        </div>
                        <div className='user-testimonial'>
                          <Link href='javascript:void(0)' className='name-user body-2 '>
                            Dorain
                          </Link>
                          <Link href='javascript:void(0)' className='position text-medium'>
                            Developer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-testimonial sw-pagination mt-50'></div>
              </div>
              <div className='col-lg-4 my-auto'>
                <div className="container" style={{
                  maxWidth: '300px',
                  margin: '0 auto',
                }}>
                  <div className="row">
                    <div className="col-6 mb-3 d-flex justify-content-center align-items-center">
                      <Image
                        src='/image/home/section-testimonial-1.png'
                        alt=''
                        className='img-fluid lazyload'
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="col-6 mb-3 d-flex justify-content-center align-items-center">
                      <Image
                        src='/image/home/section-testimonial-2.png'
                        alt=''
                        className='img-fluid lazyload'
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="col-6 mb-3 d-flex justify-content-center align-items-center">
                      <Image
                        src='/image/home/section-testimonial-4.png'
                        alt=''
                        className='img-fluid lazyload'
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="col-6 mb-3 d-flex justify-content-center align-items-center">
                      <Image
                        src='/image/home/section-testimonial-3.png'
                        alt=''
                        className='img-fluid lazyload'
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <LifeAtInheritX />
      </div>
    </>
  )
}
