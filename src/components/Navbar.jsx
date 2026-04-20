import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',           id: 'home' },
  { label: 'About Michael',  id: 'about' },
  { label: 'Our Plantation', id: 'plantation' },
  { label: 'Products',       id: 'products' },
  { label: 'Sustainability', id: 'sustainability' },
  { label: 'Gallery',        id: 'gallery' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 70
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Scroll spy
      let current = 'home'
      for (const { id } of navLinks) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id
        }
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    scrollToSection(id)
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <>
      {/* Global CSS */}
      <style>{`
        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          padding: 6px 10px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          position: relative;
          letter-spacing: 0.2px;
        }
        .nav-link:hover {
          color: #f5a623;
          background: rgba(255,255,255,0.06);
        }
        .nav-link.active {
          color: #f5a623;
          font-weight: 600;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 10px;
          right: 10px;
          height: 2px;
          background: #f5a623;
          border-radius: 2px;
        }
        .btn-shop {
          background: #f5a623;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 9px 22px;
          font-weight: 700;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .btn-shop:hover {
          background: #e0911a;
          transform: scale(1.04);
        }
        .btn-wa {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.3);
          color: #fff;
          border-radius: 6px;
          padding: 8px 16px;
          font-weight: 500;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-wa:hover {
          border-color: #25D366;
          background: rgba(37,211,102,0.08);
        }
        .mobile-nav-btn {
          display: block;
          width: 100%;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          text-align: left;
          padding: 15px 24px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .mobile-nav-btn:hover,
        .mobile-nav-btn.active {
          background: rgba(255,255,255,0.05);
          color: #f5a623;
        }
        .mobile-nav-btn.active {
          font-weight: 600;
        }
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .btn-wa { display: none !important; }
          .top-center { display: none !important; }
        }
        @media (max-width: 480px) {
          .btn-shop { padding: 8px 14px; font-size: 13px; }
        }
      `}</style>

      {/* Top bar */}
      <div style={{
        background: '#0d2e0d',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '7px 40px',
        fontSize: '12px',
        zIndex: 1001,
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Phone size={11} color="#f5a623" />
          <span style={{ color: '#f5a623', fontWeight: 700 }}>+234 016 4400</span>
        </div>
        <span className="top-center" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
          Fresh harvest daily · Free delivery on orders over ₦50,000
        </span>
        <span style={{ fontSize: '16px' }}>🇳🇬</span>
      </div>

      {/* Main nav */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(20,55,20,0.97)' : '#1e5c1e',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.25)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '66px',
        gap: '16px',
      }}>
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, flexShrink: 0 }}
        >
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, color: '#fff' }}>Michael</span>
          <span style={{ fontSize: '20px' }}>🌴</span>
        </button>

        {/* Desktop links */}
        <ul className="desktop-nav" style={{ display: 'flex', gap: '2px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`nav-link${activeId === id ? ' active' : ''}`}
                onClick={() => handleNav(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <button className="btn-shop" onClick={() => handleNav('products')}>
            Shop Now
          </button>
          <a
            href="https://wa.me/2340164400"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            <span>💬</span> WhatsApp Us
          </a>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none', border: 'none', color: '#fff',
              cursor: 'pointer', padding: '4px',
              display: 'none', alignItems: 'center',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — CSS height transition, no JS jank */}
      <div style={{
        position: 'fixed',
        top: '103px',
        left: 0,
        right: 0,
        zIndex: 998,
        background: '#163d16',
        maxHeight: menuOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        boxShadow: menuOpen ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
      }}>
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            className={`mobile-nav-btn${activeId === id ? ' active' : ''}`}
            onClick={() => handleNav(id)}
          >
            {label}
          </button>
        ))}
        <a
          href="https://wa.me/2340164400"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#25D366', fontSize: '15px', fontWeight: 600,
            padding: '15px 24px', textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          💬 WhatsApp Us
        </a>
        <div style={{ padding: '16px 24px' }}>
          <button
            className="btn-shop"
            style={{ width: '100%', padding: '13px', fontSize: '15px' }}
            onClick={() => handleNav('products')}
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  )
}


