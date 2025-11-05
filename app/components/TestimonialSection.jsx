'use client';
import Link from 'next/link';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    text: "Overall, I was very satisfied with InheritX. They are hard-working, very reliable, and very flexible. I would highly recommend the INX team for any development work.",
    name: "Edward",
    position: "CEO"
  },
  {
    id: 2,
    text: "InheritX is very professional and articulate in their approach to this project. The most impressive thing is the input and intelligent contributions they have made to the design of the app.",
    name: "Badri",
    position: "Manager"
  },
  {
    id: 3,
    text: "InheritX has proven themselves to be dependable, with solid problem-solving and technical skills. They are persistent, reliable, flexible, and responsive.",
    name: "Saady",
    position: "Developer"
  },
  {
    id: 4,
    text: "InheritX has done a fabulous job. We want to continue using them in the future and recommend them to all developers looking for professional, high-quality work.",
    name: "Simon",
    position: "Developer"
  },
  {
    id: 5,
    text: "The team has been fantastic. I have been working with them for nearly two years now and have not been able to find a fault in their performance or attitude. They are extremely professional and polite.",
    name: "Dorain",
    position: "Developer"
  }
];

const testimonialImages = [
  '/image/home/section-testimonial-1.png',
  '/image/home/section-testimonial-2.png',
  '/image/home/section-testimonial-4.png',
  '/image/home/section-testimonial-3.png'
];

export default function TestimonialSection() {
  return (
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
            <div className='heading-section mb-3 mb-xl-5'>
              <div className='sub-title body-2 fw-7 mb-17'>
                Clients Feedback
              </div>
              <h2 className='title fw-6'>
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
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className='swiper-slide'>
                    <div className='testimonial-item'>
                      <div className='icon'>
                        <i className='icon-quote2'></i>
                      </div>
                      <div className='text fs-20 lh-35'>
                        {testimonial.text}
                      </div>
                      <div className='user-testimonial'>
                        <span className='name-user body-2'>
                          {testimonial.name}
                        </span>
                        <span className='position text-medium'>
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
                {testimonialImages.map((imageSrc, index) => (
                  <div key={index} className="col-6 mb-3 d-flex justify-content-center align-items-center">
                    <Image
                      src={imageSrc}
                      alt={`Testimonial ${index + 1}`}
                      className='img-fluid lazyload'
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
