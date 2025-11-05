"use client"

import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'inx_launch_seen_v1'

export default function LaunchExperience ({ onDone }) {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])
  const startedRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const hasSeen = window.localStorage.getItem(STORAGE_KEY)
    if (hasSeen) {
      onDone?.()
      return
    }
    setVisible(true)
  }, [onDone])

  useEffect(() => {
    if (!visible || startedRef.current) return
    startedRef.current = true

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const colors = ['#00d68f', '#00b3ff', '#ff8b00', '#ff4d4f', '#8c54ff', '#ffd700']

    const spawnConfettiBurst = (count = 180) => {
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: width / 2 + (Math.random() - 0.5) * 120,
          y: height * 0.35 + (Math.random() - 0.5) * 60,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * -6 - 4,
          g: 0.18 + Math.random() * 0.08,
          size: 6 + Math.random() * 6,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.2,
          color: colors[(Math.random() * colors.length) | 0],
          shape: Math.random() > 0.6 ? 'circle' : 'rect',
          life: 180 + (Math.random() * 60)
        })
      }
    }

    // initial bursts
    spawnConfettiBurst(200)
    setTimeout(() => spawnConfettiBurst(120), 300)
    setTimeout(() => spawnConfettiBurst(120), 650)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.vy += p.g
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        p.life -= 1

        if (p.y > height + 50 || p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        if (p.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        }
        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    // auto-dismiss after a few seconds
    const auto = setTimeout(() => handleClose(), 2500)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
      clearTimeout(auto)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const handleClose = () => {
    if (exiting) return
    setExiting(true)
    if (typeof window !== 'undefined') {
      try { window.localStorage.setItem(STORAGE_KEY, '1') } catch (e) {}
    }
    // allow CSS exit animation then hide
    setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 600)
  }

  if (!visible) return null

  return (
    <div className={`launch-overlay ${exiting ? 'is-exiting' : ''}`} role='dialog' aria-modal='true'>
      <canvas ref={canvasRef} className='launch-canvas' aria-hidden='true' />
      <div className='launch-content'>
        <div className='launch-badge'>New</div>
        <h1 className='launch-title'>Welcome to the new Inheritx</h1>
        <p className='launch-sub'>A faster, smarter, more delightful experience.</p>
        <button className='tf-btn style-2 launch-cta' onClick={handleClose}>
          <span>Enter Site</span>
        </button>
        <button className='launch-skip' onClick={handleClose} aria-label='Skip intro'>Skip</button>
      </div>
    </div>
  )
}


