'use client';

import Image from 'next/image';
import { partnersData, partnersConfig } from '../data/partnersData';

const OurPartners = ({ 
  title = partnersConfig.title, 
  subtitle = partnersConfig.subtitle,
  partners = partnersData,
  className = ""
}) => {
  // Duplicate partners array for seamless marquee effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className={`section-about tf-spacing-2 ${className}`}>
      <div className='tf-container text-center mb-5'>
        <h2 className='title fw-6 mb-4'>
          {title.split(' ').map((word, index) => 
            word.toLowerCase() === 'partners' ? (
              <span key={index} className='text-primary'> {word}</span>
            ) : (
              <span key={index}> {word}</span>
            )
          )}
        </h2>
        <p className='fs-2'>
          {subtitle}
        </p>
      </div>

      <div className='about-top'>
        <div className='tf-marquee'>
          <div className='marquee-wrapper logos-marquee-wrapper partners-marquee-wrapper'>
            <div className='initial-child-container'>
              {duplicatedPartners.map((partner, index) => (
                <div key={index} className='big-text fs-initial'>
                  <div className='image left d-block'>
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      className='lazyload bg-white p-2 overflow-hidden'
                      height={100}
                      width={150}
                      style={{
                        width: '150px',
                        height: '100px',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
