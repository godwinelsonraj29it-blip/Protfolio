import { useEffect } from 'react'

// Non-visual React component that creates a high-performance custom cursor
// entirely via direct DOM manipulation to avoid React re-renders on mousemove.
export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only enable on devices with a real pointer (desktop).
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!media.matches) return

    // Root cursor container
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'

    // Inner core dot
    const core = document.createElement('div')
    core.className = 'cursor-core'
    cursor.appendChild(core)

    // Outer ring
    const ring = document.createElement('div')
    ring.className = 'cursor-ring'
    cursor.appendChild(ring)

    // Particles container
    const particlesWrap = document.createElement('div')
    particlesWrap.className = 'cursor-particles'
    cursor.appendChild(particlesWrap)

    // Pre-create particle elements (max 8)
    const maxParticles = 8
    const particles = []
    for (let i = 0; i < maxParticles; i++) {
      const p = document.createElement('div')
      p.className = 'cursor-particle'
      p.style.opacity = '0'
      particlesWrap.appendChild(p)
      particles.push({ el: p, life: 0, ttl: 0, vx: 0, vy: 0 })
    }

    // Ripple element for click effect
    const ripple = document.createElement('div')
    ripple.className = 'cursor-ripple'
    cursor.appendChild(ripple)

    // state variables (kept in closure) - initialize before first use
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let coreX = mouseX
    let coreY = mouseY
    let ringX = mouseX
    let ringY = mouseY

    document.body.appendChild(cursor)

    // Hide the system cursor while our custom cursor is active (only when mounted)
    const prevCursor = document.body.style.cursor
    try { document.body.style.cursor = 'none' } catch (e) {}

    // Initialize visual position in center so pointer is visible immediately
    core.style.transform = `translate3d(${coreX}px, ${coreY}px, 0) translate(-50%, -50%)`
    core.style.opacity = '1'
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
    ring.style.opacity = '1'
    ripple.style.opacity = '0'

    const lerp = (a, b, n) => (1 - n) * a + n * b

    // color mapping by section id (subtle)
    const sectionColors = {
      hero: '--cursor-accent: var(--space-cyan, #22D3EE);',
      skills: '--cursor-accent: var(--space-blue, #2563EB);',
      career: '--cursor-accent: var(--space-purple, #8B5CF6);',
      contact: '--cursor-accent: var(--space-cyan, #22D3EE);',
    }

    let lastSection = null

    function setAccentForSection(id) {
      if (id === lastSection) return
      lastSection = id
      const css = sectionColors[id] || '--cursor-accent: var(--space-cyan, #22D3EE);'
      cursor.style.cssText += css
    }

    // particle spawn
    function spawnParticle(x, y) {
      // find dead particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (p.life <= 0) {
          p.life = 1
          p.ttl = 0.6 + Math.random() * 0.6
          p.vx = (Math.random() - 0.5) * 0.6
          p.vy = -0.2 - Math.random() * 0.8
          p.el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${0.6 + Math.random() * 0.6})`
          p.el.style.opacity = '1'
          p.el.style.transition = 'opacity 0.6s linear, transform 0.8s linear'
          return
        }
      }
    }

    // hover detection for interactive elements
    let hoverState = ''
    function updateHover(target) {
      const interactive = target && target.closest && target.closest('a, button, input, textarea, select, [role="button"], .premium-card, .space-button-primary')
      if (interactive) {
        // detect primary button
        if (interactive.classList && interactive.classList.contains && interactive.classList.contains('space-button-primary')) {
          if (hoverState !== 'button') {
            ring.classList.add('cursor-hover-button')
            ring.classList.remove('cursor-hover-link')
            core.classList.add('cursor-hover-bright')
            hoverState = 'button'
          }
        } else {
          if (hoverState !== 'link') {
            ring.classList.add('cursor-hover-link')
            ring.classList.remove('cursor-hover-button')
            core.classList.add('cursor-hover-bright')
            hoverState = 'link'
          }
        }
      } else {
        if (hoverState !== '') {
          ring.classList.remove('cursor-hover-button', 'cursor-hover-link')
          core.classList.remove('cursor-hover-bright')
          hoverState = ''
        }
      }
    }

    // click ripple
    function doClick(x, y) {
      ripple.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(0.6)`
      ripple.classList.add('ripple-animate')
      ripple.style.opacity = '0.9'
      setTimeout(() => {
        ripple.classList.remove('ripple-animate')
        ripple.style.opacity = '0'
      }, 420)
    }

    // mouse handlers
    function onMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      // lightweight particle spawn (throttle via small random)
      if (Math.random() > 0.7) spawnParticle(mouseX, mouseY)
      // cheap element lookup
      const el = document.elementFromPoint(mouseX, mouseY)
      if (el) {
        const sec = el.closest && el.closest('section')
        if (sec && sec.id) setAccentForSection(sec.id)
        updateHover(el)
      }
    }

    function onDown(e) {
      doClick(e.clientX, e.clientY)
    }

    // particle update
    function updateParticles(dt) {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (p.life > 0) {
          p.life -= dt
          const progress = 1 - p.life / p.ttl
          const prev = p.el.dataset.pos ? JSON.parse(p.el.dataset.pos) : { x: 0, y: 0 }
          prev.x += p.vx * 18
          prev.y += p.vy * 18
          p.el.dataset.pos = JSON.stringify(prev)
          p.el.style.transform = `translate3d(${parseFloat(prev.x) + mouseX}px, ${parseFloat(prev.y) + mouseY}px, 0) translate(-50%, -50%) scale(${0.6 + progress * 0.6})`
          p.el.style.opacity = `${Math.max(0, 1 - progress)}`
          if (p.life <= 0) {
            p.el.style.opacity = '0'
            p.el.dataset.pos = JSON.stringify({ x: 0, y: 0 })
          }
        }
      }
    }

    let lastTime = performance.now()
    let raf = 0
    function loop(now) {
      const dt = Math.min(0.06, (now - lastTime) / 1000)
      lastTime = now

      // core - fast follow
      coreX = mouseX
      coreY = mouseY

      // ring - lerp for slight delay
      ringX = lerp(ringX, mouseX, 0.18)
      ringY = lerp(ringY, mouseY, 0.18)

      // position elements via transform (GPU friendly)
      core.style.transform = `translate3d(${coreX}px, ${coreY}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) rotate(${(Date.now() / 40) % 360}deg)`

      updateParticles(dt)

      raf = requestAnimationFrame(loop)
    }

    // entry animation
    function entry() {
      core.classList.add('entry')
      ring.classList.add('entry')
      for (let i = 0; i < 3; i++) {
        setTimeout(() => spawnParticle(mouseX + (Math.random() - 0.5) * 20, mouseY + (Math.random() - 0.5) * 20), i * 120)
      }
      setTimeout(() => {
        core.classList.remove('entry')
        ring.classList.remove('entry')
      }, 1400)
    }

    // attach listeners
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)

    // initialize
    entry()
    raf = requestAnimationFrame(loop)

    // cleanup
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      if (cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor)
      // restore system cursor
      try { document.body.style.cursor = prevCursor || '' } catch (e) {}
    }
  }, [])

  return null
}
