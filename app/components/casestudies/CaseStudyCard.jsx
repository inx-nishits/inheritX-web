'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function CaseStudyCard({ caseStudy, index }) {
  const imageWrapperRef = useRef(null)
  const imageRef = useRef(null)
  const frameRef = useRef(null)
  const animationRunningRef = useRef(false)
  const cachedRectRef = useRef(null)
  const needsRectUpdateRef = useRef(true)
  const lastMouseEventRef = useRef(null)
  const isMobileRef = useRef(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollOffset, setScrollOffset] = useState({ y: 0, progress: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Detect mobile/touch device and tablet
    const detectMobile = () => {
      return (
        window.matchMedia('(max-width: 1024px)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      )
    }

    isMobileRef.current = detectMobile()

    if (isMobileRef.current) {
      setScrollOffset({ y: 0, progress: 0 })
      return
    }

    const animate = () => {
      if (!imageWrapperRef.current || !imageRef.current) {
        animationRunningRef.current = false
        return
      }

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
          setScrollOffset(prev => {
            const next = { y: clampedProgress * 50, progress: clampedProgress }
            return (prev.y !== next.y || prev.progress !== next.progress) ? next : prev
          })
        } else {
          setScrollOffset(prev => (prev.y !== 0 || prev.progress !== 0 ? { y: 0, progress: 0 } : prev))
        }
      }

      if (lastMouseEventRef.current && rect && !isMobileRef.current) {
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

    const handleScroll = () => {
      if (!isMobileRef.current) {
        needsRectUpdateRef.current = true
      }
    }

    const handleResize = () => {
      const wasMobile = isMobileRef.current
      isMobileRef.current = detectMobile()

      if (isMobileRef.current && !wasMobile) {
        setScrollOffset({ y: 0, progress: 0 })
        return
      }

      if (!isMobileRef.current) {
        needsRectUpdateRef.current = true
      }
    }

    const handleMouseMove = (e) => {
      if (!imageWrapperRef.current || isMobileRef.current) return
      lastMouseEventRef.current = e
    }

    const handleMouseEnter = () => {
      if (isMobileRef.current) return
      setIsHovering(true)
      needsRectUpdateRef.current = true
    }

    const handleMouseLeave = () => {
      if (isMobileRef.current) return
      setIsHovering(false)
      setMousePosition({ x: 0, y: 0 })
      lastMouseEventRef.current = null
    }

    const wrapper = imageWrapperRef.current

    const initParallax = () => {
      if (wrapper && imageRef.current && !animationRunningRef.current && !isMobileRef.current) {
        wrapper.addEventListener('mousemove', handleMouseMove, { passive: true })
        wrapper.addEventListener('mouseenter', handleMouseEnter)
        wrapper.addEventListener('mouseleave', handleMouseLeave)
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleResize, { passive: true })

        needsRectUpdateRef.current = true
        animationRunningRef.current = true
        frameRef.current = requestAnimationFrame(animate)
        return true
      }
      return false
    }

    let timeoutId
    if (!initParallax()) {
      timeoutId = setTimeout(() => {
        initParallax()
      }, 100)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      animationRunningRef.current = false
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (wrapper) {
        wrapper.removeEventListener('mousemove', handleMouseMove)
        wrapper.removeEventListener('mouseenter', handleMouseEnter)
        wrapper.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const isMobile = isMobileRef.current
  const rotateX = isMobile ? 0 : mousePosition.y * 8
  const rotateY = isMobile ? 0 : mousePosition.x * 8
  const translateX = isMobile ? 0 : mousePosition.x * 15
  const translateY = isMobile ? 0 : (scrollOffset.y + (mousePosition.y * 15))
  const translateZ = isMobile ? 0 : (isHovering ? 20 : 0)
  const glowX = isMobile ? 50 : ((mousePosition.x * 50) + 50)
  const glowY = isMobile ? 50 : ((mousePosition.y * 50) + 50)

  return (
    <div className='casestudy-card' style={{ '--stagger': index }}>
      <div className='casestudy-card-inner'>
        {/* Case Study Image */}
        <div className='casestudy-image-wrapper' ref={imageWrapperRef}>
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className='casestudy-image-link d-block w-100 h-100'
            aria-label={`View ${caseStudy.title} case study`}
          >
            <img
              ref={imageRef}
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              className='casestudy-image'
            />
            <div className='casestudy-overlay'>
              <div className='casestudy-overlay-content'>
                <span>View Details</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Case Study Content */}
        <div className='casestudy-content'>
          <div className='casestudy-header'>
            <h3 className='casestudy-title'>
              <Link href={`/case-studies/${caseStudy.slug}`}>
                {caseStudy.title}
              </Link>
            </h3>
            <div className='casestudy-category'>{caseStudy.category}</div>
          </div>

          <p className='casestudy-subtitle'>{caseStudy.subtitle}</p>
          <p className='casestudy-description'>{caseStudy.excerpt}</p>

          {/* Technology Tags */}
          <div className='casestudy-technologies'>
            <div className='tech-label'>Technologies:</div>
            <div className='tech-tags'>
              {caseStudy.techStack.slice(0, 4).map((tech, idx) => (
                <span key={idx} className='tech-tag'>{tech}</span>
              ))}
              {caseStudy.techStack.length > 4 && (
                <span className='tech-tag more'>+{caseStudy.techStack.length - 4}</span>
              )}
            </div>
          </div>

          {/* Key Outcomes */}
          <div className='casestudy-outcomes'>
            <div className='outcomes-label'>Key Results:</div>
            <div className='outcomes-list'>
              {caseStudy.outcomes.slice(0, 2).map((outcome, idx) => (
                <div key={idx} className='outcome-item'>
                  <i className='icon-check'></i>
                  <span><strong>{outcome.metric}</strong> {outcome.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Footer */}
          <div className='casestudy-footer'>
            <Link href={`/case-studies/${caseStudy.slug}`} className='casestudy-link' onClick={() => {
              try {
                sessionStorage.setItem('inx_casestudies_scroll', String(window.scrollY || window.pageYOffset || 0))
                sessionStorage.setItem('inx_restore_casestudies', '1')
                if (currentCategory) sessionStorage.setItem('inx_casestudies_category', currentCategory)
              } catch { }
            }}>
              <span>Read Case Study</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .casestudy-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
        }

        .casestudy-card:hover {
          border-color: rgba(0, 179, 255, 0.5);
          box-shadow: 0 25px 50px rgba(0, 179, 255, 0.2), 0 10px 20px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }

        .casestudy-card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .casestudy-image-wrapper {
          position: relative;
          aspect-ratio: 16/10;
          min-height: 320px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(0 197 222 / 10%);
          border-radius: 18px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .casestudy-image-link {
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

        .casestudy-image {
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          object-fit: cover;
          object-position: top center;
          display: block;
          margin: 0;
          border-radius: 18px;
        }

        @media (max-width: 1024px) {
          .casestudy-image {
            transform: none !important;
          }
        }

        .casestudy-overlay {
          position: absolute;
          inset: 0;
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

        .casestudy-card:hover .casestudy-overlay {
          opacity: 1;
        }

        .casestudy-overlay-content {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          font-size: 16px;
        }

        .casestudy-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .casestudy-header {
          margin-bottom: 5px;
        }

        .casestudy-title {
          margin: 0 0 4px 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
        }

        .casestudy-title a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .casestudy-title a:hover {
          color: var(--primary);
        }

        .casestudy-category {
          color: var(--primary);
          font-size: 12px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .casestudy-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          margin: 8px 0;
          font-weight: 500;
        }

        .casestudy-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .casestudy-technologies {
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

        .tech-tag.more {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.6);
        }

        .casestudy-outcomes {
          margin-bottom: 20px;
        }

        .outcomes-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .outcomes-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .outcome-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        .outcome-item i {
          color: #00d68f;
          font-size: 12px;
        }

        .casestudy-footer {
          margin-top: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .casestudy-link {
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

        .casestudy-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 179, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .casestudy-link:hover {
          color: white;
          background: var(--primary);
          border-color: var(--primary);
          transform: translateX(4px);
        }

        .casestudy-link:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .casestudy-image-wrapper {
            min-height: 240px;
          }

          .casestudy-content {
            padding: 20px;
          }

          .casestudy-title {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}
