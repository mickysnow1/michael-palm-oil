import { useState, useEffect } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About Michael', 'Our Plantation', 'Products', 'Sustainability', 'Gallery']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top info bar */}
      <div style={{
        background: '#0d2e0d',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '7px 48px',
        fontSize: '12px',
      }}>
        <span style={{ color: '#f5a623', fontWeight: 700, letterSpacing: '0.5px' }}>#016400</span>
        <span style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.3px' }}>
          Sticky Hour: fresh harvest daily · Contact
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Search size={13} color="rgba(255,255,255,0.55)" />
          <span style={{ fontSize: '16px' }}>🇳🇬</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: scrolled ? 'rgba(26,60,20,0.97)' : '#1e5c1e',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 4px 28px rgba(0,0,0,0.28)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 48px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        height: '66px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '27px', fontWeight: 900, color: '#fff',
          }}>Michael</span>
          <span style={{ fontSize: '20px', marginTop: '-2px' }}>🌴</span>
        </div>

        {/* Nav links */}
        <ul style={{
          display: 'flex', gap: '30px', listStyle: 'none',
          alignItems: 'center', margin: 0, padding: 0,
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#"
                onClick={() => setActiveLink(link)}
                style={{
                  color: activeLink === link ? '#f5a623' : 'rgba(255,255,255,0.82)',
                  fontSize: '14px', fontWeight: activeLink === link ? 600 : 400,
                  letterSpacing: '0.2px', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: '5px',
                }}
                onMouseEnter={e => e.target.style.color = '#f5a623'}
                onMouseLeave={e => { if (activeLink !== link) e.target.style.color = 'rgba(255,255,255,0.82)' }}
              >
                {link}
                {activeLink === link && (
                  <span style={{ fontSize: '5px', color: '#f5a623', marginTop: '1px' }}>●</span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button style={{
            background: '#f5a623', color: '#fff', border: 'none',
            borderRadius: '6px', padding: '9px 22px',
            fontWeight: 700, fontSize: '14px', fontFamily: 'inherit',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.background = '#e0911a'; e.target.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.target.style.background = '#f5a623'; e.target.style.transform = 'scale(1)'; }}
          >Shop Now</button>

          <button style={{
            background: 'transparent',
            border: '1.5px solid rgba(255,255,255,0.35)',
            color: '#fff', borderRadius: '6px',
            padding: '8px 16px', fontWeight: 500,
            fontSize: '14px', fontFamily: 'inherit',
            cursor: 'pointer', transition: 'border-color 0.2s',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#25D366'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'}
          >
            <span>💬</span> WhatsApp Us
          </button>

          <span style={{ fontSize: '18px' }}>🇳🇬</span>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: '#fff',
            cursor: 'pointer', display: 'none', padding: '4px',
          }} className="hamburger">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '97px', left: 0, right: 0,
          background: '#1e5c1e', zIndex: 999, padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: '0',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          animation: 'fadeIn 0.2s ease',
        }}>
          {navLinks.map(link => (
            <a key={link} href="#" style={{
              color: '#fff', fontSize: '15px', fontWeight: 500,
              padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
            }} onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}
