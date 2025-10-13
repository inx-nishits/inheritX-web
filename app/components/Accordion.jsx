'use client';

import { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ id, title, children, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className='according-item'>
      <div className='fw-5'>
        <a
          href={`#${id}`}
          className={`title-according ${isOpen ? 'active' : 'collapsed'}`}
          onClick={(e) => {
            e.preventDefault();
            onToggle(id);
          }}
        >
          {title}<span></span>
        </a>
      </div>
      <div
        id={id}
        className={`collapse ${isOpen ? 'show' : ''}`}
        data-bs-parent='#According1'
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
          transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
        }}
      >
        <div ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Accordion() {
  const [activeItem, setActiveItem] = useState('according1');

  const handleToggle = (id) => {
    if (activeItem === id) {
      // If clicking the same item, close it
      setActiveItem(null);
    } else {
      // Open the clicked item
      setActiveItem(id);
    }
  };

  return (
    <div className='wg-according' id='According1'>
      <AccordionItem
        id='according1'
        title='Learn Our Company Mission'
        isOpen={activeItem === 'according1'}
        onToggle={handleToggle}
      >
        <div className='according-content'>
          
          <div className='right'>
            <div className='desc'>
             Since its inception, InheritX Solutions has set many milestones by offering quality IT solutions and services that are capable of bringing disruptive changes to the corporate world.
            </div>
            <div className='desc mb-0'>
             We are striving to offer superior quality solutions that clients prefer for their customers, employees feel pride in, customers appreciate, and investors choose to get long-term returns.
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        id='according2'
        title='Our Company Vision'
        isOpen={activeItem === 'according2'}
        onToggle={handleToggle}
      >
        <div className='according-content'>
        
          <div className='right'>
            <div className='desc'>
             To be recognized as leaders in quality services and in developing relationships that make a positive difference in our customers' lives.
            </div>
            <div className='desc mb-0'>
             We provide enterprise-grade design and development services to our clients to boost the productivity of their businesses across the world, with a vision to become the most reliable offshore partner.
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        id='according3'
        title='Why Choose Inheritx?'
        isOpen={activeItem === 'according3'}
        onToggle={handleToggle}
      >
        <div className='according-content'>
          <div className='right'>
            <div className='desc lh-30'>
           InheritX Solutions is a leading tablet app development company in India and the USA, specializing in iPad and Android tablet apps. We deliver customized, cost-effective solutions that enhance business value, boost ROI, and meet complex requirements. With on-time delivery and excellent performance, our expert iPad developers build scalable apps for diverse industries.
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        id='according4'
        title='What We Offer?'
        isOpen={activeItem === 'according4'}
        onToggle={handleToggle}
      >
        <div className='according-content'>
              <div className='right'>
            <div className='desc lh-30'>
              InheritX Solutions has an in-house team of
              experienced developers who can handle any size
              project in the domains of web, mobile app, and IoT.
            </div>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
}
