'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LifeAtInheritX() {
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
    if (!isGalleryOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsGalleryOpen(false)
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setActiveIndex((i) => (i + 1) % galleryImages.length)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isGalleryOpen, galleryImages.length])

  // Prevent body scroll when gallery modal is open
  useEffect(() => {
    if (isGalleryOpen) {
      // Simple: only hide body overflow
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isGalleryOpen])

  return (
    <section className='tf-spacing-2'>
      <div className='tf-container'>
        <div className='heading-section mb-3 mb-xl-5 text-center'>
          <h2 className='title fw-6 mb-5'>
            Life <span className='text-primary'>@ InheritX</span>
          </h2>
          <p className='clearfix'>
            Every employee is a valuable asset to us. We nurture their skills and care for their growth.
          </p>
        </div>

        <div className='row g-5'>
          {gridImages.map((src, idx) => (
            <div className='col-6 col-md-4 col-lg-3' key={src + idx}>
              <button
                type='button'
                aria-label='Open image in gallery'
                className='w-100 border-0 p-0 bg-transparent rounded-4 overflow-hidden shadow-sm hover-zoom'
                onClick={() => {
                  const fullIndex = galleryImages.findIndex((s) => s === src)
                  setActiveIndex(fullIndex > -1 ? fullIndex : idx)
                  setIsGalleryOpen(true)
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className='position-relative' style={{ paddingBottom: '75%' }}>
                  <Image src={`${src}?v=${galleryVersion}`} alt='' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw' className='object-fit-cover' priority={idx < 4} quality={90} />
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className='text-center mt-5 pt-2'>
          <div className='mb-4 fw-6'>Follow us for more photos and updates</div>
          <ul className='post-social d-inline-flex align-items-center justify-content-center rg-15 g-20'>
            <li>
              <Link href='https://www.facebook.com/InheritxSolutions/' className='icon-social d-inline-flex align-items-center justify-content-center rounded-circle border' style={{ width: 44, height: 44 }} target='_blank' rel='noopener noreferrer'>
                <i className='icon-fb'></i>
              </Link>
            </li>
            <li>
              <Link href='https://x.com/inheritx' className='icon-social d-inline-flex align-items-center justify-content-center rounded-circle border' style={{ width: 44, height: 44 }} target='_blank' rel='noopener noreferrer'>
                <i className='icon-X'></i>
              </Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/' className='icon-social d-inline-flex align-items-center justify-content-center rounded-circle border' style={{ width: 44, height: 44 }} target='_blank' rel='noopener noreferrer'>
                <i className='icon-linkedin'></i>
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/inheritxsolutions/' className='icon-social d-inline-flex align-items-center justify-content-center rounded-circle border' style={{ width: 44, height: 44 }} target='_blank' rel='noopener noreferrer'>
                <i className='icon-instagram'></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isGalleryOpen && (
        <div
          className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center galleryModal'
          style={{ background: 'rgba(0,0,0,0.85)', zIndex: 1050 }}
          onClick={() => setIsGalleryOpen(false)}
        >
          <div className='position-relative w-100 h-100 d-flex align-items-center justify-content-center' onClick={(e) => e.stopPropagation()}>
            <button
              type='button'
              aria-label='Close gallery'
              className='position-absolute top-0 end-0 m-3 btn btn-light rounded-circle d-inline-flex align-items-center justify-content-center'
              onClick={() => setIsGalleryOpen(false)}
              style={{ width: 36, height: 36, fontSize: 26, lineHeight: 1,border: 0 }}
            >
              ×
            </button>

            <button
              type='button'
              aria-label='Previous image'
              className='position-absolute start-0 ms-3 btn btn-light rounded-circle d-inline-flex align-items-center justify-content-center'
              onClick={() => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
              style={{ width: 36, height: 36, fontSize: 26, lineHeight: 1, zIndex: 2, border: 0 }}
            >
              ‹
            </button>

            <div className='position-relative' style={{ maxWidth: '95vw', maxHeight: '90vh', width: 'auto', height: 'auto' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${galleryImages[activeIndex]}?v=${galleryVersion}`}
                alt='Gallery image'
                className='img-fluid rounded-3 shadow'
                style={{ maxWidth: '95vw', maxHeight: '90vh', objectFit: 'contain' }}
              />
            </div>

            <button
              type='button'
              aria-label='Next image'
              className='position-absolute end-0 me-3 btn btn-light rounded-circle d-inline-flex align-items-center justify-content-center'
              onClick={() => setActiveIndex((i) => (i + 1) % galleryImages.length)}
              style={{ width: 36, height: 36, fontSize: 26, lineHeight: 1, zIndex: 2, border: 0 }}
            >
              ›
            </button>

            <div className='position-absolute bottom-0 start-50 translate-middle-x mb-3 px-3 py-1 bg-dark text-white rounded-pill small'>
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


