import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function HeroHome () {
  const heroRef = useRef(null)

  return (
    <div className='page-title-home' ref={heroRef}>
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
            strokeWidth='150'
          />
          <defs>
            <linearGradient id='a' x1='176' x2='569' y1='70.5' y2='674'>
              <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
              <stop offset='1' stopColor='#fff' stopOpacity='0' />
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
      <div className='tf-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='top-page-title'>
              <div className='sub-title body-2 fw-5 split-text effect-right'>
                Welcome to Tekko Software
              </div>
              <h1 className='title fw-6 lh-85 split-text effect-right'>
                NextGen Software Innovators
                <br />
                <span className='fw-3'>
                  and{' '}
                  <span className='highlight text-uppercase'>Digital Soft</span>{' '}
                  Solutions
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className='row justify-content-between rg-70'>
          <div className='col-xl-4'>
            <div className='content-left'>
              <div className='desc'>
                <p className='fs-20 lh-40'>
                  We specialize in delivering comprehensive software solutions
                  tailored meet the unique businesses across various industries
                </p>
              </div>
              <div className='wg-counter flex align-items-center justify-content-between'>
                <div className='counter-item'>
                  <div className='counter'>
                    <div className='number-counter flex fs-65 fw-6'>
                      <span className='number color-primary'>5</span>
                      <span className='color-primary'>k+</span>
                    </div>
                    <p className='title-counter body-2 lh-30'>Happy Clients</p>
                  </div>
                </div>
                <div className='counter-item'>
                  <div className='counter'>
                    <div className='number-counter flex fs-65 fw-6'>
                      <span className='number color-primary'>9</span>
                      <span className='color-primary'>+</span>
                    </div>
                    <p className='title-counter body-2 lh-30'>
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
              <Link href='/services' className='tf-btn'>
                <span>Explore Our Services</span>
                <i className='icon-arrow-right' />
              </Link>
            </div>
          </div>
          <div className='col-xl-7'>
            <div className='image tf-animate-1'>
              <img src='/image/page-title/img-page-title.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
