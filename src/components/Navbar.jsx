import { useState, useEffect, useCallback } from 'react'
import { Search, Menu, X, Phone } from 'lucide-react'

// Map each nav label to its section ID in the DOM
const navLinks = [
  { label: 'Home',             id: 'home' },
  { label: 'About Michael',    id: 'about' },
  { label: 'Our Plantation',   id: 'plantation' },
  { label: 'Products',         id: 'products' },
  { label: 'Sustainability',   id: 'sustainability' },
  { label: 'Gallery',          id: 'gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeId, setActiveId]   = useState('home')

  // ── Scroll spy ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Find which section is currently in view
      const offsets = navLinks.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveId(closest.id)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Smooth scroll to section ─────────────────────────────────
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const navHeight = 100 // topbar + navbar combined height
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveId(id)
    setMenuOpen(false)
  }, [])

  // ── Close mobile menu on outside click ───────────────────────
  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#hamburger-btn')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [menuOpen])

  return (
    <>
      {/* ── Top info bar ─────────────────────────────────────── */}
      <div style={{
        background: '#0d2e0d',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '7px 48px',
        fontSize: '12px',
        position: 'relative',
        zIndex: 1001,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Phone size={11} color="#f5a623" />
          <span style={{ color: '#f5a623', fontWeight: 700, letterSpacing: '0.5px' }}>+234 016 4400</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.3px' }} className="topbar-center">
          Fresh harvest daily · Free delivery on orders over ₦50,000
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Search size={13} color="rgba(255,255,255,0.5)" style={{ cursor: 'pointer' }} />
          <span style={{ fontSize: '16px' }}>🇳🇬</span>
        </div>
      </div>

      {/* ── Main navbar ──────────────────────────────────────── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(20,58,20,0.97)' : '#1e5c1e',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 4px 28px rgba(0,0,0,0.28)' : 'none',
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '66px',
      }}>

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '6px', padding: 0,
          }}
        >
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '26px', fontWeight: 900, color: '#fff',
          }}>Michael</span>
          <span style={{ fontSize: '20px' }}>🌴</span>
        </button>

        {/* ── Desktop nav links ─────────────────────────────── */}
        <ul style={{
          display: 'flex', gap: '4px', listStyle: 'none',
          alignItems: 'center', margin: 0, padding: 0,
        }} className="desktop-nav">
          {navLinks.map(({ label, id }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: isActive ? '#f5a623' : 'rgba(255,255,255,0.8)',
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                    fontFamily: 'inherit',
                    letterSpacing: '0.2px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    transition: 'color 0.2s, background 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#f5a623'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                      e.currentTarget.style.background = 'none'
                    }
                  }}
                >
                  {label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px', left: '12px', right: '12px',
                      height: '2px',
                      background: '#f5a623',
                      borderRadius: '2px',
                    }} />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* ── Right side CTA + hamburger ───────────────────── */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {/* Shop Now */}
          <button
            onClick={() => scrollTo('products')}
            style={{
              background: '#f5a623', color: '#fff', border: 'none',
              borderRadius: '6px', padding: '9px 20px',
              fontWeight: 700, fontSize: '14px', fontFamily: 'inherit',
              cursor: 'pointer', transition: 'background 0.2s, transform 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e0911a'; e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f5a623'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            Shop Now
          </button>

          {/* WhatsApp — hidden on small screens */}
          <a
            href="https://wa.me/2340164400"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.3)',
              color: '#fff', borderRadius: '6px',
              padding: '8px 14px', fontWeight: 500,
              fontSize: '14px', fontFamily: 'inherit',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'border-color 0.2s, background 0.2s',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            className="whatsapp-btn"
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.background = 'rgba(37,211,102,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent' }}
          >
            <span>💬</span> <span className="wa-text">WhatsApp Us</span>
          </a>

          <span style={{ fontSize: '18px' }} className="flag-icon">🇳🇬</span>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none', border: 'none', color: '#fff',
              cursor: 'pointer', padding: '4px', display: 'none',
              alignItems: 'center', justifyContent: 'center',
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ─────────────────────────────── */}
      <div
        id="mobile-menu"
        style={{
          position: 'fixed',
          top: menuOpen ? '97px' : '80px',
          left: 0, right: 0,
          background: '#163d16',
          zIndex: 998,
          padding: menuOpen ? '8px 0 16px' : '0',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          boxShadow: menuOpen ? '0 12px 40px rgba(0,0,0,0.35)' : 'none',
          transition: 'max-height 0.32s ease, top 0.32s ease, padding 0.32s ease',
        }}
      >
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              display: 'block', width: '100%', background: 'none', border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              color: activeId === id ? '#f5a623' : '#fff',
              fontSize: '15px', fontWeight: activeId === id ? 600 : 400,
              fontFamily: 'inherit', textAlign: 'left',
              padding: '14px 28px', cursor: 'pointer',
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'none'}
          >
            {label}
          </button>
        ))}
        {/* Mobile WhatsApp */}
        <a
          href="https://wa.me/2340164400"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#25D366', fontSize: '15px', fontWeight: 600,
            padding: '14px 28px', textDecoration: 'none',
          }}
        >
          <span>💬</span> WhatsApp Us
        </a>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .whatsapp-btn { display: none !important; }
          .flag-icon { display: none !important; }
        }
        @media (max-width: 480px) {
          .topbar-center { display: none !important; }
        }
      `}</style>
    </>
  )
}


