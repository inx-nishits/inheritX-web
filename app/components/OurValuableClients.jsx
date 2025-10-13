'use client';

import Image from 'next/image';
import { clientsData, clientsConfig } from '../data/clientsData';

const OurValuableClients = ({ 
  title = clientsConfig.title, 
  subtitle = clientsConfig.subtitle,
  clients = clientsData,
  className = ""
}) => {
  // Duplicate clients array for seamless marquee effect
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className={`section-about tf-spacing-2 ${className}`}>
      <div className='tf-container text-center mb-5'>
        <h2 className='title fw-6 mb-5'>
          {title.split(' ').map((word, index) => 
            word.toLowerCase() === 'clients' ? (
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
          <div className='marquee-wrapper logos-marquee-wrapper'>
            <div className='initial-child-container'>
              {duplicatedClients.map((client, index) => (
                <div key={index} className='big-text fs-initial'>
                  <div className='image left d-block'>
                    <Image
                      src={client.src}
                      alt={client.alt}
                      className='lazyload bg-white p-3 rounded-4 overflow-hidden'
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

export default OurValuableClients;
