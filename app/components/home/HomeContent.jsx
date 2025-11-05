'use client';
import dynamic from 'next/dynamic'
import { useEffect } from 'react';

import Link from 'next/link'
import Image from 'next/image';
import TypingAnimation from '../TypingAnimation';

// Below-the-fold heavy sections split into separate chunks (no UI change)
const Accordion = dynamic(() => import('../Accordion'))
const ContactForm = dynamic(() => import('../../components/ContactForm'), { ssr: false })
const TestimonialSection = dynamic(() => import('../TestimonialSection'), { ssr: false, loading: () => null })
const OurPartners = dynamic(() => import('../OurPartners'))
const OurValuableClients = dynamic(() => import('../OurValuableClients'))

export default function HomeContent() {

  useEffect(() => {
    const body = document.body;
    if (!body.classList.contains("counter-scroll")) return;

    const elements = Array.from(document.querySelectorAll(".counter .number"));
    if (elements.length === 0) return;

    const activateCounter = (el) => {
      if (el.classList.contains("odometer-activated")) return;
      const to = el.dataset.to;
      el.classList.add("odometer-activated");
      el.textContent = to;
    };

    // ✅ Single observer reused for all elements
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activateCounter(entry.target);
            observer.unobserve(entry.target); // cleanup per element
          }
        }
      },
      { threshold: 0.5 }
    );

    // ✅ Batch observe
    elements.forEach((el) => observer.observe(el));

    // ✅ Pre-check for visible elements on mount (without forcing reflow)
    const viewportHeight = window.innerHeight * 0.5;
    for (const el of elements) {
      const rectTop = el.offsetTop - window.scrollY;
      if (rectTop < viewportHeight) {
        activateCounter(el);
        observer.unobserve(el);
      }
    }

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div className='page-title-home hero-fullscreen' style={{ margin: 0, padding: 0, position: 'relative', top: 0 }}>

        <div className='mask mask-home-2'>
          <svg
            width='800'
            height='800'
            fill='none'
          >
            <circle
              cx='400'
              cy='400'
              r='325'
              stroke='url(#a1)'
              strokeWidth='150'
            />
            <defs>
              <linearGradient id='a1' x1='176' x2='569' y1='70.5' y2='674'>
                <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                <stop offset='1' stopColor='#fff' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className='herosectionContainer tf-container'>
          <div className='row'>
            <div className='col-xl-6'>

              <div className='top-page-title mb-0'>
                <div className='sub-title body-1 fw-5'>
                  Empowering Innovation at <span className='text-primary'>Inheritx&nbsp;Solutions</span>
                </div>

                <div className='fw-5 fs-1 mb-4'>
                  <span className='text-primary'>E</span>xperience <span className='text-primary'>T</span>he <span className='text-primary'>E</span>xcellence
                </div>

                <div className='sub-title fs-2 fw-5 d-none'>
                  <span className='text-primary'>Go</span>&nbsp;Beyond Mobile. <span className='text-primary'>Go</span>&nbsp;Beyond Digital. <span className='text-primary'>Go</span>&nbsp;Smart.
                </div>
                <h2 className='title fw-6' style={{ lineHeight: "141%", minHeight: "2.5em" }}>
                  <TypingAnimation
                    text="Empowering the Future with Mobility & AI Innovation"
                    speed={60}
                    delay={800}
                    className="hero-typing-text"
                    showCursor={true}
                    cursorBlinkSpeed={400}
                    pauseOnSpaces={true}
                    pauseDuration={200}
                    variableSpeed={true}
                    highlightWords={true}
                  />
                </h2>
              </div>

              <div className='content-left mb-md-5 pb-0 pb-lg-0' style={{ minHeight: '140px' }}>
                <div className='desc'>
                  <p className='clearfix'>
                    From building 850+ cutting-edge mobile and web applications for startups, SMEs, and enterprises worldwide to delivering AI-powered solutions with Python, we help businesses transform, scale, and innovate. Our in-house experts craft next-gen mobility and AI solutions — tailored to your vision, optimized for performance, and built to lead in the digital era.
                  </p>
                </div>

                <Link href='/contact' className='tf-btn'>
                  <span>Click for Free Consultancy</span>
                  <i className='icon-arrow-right'></i>
                </Link>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='hero-image-container image tf-animate-1 position-relative' style={{ minHeight: '450px', aspectRatio: '16 / 9', width: '100%' }}>
                <Image
                  src='/image/page-title/herobanner-final.jpg'
                  alt='Hero banner showcasing InheritX Solutions'
                  fill
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                  quality={90}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='tf-container tf-spacing-2'>
        {/* Counter Section Title */}
        <div className='row mb-5 mb-lg-5 pb-lg-5'>
          <div className='col-12 text-center'>
            <div className='heading-section'>
              <div className='sub-title body-2 fw-7 mb-17'>
                Our <span className='text-primary'>Achievements</span>
              </div>
              <h2 className='title fw-6 mb-4'>
                <span className='fw-3'>Numbers That Speak</span>
                &nbsp;for Our Excellence
              </h2>
              <p className='fs-2 lh-30'>
                Trusted by clients worldwide, we deliver exceptional results that drive business growth and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Counter Grid */}
        <div className='row g-4'>
          <div className='col-6 col-lg-4 col-xxl-2 mb-4'>
            <div className='counter-item style-2 style-bg-primary px-3 py-5 rounded-4 overflow-hidden h-100 d-flex align-items-center justify-content-center'>
              <div className='counter text-center'>
                <div className='number-counter flex justify-content-center align-items-center fs-65 fw-7 mb-1'>
                  <span
                    className='number odometer text-white'
                    data-to='400'
                    data-inviewport='yes'
                  >
                    0
                  </span>
                  <span className='text-white ms-1'>+</span>
                </div>
                <p className='title-counter fw-5 text-white text-center'>
                  Verified 5* Client Reviews
                </p>
              </div>
            </div>
          </div>

          <div className='col-6 col-lg-4 col-xxl-2 mb-4'>
            <div className='counter-item style-2 style-bg-surface px-3 py-5 rounded-4 overflow-hidden h-100 d-flex align-items-center justify-content-center'>
              <div className='counter text-center'>
                <div className='number-counter flex justify-content-center align-items-center fs-65 fw-7 mb-1'>
                  <span
                    className='number odometer color-primary'
                    data-to='850'
                    data-inviewport='yes'
                  >
                    0
                  </span>
                  <span className='color-primary ms-1'>+</span>
                </div>
                <p className='title-counter fw-5 text-center'>
                  Projects Delivered Successfully
                </p>
              </div>
            </div>
          </div>

          <div className='col-6 col-lg-4 col-xxl-2 mb-4'>
            <div className='counter-item style-2 style-bg-primary px-3 py-5 rounded-4 overflow-hidden h-100 d-flex align-items-center justify-content-center'>
              <div className='counter text-center'>
                <div className='number-counter flex justify-content-center align-items-center fs-65 fw-7 mb-1'>
                  <span
                    className='number odometer text-white'
                    data-to='97'
                    data-inviewport='yes'
                  >
                    0
                  </span>
                  <span className='text-white ms-1'>%</span>
                </div>
                <p className='title-counter fw-5 text-white text-center'>
                  Client Retention Ratio
                </p>
              </div>
            </div>
          </div>

          <div className='col-6 col-lg-4 col-xxl-2 mb-4'>
            <div className='counter-item style-2 style-bg-surface px-3 py-5 rounded-4 overflow-hidden h-100 d-flex align-items-center justify-content-center'>
              <div className='counter text-center'>
                <div className='number-counter flex justify-content-center align-items-center fs-65 fw-7 mb-1'>
                  <span
                    className='number odometer color-primary'
                    data-to='40'
                    data-inviewport='yes'
                  >
                    0
                  </span>
                  <span className='color-primary ms-1'>+</span>
                </div>
                <p className='title-counter fw-5 text-center'>
                  Industries Served
                </p>
              </div>
            </div>
          </div>

          <div className='col-6 col-lg-4 col-xxl-2 mb-4'>
            <div className='counter-item style-2 style-bg-primary px-3 py-5 rounded-4 overflow-hidden h-100 d-flex align-items-center justify-content-center'>
              <div className='counter text-center'>
                <div className='number-counter flex justify-content-center align-items-center fs-65 fw-7 mb-1'>
                  <span
                    className='number odometer text-white'
                    data-to='120'
                    data-inviewport='yes'
                  >
                    0
                  </span>
                  <span className='text-white ms-1'>+</span>
                </div>
                <p className='title-counter fw-5 text-white text-center'>
                  Development Staff
                </p>
              </div>
            </div>
          </div>

          <div className='col-6 col-lg-4 col-xxl-2 mb-4'>
            <div className='counter-item style-2 style-bg-surface px-3 py-5 rounded-4 overflow-hidden h-100 d-flex align-items-center justify-content-center'>
              <div className='counter text-center'>
                <div className='number-counter flex justify-content-center align-items-center fs-65 fw-7 mb-1'>
                  <span className='number color-primary' data-to='24/7' data-inviewport='yes'>
                    24/7
                  </span>
                </div>
                <p className='title-counter fw-5 text-black text-center'>
                  Support
                </p>
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
                <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                  <div className='big-text'>AWS Experts <span className='text-stroke'>Vibe Code</span> Agentic AI Makers <span className='text-stroke'>Gen AI</span> DevOps Specialist <span className='text-stroke'>Dedicated Developers</span>&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
          <div className='tf-container'>
            <div className='about-inner flex g-30'>
              <div className='left'>

                <div className='wg-curve-img'>
                  <Image
                    src='/image/page-title/rotate-text.svg'
                    alt=''
                    width={300}
                    height={300}
                    className='rotating-image'
                    style={{
                      animation: 'rotate 40s linear infinite'
                    }}
                  />
                </div>

                <div className='wg-curve-text d-none'>
                  <div className='icon'>
                    <i className='icon-arrow-up'></i>
                  </div>
                  <div className='text-rotate'>
                    <svg
                      viewBox='0 0 240 240'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      preserveAspectRatio='xMidYMid meet'
                    >
                      <defs>
                        <path
                          id='textPathCircle'
                          d='M 20,120 A 100,100 0 1,1 220,120 A 100,100 0 1,1 20,120'
                          pathLength='1000'
                          fill='none'
                        />
                      </defs>
                      {/* Three evenly spaced phrases around the circle */}
                      <text>
                        <textPath xlinkHref='#textPathCircle' href='#textPathCircle' startOffset='0%'>
                          {`\u00A0•\u00A0Explore\u00A0•\u00A0Examine\u00A0•\u00A0Execute\u00A0•\u00A0Excel\u00A0•\u00A0Explore\u00A0•\u00A0Examine\u00A0•\u00A0Execute\u00A0•\u00A0Excel\u00A0•\u00A0Explore\u00A0•\u00A0Examine\u00A0•\u00A0Execute\u00A0•\u00A0Excel\u00A0•`}
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='heading-section mb-30'>
                  <div className='sub-title body-2 fw-7 mb-17'>
                    <span className='text-primary'>Inheritx</span> Solutions
                  </div>
                  <h1 className='title fw-6'>
                    Because we deliver
                    <span className='fw-3'>
                      &nbsp;the&nbsp;best solutions to stay&nbsp;ahead
                    </span>
                  </h1>
                </div>
                <div className='section-content'>
                  <div className='desc mb-40'>
                    <p className='clearfix'>
                      At Inheritx, customer service is more than just a promise — it’s our core value. Since our inception in 2011, we have consistently made quality a habit, delivering best-in-class web, mobile, and AI-powered solutions to our global clientele. Our strong team of experienced professionals can handle projects of any size or scale, offering innovative IT and AI-driven solutions within committed timelines. We thrive on helping businesses grow by providing futuristic, feature-rich, and intelligent solutions in web development, mobile app development, and AI integration.
                    </p>
                    <p className='lh-30 pt-4'>
                      At InheritX Solutions, we follow a client-first approach, ensuring transparency and excellent results. Our 97% client retention ratio reflects our dedication to building and maintaining lasting relationships. From 24/7 technical assistance and agile methodology to cutting-edge AI adoption, we consistently ensure project safety and deliver solutions that keep your business ahead of the curve.</p>
                  </div>
                  <div>
                    <Link
                      href='/about-us'
                      className='tf-btn no-bg text-underline'
                    >
                      <span>Learn More About Us</span>
                      <i className='icon-arrow-right'></i>
                    </Link>
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
                strokeWidth='130'
              />
              <defs>
                <linearGradient
                  id='a2'
                  x1='154'
                  x2='497.875'
                  y1='61.688'
                  y2='589.75'
                >
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container w-1810'>
            <div className='section-counting-inner flex'>
              <div className='left rounded-4 overflow-hidden'>
                <div className='image tf-animate-1 rounded-4 overflow-hidden' style={{ minHeight: '550px' }}>
                  <Image
                    src='/image/page-title/company-2.jpg'
                    alt=''
                    className='lazyload'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className='box-avatar tf-animate-3'>
                  <div className='text relative'>
                    <p className='fs-20 fw-6'>
                      600+ Trusted
                      <br />
                      Global Clients
                    </p>
                    <Image
                      src='/image/icon/icon-box-avatar.png'
                      className='lazyload'
                      alt=''
                      width={40}
                      height={10}
                    />
                  </div>
                  <div className='list-agent'>
                    <div className='agent agent-1'>
                      <Image
                        src='/image/home/section-testimonial-1.png'
                        alt=''
                        width={45}
                        height={45}
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-2'>
                      <Image
                        src='/image/home/section-testimonial-2.png'
                        alt=''
                        width={45}
                        height={45}
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-3'>
                      <Image
                        src='/image/home/section-testimonial-3.png'
                        alt=''
                        width={45}
                        height={45}
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
                <div className='heading-section mb-5 mb-xl-5'>
                  <div className='sub-title body-2 fw-7 mb-17'>
                    Explore Our
                    <span className='text-primary'>&nbsp;Achievement</span>
                  </div>
                  <h2 className='title fw-6'>
                    Premier Tech Innovations
                    <span className='fw-3'>&nbsp;Inheritx Software Agency</span>
                  </h2>
                </div>
                <div className='wg-counter flex g-30'>
                  <div className='counter-item style-2 style-bg-primary px-md-15 rounded-4 overflow-hidden'>
                    <div className='icon'>
                      <i className='icon-check'></i>
                    </div>
                    <div className='counter'>
                      <div className='number-counter flex fs-65 fw-7'>
                        <span
                          className='number odometer'
                          data-to='600'
                          data-inviewport='yes'
                        >

                          0
                        </span>
                        <span className='title-counter'>+</span>
                      </div>
                      <p className='title-counter lh-30 fw-5'>
                        Trusted Global Clients
                      </p>
                    </div>
                  </div>

                  <div className='counter-item style-2 style-bg-surface px-md-15 rounded-4 overflow-hidden'>
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

                          0
                        </span>
                        <span className='title-counter'>+</span>
                      </div>
                      <p className='title-counter lh-30 fw-5'>
                        Best Projects Completed
                      </p>
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
              <div className='left-section left-sectionnew pb-1 pt-lg-1'>
                <div className='heading-section mb-5'>
                  <div className='sub-title body-2 fw-7 mb-17'>
                    <span className='text-primary'>Grow&nbsp;</span>&&nbsp;Development
                  </div>
                  <h2 className='title fw-6'>
                    Modern Technology and
                    <span className='fw-3'>&nbsp;Advancement Incentives</span>
                  </h2>
                </div>
                <Accordion />
              </div>
              <div className='right-section w-100'>
                <div className='position-relative image image-section tf-animate-1 rounded-4 overflow-hidden minwidth accordion-section-image'>
                  <Image
                    src='/image/page-title/presentationPm.jpg'
                    alt=''
                    className='lazyload'
                    width={900}
                    height={600}
                    priority={false}
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
                strokeWidth='150'
              />
              <defs>
                <linearGradient id='a3' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='section-top'>
            <div className='tf-marquee'>
              <div className='marquee-wrapper'>
                <div className='initial-child-container'>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                  <div className='big-text'>Explore <span className='text-stroke'>Popular</span> Services&nbsp;</div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-3 mb-xl-5 text-center'>
                  <div className='sub-title body-2 fw-7 mb-17'>
                    Our <span className='text-primary'>Popular</span> Services
                  </div>
                  <h2 className='title fw-6 mb-5'>
                    We Run All Kinds Of IT Services
                    <br />
                    <span className='fw-3'>that vow your success.</span>
                  </h2>
                  <p>
                    We offer end-to-end services in the IT domain, from mobile and web development to AI-driven business solutions.
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
                  <div className='swiper-wrapper cursor-grab'>
                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon' style={{ width: '40px', height: '55px', maxWidth: '40px' }}>
                          <i className='icon-custom-software'></i>
                        </div>
                        <p className='lh-30 fw-6'>
                          <Link
                            href='/services/web-app-development'
                            className='title-service fs-1 text-primary'
                          >
                            Web Development
                          </Link>
                        </p>
                        <div className='desc fs-5' style={{ minHeight: '44px' }}>
                          Robust, reliable, and responsive corporate websites
                        </div>
                        <Link
                          href='/services/web-app-development'
                          className='image rounded-4 overflow-hidden'
                        >
                          <Image
                            src='/image/home/website-dev.jpg'
                            alt=''
                            className='lazyload'
                            fill
                          />
                        </Link>
                        <div className='bottom-item'>
                          <Link
                            href='/services/web-app-development'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon' style={{ width: '40px', height: '55px', maxWidth: '40px' }}>
                          <i className='icon-software-product'></i>
                        </div>
                        <p className='lh-30 fw-6'>
                          <Link
                            href='/services/machine-learning-development'
                            className='title-service fs-1 text-primary'
                          >
                            Artificial Intelligence
                          </Link>
                        </p>
                        <div className='desc fs-5' style={{ minHeight: '44px' }}>
                          Predictive analytics, chatbots, computer vision, and
                          custom LLM integrations.
                        </div>
                        <Link
                          href='/services/machine-learning-development'
                          className='image rounded-4 overflow-hidden'
                        >
                          <Image
                            src='/image/home/artificial-int.jpg'
                            alt=''
                            className='lazyload'
                            fill
                          />
                        </Link>
                        <div className='bottom-item'>
                          <Link
                            href='/services/machine-learning-development'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon' style={{ width: '40px', height: '55px', maxWidth: '40px' }}>
                          <i className='icon icon-mobile-app'>
                            <svg
                              id='Layer_1'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                              data-name='Layer 1'
                              fill='currentColor'
                              style={{ marginTop: '-20px' }}
                            >
                              <path d='m15.437 21.68c-.793 1.432-2.302 2.32-3.937 2.32h-7c-2.481 0-4.5-2.019-4.5-4.5v-15c0-2.481 2.019-4.5 4.5-4.5h7c2.481 0 4.5 2.019 4.5 4.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-3c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93 0-3.5 1.57-3.5 3.5v12.5h8.5c.276 0 .5.224.5.5s-.224.5-.5.5h-8.5v1.5c0 1.93 1.57 3.5 3.5 3.5h7c1.272 0 2.446-.691 3.062-1.805.135-.242.437-.326.68-.195.241.134.329.438.195.68zm-5.937-1.68h-3c-.276 0-.5.224-.5.5s.224.5.5.5h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.5-11c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-1 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm3.64-.987-.233.138c.063.299.094.575.094.85s-.03.551-.095.851l.234.138c.704.393.955 1.367.532 2.053-.394.704-1.365.956-2.054.532l-.223-.131c-.407.34-.881.606-1.396.786v.271c0 .827-.673 1.5-1.5 1.5-1.101 0-1.5-.897-1.5-1.5v-.271c-.515-.18-.988-.446-1.396-.786l-.223.131c-.688.424-1.66.172-2.055-.533-.422-.685-.17-1.659.533-2.053l.233-.138c-.063-.299-.094-.575-.094-.85s.03-.551.095-.851l-.234-.138c-.704-.393-.955-1.367-.532-2.053.394-.703 1.367-.957 2.054-.532l.223.131c.407-.34.881-.606 1.396-.786v-.271c0-.827.673-1.5 1.5-1.5 1.101 0 1.5.897 1.5 1.5v.271c.515.18.988.446 1.396.786l.223-.131c.689-.425 1.659-.171 2.055.533.422.685.17 1.659-.533 2.053zm-1.063-.536.556-.326c.234-.13.318-.456.178-.684-.13-.236-.458-.319-.685-.179l-.54.318c-.197.116-.448.084-.607-.077-.431-.432-.984-.743-1.604-.903-.221-.058-.375-.257-.375-.484v-.642c-.006-.225-.098-.5-.5-.5-.275 0-.5.225-.5.5v.642c0 .228-.154.427-.375.484-.619.16-1.173.472-1.604.903-.159.162-.41.194-.607.077l-.54-.318c-.228-.142-.553-.057-.684.178-.142.229-.058.552.177.684l.557.328c.196.115.289.349.227.567-.103.361-.15.665-.15.955s.048.594.15.955c.062.219-.031.452-.228.568l-.556.326c-.234.13-.318.456-.178.684.13.236.458.32.685.179l.54-.318c.195-.115.446-.085.607.077.431.432.984.743 1.604.903.221.058.375.257.375.484v.642c.006.225.098.5.5.5.275 0 .5-.225.5-.5v-.642c0-.228.154-.427.375-.484.619-.16 1.173-.472 1.604-.903.16-.161.411-.192.607-.077l.54.318c.226.139.554.058.684-.178.142-.229.058-.552-.177-.684l-.557-.328c-.196-.115-.289-.349-.227-.567.103-.361.15-.665.15-.955s-.048-.594-.15-.955c-.062-.219.031-.452.228-.568zm12.37-3.253-3.648 7.296 1.501.808c.885.475 1.359 1.491 1.152 2.473-.336 1.59-1.054 3.192-2.133 4.764-.378.551-1 .86-1.646.86-.347.015-.74-.132-1.064-.26-.316-.12-.561-.357-.691-.669-.131-.313-.128-.673.009-.985.177-.402.319-.778.419-1.178-.827.685-1.62 1.104-2 1.287-.378.181-.813.164-1.163-.039-.701-.408-1.419-.876-2.077-1.352-.437-.316-.717-.806-.768-1.344-.052-.546.136-1.089.513-1.489 1.005-1.066 1.92-2.222 2.647-3.34.657-1.011 1.942-1.346 2.985-.784l1.436.773 3.635-7.269c.124-.246.424-.347.671-.224.247.124.347.424.224.671zm-2.621 8.985-3.818-2.056c-.586-.316-1.303-.121-1.673.448-.77 1.185-1.697 2.355-2.757 3.48-.181.191-.271.45-.246.71.024.255.151.478.358.627.632.457 1.321.906 1.994 1.298.089.052.182.022.229 0 .482-.231 1.714-.894 2.709-2.045.137-.159.359-.214.553-.142.195.073.325.26.325.469 0 1.172-.264 2.012-.658 2.912-.047.122-.018.257.121.318l.365.135c.428.154.91.005 1.167-.367 1.004-1.462 1.67-2.943 1.979-4.404.115-.549-.15-1.118-.646-1.385z' />
                            </svg>
                          </i>
                        </div>
                        <p className='lh-30 fw-6'>
                          <Link
                            href='/services/mobile-app-development'
                            className='title-service fs-1 text-primary'
                          >
                            Mobile App Development
                          </Link>
                        </p>
                        <div className='desc fs-5' style={{ minHeight: '44px' }}>
                          Feature-rich apps delivering seamless performance and
                          smooth, reliable functionality.
                        </div>
                        <Link
                          href='/services/mobile-app-development'
                          className='image rounded-4 overflow-hidden'
                        >
                          <Image
                            src='/image/home/mobile-dev.jpg'
                            alt=''
                            className='lazyload'
                            fill
                          />
                        </Link>
                        <div className='bottom-item'>
                          <Link
                            href='/services/mobile-app-development'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon' style={{ width: '40px', height: '55px', maxWidth: '40px' }}>
                          <i className='icon icon-mobile-app'>
                            <svg
                              id='Layer_1'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                              data-name='Layer 1'
                              fill='currentColor'
                              style={{ marginTop: '-20px' }}
                            >
                              <path d='m4.5 13c-1.671 0-4.5.369-4.5 1.75v7.583c0 1.315 2.829 1.667 4.5 1.667s4.5-.351 4.5-1.667v-7.583c0-1.381-2.829-1.75-4.5-1.75zm3.508 6.782c-.133.214-1.314.718-3.508.718-2.151 0-3.33-.484-3.5-.705v-1.349c.976.419 2.461.555 3.5.555s2.53-.137 3.506-.557l.002 1.339zm-.004-2.496c-.143.216-1.321.714-3.504.714-2.151 0-3.33-.484-3.5-.705v-1.377c.976.44 2.461.582 3.5.582s2.526-.143 3.502-.583zm-3.504-3.286c2.216 0 3.405.558 3.505.721-.1.222-1.289.779-3.505.779-2.123 0-3.304-.512-3.486-.75.183-.238 1.363-.75 3.486-.75zm0 9c-2.205 0-3.389-.509-3.5-.667v-1.388c.976.419 2.461.555 3.5.555s2.534-.137 3.51-.558l.002 1.337c-.123.212-1.307.722-3.512.722zm8.5-13c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm10.5-3h-12c-.276 0-.5.224-.5.5v3c0 1.378 1.121 2.5 2.5 2.5h8c1.379 0 2.5-1.122 2.5-2.5v-3c0-.276-.224-.5-.5-.5zm-.5 3.5c0 .827-.673 1.5-1.5 1.5h-8c-.827 0-1.5-.673-1.5-1.5v-2.5h11zm-6-.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5zm-2-7c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm6.5-3h-8c-1.379 0-2.5 1.122-2.5 2.5v3c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-3c0-1.378-1.121-2.5-2.5-2.5zm1.5 5h-11v-2.5c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5zm-2-2c0 .276-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5zm-12-.5c0 .276-.224.5-.5.5h-2c-1.379 0-2.5 1.122-2.5 2.5v3.199l2.154-2.06c.199-.191.516-.183.707.016.19.2.184.516-.016.707l-2.32 2.218c-.268.268-.635.42-1.025.42s-.758-.152-1.033-.428l-2.313-2.211c-.199-.191-.206-.507-.016-.707.189-.199.508-.207.707-.016l2.154 2.06v-3.198c0-1.93 1.57-3.5 3.5-3.5h2c.276 0 .5.224.5.5zm11 13v2c0 1.93-1.57 3.5-3.5 3.5h-3.199l2.061 2.154c.19.2.184.516-.016.707-.199.191-.516.184-.707-.016l-2.219-2.32c-.562-.562-.562-1.49.008-2.06l2.211-2.312c.192-.198.508-.206.707-.016.199.191.206.507.016.707l-2.06 2.154h3.199c1.379 0 2.5-1.122 2.5-2.5v-2c0-.276.224-.5.5-.5s.5.224.5.5z' />
                            </svg>
                          </i>
                        </div>
                        <p className='lh-30 fw-6'>
                          <Link
                            href='/services'
                            className='title-service fs-1 text-primary'
                          >
                            DevOps
                          </Link>
                        </p>
                        <div className='desc fs-5' style={{ minHeight: '44px' }}>
                          Customized solutions by integrating technological
                          advancements
                        </div>
                        <Link
                          href='/services'
                          className='image rounded-4 overflow-hidden'
                        >
                          <Image
                            src='/image/home/services-3.jpg'
                            alt=''
                            className='lazyload'
                            fill
                          />
                        </Link>
                        <div className='bottom-item'>
                          <Link
                            href='/services'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <div className='icon' style={{ width: '40px', height: '55px', maxWidth: '40px' }}>
                          <i className='icon icon-mobile-app'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              id='Layer_1'
                              data-name='Layer 1'
                              viewBox='0 0 24 24'
                              fill='currentColor'
                              style={{ marginTop: '-20px' }}
                            >
                              <path d='M14,17h-4c-.827,0-1.5,.673-1.5,1.5v3.5h3v1h-1.5v1h4v-1h-1.5v-1h3v-3.5c0-.827-.673-1.5-1.5-1.5Zm.5,4h-5v-2.5c0-.276,.225-.5,.5-.5h4c.275,0,.5,.224,.5,.5v2.5Zm9.5,1v-3.5c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5,.673-1.5,1.5v3.5h3v1h-1.5v1h4v-1h-1.5v-1h3Zm-6-3.5c0-.276,.225-.5,.5-.5h4c.275,0,.5,.224,.5,.5v2.5h-5v-2.5ZM4,13h7.5v2h1v-2h7.5v2h1v-3H12.5v-2h2c1.93,0,3.5-1.57,3.5-3.5,0-1.382-.822-2.625-2.076-3.184-.327-1.912-1.963-3.316-3.924-3.316-2.206,0-4,1.794-4,4,0,.195,.017,.391,.053,.596-1.189,.307-2.053,1.378-2.053,2.654,0,1.517,1.233,2.75,2.75,2.75h2.75v2H3v3h1v-2Zm4.75-4c-.965,0-1.75-.785-1.75-1.75,0-.941,.739-1.706,1.684-1.742l.646-.024-.187-.619c-.098-.327-.144-.602-.144-.865,0-1.654,1.346-3,3-3,1.547,0,2.823,1.169,2.969,2.72l.03,.321,.306,.105c1.014,.347,1.695,1.293,1.695,2.354,0,1.378-1.121,2.5-2.5,2.5h-5.75Zm-3.25,8H1.5c-.827,0-1.5,.673-1.5,1.5v3.5H3v1H1.5v1H5.5v-1h-1.5v-1h3v-3.5c0-.827-.673-1.5-1.5-1.5Zm.5,4H1v-2.5c0-.276,.225-.5,.5-.5H5.5c.275,0,.5,.224,.5,.5v2.5Z' />
                            </svg>
                          </i>
                        </div>
                        <p className='lh-30 fw-6'>
                          <Link
                            href='/services/google-cloud-services'
                            className='title-service fs-1 text-primary'
                          >
                            Cloud Computing
                          </Link>
                        </p>
                        <div className='desc fs-5' style={{ minHeight: '44px' }}>
                          Secure and Scalable Cloud-based Apps for Business
                        </div>
                        <Link
                          href='/services/google-cloud-services'
                          className='image rounded-4 overflow-hidden'
                        >
                          <Image
                            src='/image/home/services-5.jpg'
                            alt=''
                            className='lazyload'
                            fill
                          />
                        </Link>
                        <div className='bottom-item'>
                          <Link
                            href='/services/google-cloud-services'
                            className='tf-btn-readmore'
                          >
                            <span className='plus'>+</span>
                            <span className='text'>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-services sw-pagination d-xl-none mt-15 pt-5 justify-content-center'></div>
              </div>
            </div>
          </div>
        </section>



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
                strokeWidth='130'
              />
              <defs>
                <linearGradient
                  id='a8'
                  x1='154'
                  x2='497.875'
                  y1='61.688'
                  y2='589.75'
                >
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='heading-section container pb-1 pb-lg-5'>
                  <div className='sub-title body-2 fs-1 fw-7 mb-17 text-center mb-5'>
                    Our <span className='text-primary'>Team</span>
                  </div>
                  <h2 className='title fw-6 mb-4'>
                    People who guide us and lead InheritX Solutions toward <span className='fw-3 text-primary'>excellence</span> with their <span className='fw-3 text-primary'>unique</span> vision
                  </h2>
                  <p className='lh-30 fs-2 mb-lg-5'>
                    They don’t just lead—they empower, mentor, and transform ideas into impact.
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
              <div className='col-12 col-xl-10 offset-xl-1'>
                <div
                  className='swiper tf-swiper sw-team sw-border'
                  style={{ cursor: 'grab' }}
                  data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 20,
                                "speed": 800,
                                "allowTouchMove": true,
                                "grabCursor": true,
                                "simulateTouch": true,
                                "pagination": { 
                                    "el": ".sw-pagination-team", 
                                    "clickable": true,
                                    "dynamicBullets": true,
                                    "dynamicMainBullets": 3
                                },
                                "navigation": {
                                    "clickable": true,
                                    "nextEl": ".team-next",
                                    "prevEl": ".team-prev"
                                },  
                                "breakpoints": {
                                    "450": { 
                                        "slidesPerView": 2, 
                                        "slidesPerGroup": 2,
                                        "pagination": { 
                                            "el": ".sw-pagination-team", 
                                            "clickable": true,
                                            "dynamicBullets": true,
                                            "dynamicMainBullets": 2
                                        }
                                    },
                                    "575": { 
                                        "slidesPerView": 3, 
                                        "slidesPerGroup": 1,
                                        "pagination": { 
                                            "el": ".sw-pagination-team", 
                                            "clickable": true,
                                            "dynamicBullets": true,
                                            "dynamicMainBullets": 2
                                        }
                                    },
                                    "1200": { 
                                        "slidesPerView": 4, 
                                        "slidesPerGroup": 1,
                                        "pagination": { 
                                            "el": ".sw-pagination-team", 
                                            "clickable": true,
                                            "dynamicBullets": true,
                                            "dynamicMainBullets": 1
                                        }
                                    }
                                }
                            }'
                >
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='team-item hover-image rounded-4 overflow-hidden'>
                        <div className='top-item'>
                          <div className='image  rounded-4 overflow-hidden'>
                            <Image
                              src='/image/home/ceo-sandip-modi.png'
                              alt=''
                              className='lazyload rounded-4 overflow-hidden'
                              fill
                            />
                          </div>
                        </div>
                        <div className='item-content'>
                          <p className='title'>
                            <span className='fw-6'>Sandip Modi</span>
                          </p>
                          <p className='sub-title fs-4'>CEO</p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='team-item hover-image rounded-4 overflow-hidden'>
                        <div className='top-item'>
                          <div className='image  rounded-4 overflow-hidden'>
                            <Image
                              src='/image/home/aiyub_munshi_profile.jpg'
                              alt=''
                              className='lazyload rounded-4 overflow-hidden'
                              fill
                            />
                          </div>
                        </div>
                        <div className='item-content'>
                          <p className='title'>
                            <span className='fw-6'>Aiyub Munshi</span>
                          </p>
                          <p className='sub-title fs-4'>Project Manager</p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='team-item hover-image rounded-4 overflow-hidden'>
                        <div className='top-item'>
                          <div className='image  rounded-4 overflow-hidden'>
                            <Image
                              src='/image/home/krishHinduja.jpg'
                              alt=''
                              className='lazyload rounded-4 overflow-hidden'
                              fill
                            />
                          </div>
                        </div>
                        <div className='item-content'>
                          <p className='title'>
                            <span className='fw-6'>Krish Hinduja</span>
                          </p>
                          <p className='sub-title fs-4'>Sales Head</p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='team-item hover-image rounded-4 overflow-hidden'>
                        <div className='top-item'>
                          <div className='image  rounded-4 overflow-hidden'>
                            <Image
                              src='/image/home/HrManager.jpg'
                              alt=''
                              className='lazyload rounded-4 overflow-hidden'
                              fill
                            />
                          </div>
                        </div>
                        <div className='item-content'>
                          <p className='title'>
                            <span className='fw-6'>Meera Tank</span>
                          </p>
                          <p className='sub-title fs-4'>HR Head</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-team sw-pagination mt-15 pt-5 justify-content-center'></div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialSection />

        <section className='section-form tf-spacing-4 tf-container'>
          <div className='section-inner row'>
            <div className='col-lg-6 mb-5 mb-lg-0'>
              <div className='w-100 h-100 rounded-4 overflow-hidden position-relative'>

                <div className='position-relative rounded-4 overflow-hidden image tf-animate-1' style={{ minHeight: '550px' }}>
                  <Image
                    src='/image/page-title/image-9.jpg'
                    alt=''
                    className='lazyload rounded-4'
                    fill
                  />
                </div>

                <div className='section-content section-form-content tf-animate-2'>
                  <div className='sub-title body-2 fw-7 mb-3'>Work Inquiry</div>
                  <h2 className='title fw-6 mb-3'>
                    Let's work on your next projects.
                  </h2>
                </div>

              </div>

            </div>
            <div className='col-lg-6 no-padding-important'>
              <ContactForm className='form-contact-us px-md-15 rounded-4 overflow-hidden' description={'We are ready to help with your next projects. Let\u2019s work together.'} />
            </div>
          </div>
        </section>

        <OurPartners />

        {/* Blog teaser section removed as requested */}

        <OurValuableClients />

        <div
          className='wg-cta tf-spacing-2 alert alert-dismissible fade show mb-0'
          role='alert'
        >
          <div className='tf-container'>
            <div className='cta-inner flex align-items-center justify-content-center'>
              <div className='left flex align-items-center'>
                <div className='icon'>
                  <i className='icon-chat-2'></i>
                </div>
                <h5 className='fw-4 title'>
                  Let’s discuss your app idea and implement an innovative mobility solution for your business needs.
                </h5>
                <a
                  href='/contact'
                  className='tf-btn no-bg text-underline hover-color-main-dark'
                >
                  <span>Let's Talk</span>
                  <i className='icon-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
