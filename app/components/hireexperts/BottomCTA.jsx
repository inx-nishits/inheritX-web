'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamicImport from 'next/dynamic';

const ContactForm = dynamicImport(() => import('../ContactForm'), { ssr: false });

export default function BottomCTA({
  title,
  techName = "",
  subtitle = "Transform your vision into reality with our expert team. Let's discuss your project requirements today.",
  buttonText = "INQUIRE NOW",
  href = "/contact"
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal and handle body scroll lock
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='wg-cta-modern tf-spacing-3 mb-0'>
      <div className='tf-container'>
        <div
          className='cta-wrapper rounded-5 p-4 p-md-5 position-relative overflow-hidden'
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div
            className='position-absolute'
            style={{
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 190, 212, 0.12) 0%, rgba(0, 190, 212, 0) 70%)',
              top: '-200px',
              right: '-100px',
              zIndex: 0
            }}
          />
          <div
            className='position-absolute'
            style={{
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(84, 110, 164, 0.12) 0%, rgba(84, 110, 164, 0) 70%)',
              bottom: '-150px',
              left: '-50px',
              zIndex: 0
            }}
          />

          <div className='d-flex flex-wrap flex-lg-nowrap align-items-center position-relative' style={{ zIndex: 1, gap: '2rem' }}>
            <div className='flex-grow-1 text-center text-lg-start'>
              <h2 className='text-white fw-900 mb-3' style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', lineHeight: '1.1' }}>
                {title}
              </h2>
              <p className='text-white fw-6 mb-0' style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', letterSpacing: '0.01em', lineHeight: '1.4' }}>
                {subtitle}
              </p>
            </div>
            <div className='flex-shrink-0 mx-auto mx-lg-0 text-center text-lg-end'>
              <Link
                href={href}
                className='tf-btn cta-btn-prominent'
                onClick={openModal}
              >
                <span className='text-uppercase' style={{ color: '#000000' }}>{buttonText}</span>
                <i className='icon-arrow-right' style={{ color: '#000000' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay with Fix for Scrolling */}
      <div
        className={`cta-modal-overlay ${isModalOpen ? 'open' : ''}`}
        onClick={closeModal}
      >
        <div
          className='cta-modal-inner'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='cta-modal-container'>
            <button
              className='cta-modal-close'
              onClick={closeModal}
              aria-label="Close modal"
            >
              <i className='icon-close'></i>
            </button>

            <div className='modal-scroll-body'>
              <div className='modal-form-content'>
                <ContactForm
                  id="cta-contact-form"
                  className='form-contact-us px-md-15'
                  title={techName
                    ? (techName.toLowerCase().includes('expert') || techName.toLowerCase().includes('engineer')
                      ? `Consult Our ${techName}`
                      : `Consult Our ${techName} Experts`)
                    : "Reliable Solutions for Your Project Needs"}
                  description={techName
                    ? `Ready to scale your team? Share your ${techName} project requirements with us and let's get started.`
                    : "We’re Here to Support Your Next Big Project — Let’s Team Up!"}
                  section="bottom_cta_modal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
