'use client';
import { useState, useEffect } from 'react';
import dynamicImport from 'next/dynamic';

const ContactForm = dynamicImport(() => import('../ContactForm'), { ssr: false });

export default function StickyLeadBar({ techName = "Expert" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStaticBeltVisible, setIsStaticBeltVisible] = useState(false);

  useEffect(() => {
    // Hide floating bar when the real cta belt is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStaticBeltVisible(entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: '100px 0px 0px 0px' // slightly preemptive hide
      }
    );

    const staticBelt = document.querySelector('.wg-cta-modern');
    if (staticBelt) {
      observer.observe(staticBelt);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      
      // Basic distance threshold (show earlier, after 150px)
      const isPastThreshold = scrollY > 150;
      // Also hide if we've reached the very bottom of the page
      const isAtBottom = (scrollY + windowHeight) > (bodyHeight - 100);
      
      if (isPastThreshold && !isStaticBeltVisible && !isAtBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (staticBelt) {
        observer.unobserve(staticBelt);
      }
      document.body.style.overflow = 'auto';
    };
  }, [isStaticBeltVisible]);

  const openModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* 
          1. belt is hidden when modal is open (isModalOpen ? false : isVisible)
          2. extremely high z-index to stay above "Back to Top" (9999999)
      */}
      <div 
        className={`sticky-lead-bar ${isVisible && !isModalOpen ? 'visible' : ''}`}
        style={{
          position: 'fixed',
          bottom: (isVisible && !isModalOpen) ? '25px' : '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(92%, 1150px)',
          background: 'rgba(15, 23, 42, 0.98)', // Higher opacity for absolute focus
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '100px',
          padding: '10px 30px',
          zIndex: 2147483647, // Maximum possible z-index to overwrite everything including B2T button
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6), 0 0 100px rgba(0, 0, 0, 0.3)',
          opacity: (isVisible && !isModalOpen) ? 1 : 0,
          pointerEvents: (isVisible && !isModalOpen) ? 'auto' : 'none'
        }}
      >
        <div className="bar-content d-flex align-items-center gap-3">
          <div 
            className="d-none d-md-flex align-items-center justify-content-center rounded-circle"
            style={{ 
              width: '42px', 
              height: '42px', 
              background: 'linear-gradient(135deg, #00bed4 0%, #0052cc 100%)',
              boxShadow: '0 0 15px rgba(0, 190, 212, 0.4)'
            }}
          >
            <i className="icon-chat text-white fs-4"></i>
          </div>
          <div className="text-container">
            <h4 className="text-white fw-700 m-0 fs-3 d-none d-sm-block">
              Interested in hiring {techName}?
            </h4>
            <h4 className="text-white fw-700 m-0 fs-2 d-sm-none">
              Inquire for {techName}
            </h4>
            <p className="text-white-50 m-0 d-none d-lg-block" style={{ opacity: 0.8, fontSize: '12px' }}>
              Connect with our solution architects for a free technical proposal.
            </p>
          </div>
        </div>

        <button 
          onClick={openModal}
          className="custom-sticky-btn-final py-0 px-4 rounded-pill d-flex align-items-center justify-content-center"
          style={{ 
            height: '46px',
            fontSize: '13px',
            fontWeight: '800',
            background: '#ffffff',
            color: '#000000 !important',
            border: 'none',
            whiteSpace: 'nowrap',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
        >
          <span style={{ color: '#000000', marginRight: '8px' }}>INQUIRE NOW</span>
          <i className="icon-arrow-right" style={{ color: '#000000', fontSize: '11px', fontWeight: 'bold' }}></i>
        </button>

        <style jsx>{`
          .custom-sticky-btn-final {
            color: #000000 !important;
          }
          .custom-sticky-btn-final:hover {
            transform: scale(1.05);
            background: var(--primary, #00bed4) !important;
            box-shadow: 0 5px 15px rgba(0, 190, 212, 0.3) !important;
          }
          .custom-sticky-btn-final:hover span, 
          .custom-sticky-btn-final:hover i {
            color: #ffffff !important;
          }
          
          @media (max-width: 767px) {
            .sticky-lead-bar {
              padding: 10px 18px !important;
              border-radius: 12px !important;
              bottom: 12px !important;
              width: 95% !important;
            }
            .text-container h4 {
              font-size: 14px !important;
            }
            .custom-sticky-btn-final {
              padding: 0 15px !important;
              height: 38px !important;
              font-size: 11px !important;
            }
          }
        `}</style>
      </div>

      {/* Modal Reused from globals.css - ensured it has absolute top priority */}
      <div
        className={`cta-modal-overlay ${isModalOpen ? 'open' : ''}`}
        onClick={closeModal}
        style={{
           zIndex: 2147483647 // Match highest possible priority to hide body content effectively
        }}
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
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                zIndex: 100,
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <i className='icon-close' style={{ fontSize: '12px', color: '#000' }}></i>
            </button>

            <div className='modal-scroll-body'>
              <div className='modal-form-content'>
                <ContactForm
                  id="sticky-lead-form-high-z"
                  className='form-contact-us px-md-15'
                  title={`Hire Dedicated ${techName} Experts`}
                  description={`Get a technical proposal for your ${techName} requirements today.`}
                  section="sticky_lead_bar_high_z"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
