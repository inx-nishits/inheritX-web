'use client';

import { useEffect, useRef } from 'react';

export const useCounterFix = () => {
  const observersRef = useRef([]);
  const initializedRef = useRef(false);

  useEffect(() => {
    const initializeCounters = () => {
      // Check if we're in the browser
      if (typeof window === 'undefined') return;
      // Disable counters on mobile to improve performance
      const isMobileViewport = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
      if (isMobileViewport) return;

      // Clear existing observers
      observersRef.current.forEach(observer => observer.disconnect());
      observersRef.current = [];

      const initCounters = () => {
        // Look for all counter elements
        const counterElements = document.querySelectorAll('.odometer[data-to], .number-counter .number.odometer[data-to]');
        
        counterElements.forEach((element) => {
          // Skip if already initialized
          if (element.classList.contains('odometer-initialized')) return;
          
          const targetValue = element.getAttribute('data-to');
          if (!targetValue) return;

          // Mark as initialized
          element.classList.add('odometer-initialized');
          
          // Create intersection observer for this element
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // Initialize counter
                  initializeCounterElement(element, parseInt(targetValue));
                  observer.unobserve(element);
                }
              });
            },
            { threshold: 0.5 }
          );

          observer.observe(element);
          observersRef.current.push(observer);
        });
      };

      // Initialize immediately if DOM is ready, otherwise wait
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCounters);
      } else {
        // Small delay to ensure DOM is fully rendered
        setTimeout(initCounters, 100);
      }

      // Cleanup function
      return () => {
        document.removeEventListener('DOMContentLoaded', initCounters);
        observersRef.current.forEach(observer => observer.disconnect());
        observersRef.current = [];
      };
    };

    // Initialize counters
    initializeCounters();

    // Cleanup on unmount
    return () => {
      observersRef.current.forEach(observer => observer.disconnect());
      observersRef.current = [];
    };
  }, []);

  // Function to initialize counter element
  const initializeCounterElement = (element, targetValue) => {
    // Check if Odometer library is available and element has odometer class
    if (typeof window !== 'undefined' && window.Odometer && element.classList.contains('odometer')) {
      try {
        // Use the Odometer library
        const odometer = new window.Odometer({
          el: element,
          value: 0,
          format: '(,ddd)',
          theme: 'default'
        });
        
        // Animate to target value
        setTimeout(() => {
          odometer.update(targetValue);
        }, 100);
      } catch (error) {
        console.warn('Odometer library error, falling back to custom animation:', error);
        // Fallback to custom animation
        animateCounter(element, targetValue);
      }
    } else {
      // Fallback to custom animation
      animateCounter(element, targetValue);
    }
  };

  // Function to animate counter (fallback)
  const animateCounter = (element, targetValue) => {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      element.textContent = currentValue;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = targetValue;
      }
    };

    requestAnimationFrame(animate);
  };

  return { observersRef };
};
