'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function ProjectItem({ item, index, currentCategory, detailsBasePath = '/project-details' }) {
  const imageWrapperRef = useRef(null)
  const imageRef = useRef(null)
  const frameRef = useRef(null)
  const animationRunningRef = useRef(false)
  const cachedRectRef = useRef(null)
  const needsRectUpdateRef = useRef(true)
  const lastMouseEventRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollOffset, setScrollOffset] = useState({ y: 0, progress: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Read DOM and update state within a single rAF loop to avoid layout thrash
    const animate = () => {
      if (!imageWrapperRef.current || !imageRef.current) {
        animationRunningRef.current = false
        return
      }
      // Refresh cached rect at most once per frame if flagged
      if (needsRectUpdateRef.current) {
        cachedRectRef.current = imageWrapperRef.current.getBoundingClientRect()
        needsRectUpdateRef.current = false
      }

      const rect = cachedRectRef.current
      if (rect) {
        const windowHeight = window.innerHeight
        const isNearViewport = rect.bottom > -windowHeight * 2 && rect.top < windowHeight * 3
        if (isNearViewport) {
          const elementCenter = rect.top + rect.height / 2
          const viewportCenter = windowHeight / 2
          const scrollProgress = (viewportCenter - elementCenter) / (windowHeight / 2)
          const clampedProgress = Math.max(-1, Math.min(1, scrollProgress))
          // Only set state if values changed meaningfully to reduce reflows
          setScrollOffset(prev => {
            const next = { y: clampedProgress * 50, progress: clampedProgress }
            return (prev.y !== next.y || prev.progress !== next.progress) ? next : prev
          })
        } else {
          setScrollOffset(prev => (prev.y !== 0 || prev.progress !== 0 ? { y: 0, progress: 0 } : prev))
        }
      }

      // Mouse movement easing using last event and cached rect (no reads here)
      if (lastMouseEventRef.current && rect) {
        const e = lastMouseEventRef.current
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = (e.clientX - centerX) / (rect.width / 2)
        const y = (e.clientY - centerY) / (rect.height / 2)
        setMousePosition(prev => {
          const next = {
            x: prev.x + (x - prev.x) * 0.3,
            y: prev.y + (y - prev.y) * 0.3
          }
          return (next.x !== prev.x || next.y !== prev.y) ? next : prev
        })
      }
      
      if (animationRunningRef.current) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    
    // Scroll/resize handlers flag a rect update; actual read happens in rAF
    const handleScroll = () => {
      needsRectUpdateRef.current = true
    }
    const handleResize = () => {
      needsRectUpdateRef.current = true
    }

    // Mouse handlers
    const handleMouseMove = (e) => {
      if (!imageWrapperRef.current) return
      lastMouseEventRef.current = e
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
      needsRectUpdateRef.current = true
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setMousePosition({ x: 0, y: 0 })
      lastMouseEventRef.current = null
    }

    const wrapper = imageWrapperRef.current
    
    // Initialize immediately and wait for refs to be ready
    const initParallax = () => {
      if (wrapper && imageRef.current && !animationRunningRef.current) {
        // Add event listeners
        wrapper.addEventListener('mousemove', handleMouseMove, { passive: true })
        wrapper.addEventListener('mouseenter', handleMouseEnter)
        wrapper.addEventListener('mouseleave', handleMouseLeave)
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleResize, { passive: true })
        
        // Prime rect cache once before starting loop
        needsRectUpdateRef.current = true
        
        // Start animation loop
        animationRunningRef.current = true
        frameRef.current = requestAnimationFrame(animate)
        return true
      }
      return false
    }
    
    // Try immediately, then with timeout as fallback
    let timeoutId
    if (!initParallax()) {
      timeoutId = setTimeout(() => {
        initParallax()
      }, 100)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      animationRunningRef.current = false
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      
      if (wrapper) {
        wrapper.removeEventListener('mousemove', handleMouseMove)
        wrapper.removeEventListener('mouseenter', handleMouseEnter)
        wrapper.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Enhanced 3D transforms with better depth
  const rotateX = mousePosition.y * 8 // Max 8 degrees tilt (more pronounced)
  const rotateY = mousePosition.x * 8 // Max 8 degrees tilt
  const translateX = mousePosition.x * 15 // Horizontal parallax
  const translateY = scrollOffset.y + (mousePosition.y * 15) // Scroll + mouse parallax
  const translateZ = isHovering ? 20 : 0 // Depth on hover
  const scale = isHovering ? 1.03 : 1 // Scale on hover (reduced from 1.08)
  
  // Glow effect based on mouse position
  const glowX = (mousePosition.x * 50) + 50 // 0-100%
  const glowY = (mousePosition.y * 50) + 50 // 0-100%

  return (
    <div className='project-card' style={{ '--stagger': index }}>
      <div className='project-card-inner'>
        {/* Project Image */}
        <div className='project-image-wrapper' ref={imageWrapperRef}>
          {/* Glow effect layer */}
          <div 
            className='project-image-glow'
            style={{
              background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0, 179, 255, ${isHovering ? 0.4 : 0.2}), transparent 70%)`,
              opacity: isHovering ? 1 : 0.6,
              transition: 'opacity 0.4s ease'
            }}
          />
          
          <Link href={`${detailsBasePath}/${item.slug}`} className='project-image-link d-block w-100 h-100' onClick={() => {
            try {
              sessionStorage.setItem('inx_projects_scroll', String(window.scrollY || window.pageYOffset || 0))
              sessionStorage.setItem('inx_restore_projects', '1')
              if (currentCategory) sessionStorage.setItem('inx_projects_category', currentCategory)
            } catch {}
          }}>
            <img 
              ref={imageRef}
              src={item.thumb} 
              alt={item.title} 
              className='project-image'
              style={{
                transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
                transition: isHovering ? 'none' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                filter: isHovering ? `brightness(1.1) contrast(1.05)` : 'brightness(1) contrast(1)'
              }}
            />
            <div className='project-overlay'>
              <div className='project-overlay-content'>
                <i className='icon-eye'></i>
                <span>View Details</span>
              </div>
            </div>
          </Link>
          
        </div>

        {/* Project Content */}
        <div className='project-content'>
          <div className='project-header'>
            <h3 className='project-title'>
              <Link href={`${detailsBasePath}/${item.slug}`} onClick={() => {
                try {
                  sessionStorage.setItem('inx_projects_scroll', String(window.scrollY || window.pageYOffset || 0))
                  sessionStorage.setItem('inx_restore_projects', '1')
                  if (currentCategory) sessionStorage.setItem('inx_projects_category', currentCategory)
                } catch {}
              }}>{item.title}</Link>
            </h3>
            <div className='project-category'>{item.category}</div>
          </div>

          <p className='project-description'>{item.description}</p>

          
          {/* Technology Tags */}
          <div className='project-technologies'>
            <div className='tech-label'>Technologies:</div>
            <div className='tech-tags'>
              {item.technology.split(', ').map((tech, index) => (
                <span key={index} className='tech-tag'>{tech.trim()}</span>
              ))}
            </div>
          </div>

          {/* Project Features */}
          <div className='project-features'>
            <div className='features-label'>Key Features:</div>
            <div className='features-list'>
              {item.features.slice(0, 2).map((feature, index) => (
                <div key={index} className='feature-item'>
                  <i className='icon-check'></i>
                  <span>{feature}</span>
                </div>
              ))}
              {item.features.length > 3 && (
                <div className='feature-more'>
                  +{item.features.length - 3} more
                </div>
              )}
            </div>
          </div>

          {/* Project Footer */}
          <div className='project-footer'>
            <Link href={`${detailsBasePath}/${item.slug}`} className='project-link' onClick={() => {
              try {
                sessionStorage.setItem('inx_projects_scroll', String(window.scrollY || window.pageYOffset || 0))
                sessionStorage.setItem('inx_restore_projects', '1')
                if (currentCategory) sessionStorage.setItem('inx_projects_category', currentCategory)
              } catch {}
            }}>
              <span>Explore Project</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
        }

        .project-card:hover {
          border-color: rgba(0, 179, 255, 0.5);
          box-shadow: 0 25px 50px rgba(0, 179, 255, 0.2), 0 10px 20px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }

        .project-card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-image-wrapper {
          position: relative;
          aspect-ratio: 16/10; /* more natural banner ratio for screenshots */
          min-height: 320px; /* ensure balanced height for tall/narrow mockups */
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(0 197 222 / 10%);
          border-radius: 18px;
          transform-style: preserve-3d;
          perspective: 1200px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-image-glow {
          position: absolute;
          inset: -50%;
          pointer-events: none;
          z-index: 1;
          border-radius: 18px;
          transition: all 0.5s ease;
        }

        .project-image-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: relative;
          padding: 0px; 
          border-radius: 18px;
          text-align: center;
          z-index: 2;
        }

        /* remove inner frame so the image touches the container edges */
        .project-image-link::after { display: none; }

        .project-image {
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          object-fit: cover;
          object-position: top center;
          display: block;
          margin: 0;
          border-radius: 18px; /* match wrapper */
          will-change: transform, filter;
          backface-visibility: hidden;
          transform-origin: center center;
          transform-style: preserve-3d;
          position: relative;
          z-index: 2;
        }

    

        .project-overlay {
          position: absolute;
          inset: 0; /* full width & height over the image frame */
          background: linear-gradient(135deg, rgba(0, 179, 255, 0.3), rgba(0, 0, 0, 0.7));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 18px;
          z-index: 3;
          backdrop-filter: blur(0.5px);
        }

        .project-card:hover .project-image-wrapper {
          transform: translateY(-4px);
        }
        
        .project-card:hover .project-image-glow {
          opacity: 1 !important;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay-content {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          font-size: 16px;
        }


        .project-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-header {
          margin-bottom: 5px;
        }

        .project-title {
          margin: 0 0 4px 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
        }

        .project-title a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-title a:hover {
          color: var(--primary);
        }

        .project-category {
          color: var(--primary);
          font-size: 12px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-meta {
          margin-bottom: 20px;
        }

        .project-technologies {
          margin-bottom: 20px;
        }

        .tech-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag {
          background: rgba(0, 179, 255, 0.1);
          color: var(--primary);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
          border: 1px solid rgba(0, 179, 255, 0.2);
        }

        .project-features {
          margin-bottom: 20px;
        }

        .features-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        .feature-item i {
          color: #00d68f;
          font-size: 12px;
        }

        .feature-more {
          color: var(--primary);
          font-size: 12px;
          font-weight: 500;
          font-style: italic;
        }

        .project-footer {
          margin-top: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }


        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border: 1px solid var(--primary);
          border-radius: 8px;
          background: rgba(0, 179, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .project-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 179, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .project-link:hover {
          color: white;
          background: var(--primary);
          border-color: var(--primary);
          transform: translateX(4px);
        }

        .project-link:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .project-image-wrapper { min-height: 200px; }
          .project-image-link { padding: 0; }
          .project-image-link::after { display: none; }
          .project-overlay { inset: 0; }
          .project-content {
            padding: 20px;
          }
          
          .project-title {
            font-size: 18px;
          }
          
          .project-footer {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }

           .project-image-wrapper {
          min-height: 240px;
        }
        }
      `}</style>
    </div>
  )
}