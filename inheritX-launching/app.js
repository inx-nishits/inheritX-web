(() => {
  const canvas = document.getElementById('bg')
  const ctx = canvas.getContext('2d')

  const fit = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
  fit(); window.addEventListener('resize', fit)

  const colors = ['#00d68f', '#00b3ff', '#ff8b00', '#ff4d4f', '#8c54ff', '#ffd700']
  const blobs = () => ([
    { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 240, c: 'rgba(0,214,143,0.14)' },
    { x: canvas.width * 0.8, y: canvas.height * 0.25, r: 280, c: 'rgba(0,179,255,0.12)' },
    { x: canvas.width * 0.6, y: canvas.height * 0.75, r: 320, c: 'rgba(255,139,0,0.10)' }
  ])
  const stars = new Array(140).fill(0).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.4,
    p: Math.random() * Math.PI * 2,
    s: 0.004 + Math.random() * 0.006
  }))
  const particles = []

  function burst (cx, cy, count = 240) {
    for (let i = 0; i < count; i++) {
      particles.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: cy + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 10,
        vy: Math.random() * -7 - 3,
        g: 0.22 + Math.random() * 0.08,
        size: 5 + Math.random() * 5,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.25,
        color: colors[(Math.random() * colors.length) | 0],
        circle: Math.random() > 0.6,
        life: 220 + (Math.random() * 100)
      })
    }
  }

  let t = 0
  function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#070b12'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // stars
    ctx.save()
    for (const st of stars) {
      const a = 0.35 + Math.sin(t * st.s + st.p) * 0.25
      ctx.globalAlpha = Math.max(0, Math.min(1, a))
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.restore()

    // blobs
    const B = blobs()
    B.forEach((b, i) => {
      const dx = Math.sin(t * 0.001 + i) * 14
      const dy = Math.cos(t * 0.0012 + i) * 12
      ctx.beginPath()
      const g = ctx.createRadialGradient(b.x + dx, b.y + dy, 0, b.x + dx, b.y + dy, b.r)
      g.addColorStop(0, b.c)
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.arc(b.x + dx, b.y + dy, b.r, 0, Math.PI * 2)
      ctx.fill()
    })

    // confetti
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.vy += p.g
      p.x += p.vx
      p.y += p.vy
      p.rot += p.vr
      p.life -= 1
      if (p.y > canvas.height + 50 || p.life <= 0) {
        particles.splice(i, 1)
        continue
      }
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.fillStyle = p.color
      if (p.circle) {
        ctx.beginPath(); ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2); ctx.fill()
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
      }
      ctx.restore()
    }

    t += 16
    requestAnimationFrame(draw)
  }
  requestAnimationFrame(draw)

  // initial bursts
  setTimeout(() => burst(canvas.width / 2, canvas.height * 0.35, 240), 250)
  setTimeout(() => burst(canvas.width / 2, canvas.height * 0.35, 180), 700)

  // button interaction
  const btn = document.getElementById('enterBtn')
  btn?.addEventListener('click', () => {
    burst(canvas.width / 2, canvas.height * 0.35, 360)
    setTimeout(() => {
      // Navigate to your main site (edit this target when deploying)
      window.location.href = '/'
    }, 1600)
  })
})()


