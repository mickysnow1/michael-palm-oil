import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
 
const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1600&q=85',
    overlay: 'linear-gradient(to bottom, rgba(5,20,5,0.35) 0%, rgba(5,20,5,0.62) 100%)',
  },
  {
    bg: 'https://images.unsplash.com/photo-1596273501044-6e4bcd2a9879?w=1600&q=85',
    overlay: 'linear-gradient(to bottom, rgba(10,20,5,0.38) 0%, rgba(10,20,5,0.65) 100%)',
  },
  {
    bg: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=85',
    overlay: 'linear-gradient(to bottom, rgba(15,10,0,0.38) 0%, rgba(15,10,0,0.65) 100%)',
  },
]
 
function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
}
 
export default function Hero() {
  const [active, setActive] = useState(0)
 
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])
 
  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-tag   { animation: heroFadeUp 0.7s ease 0.1s both; }
        .hero-h1    { animation: heroFadeUp 0.7s ease 0.28s both; }
        .hero-sub   { animation: heroFadeUp 0.7s ease 0.44s both; }
        .hero-btns  { animation: heroFadeUp 0.7s ease 0.58s both; }
 
        .hero-btn-primary {
          background: #f5a623; color: #fff; border: none;
          border-radius: 8px; padding: 14px 34px;
          font-size: 16px; font-weight: 700; font-family: 'DM Sans', sans-serif;
          cursor: pointer; box-shadow: 0 6px 24px rgba(245,166,35,0.45);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .hero-btn-primary:hover {
          background: #e0911a;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(245,166,35,0.55);
        }
        .hero-btn-secondary {
          background: transparent; color: #fff;
          border: 2px solid rgba(255,255,255,0.7);
          border-radius: 8px; padding: 13px 34px;
          font-size: 16px; font-weight: 600; font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.12);
          border-color: #fff;
          transform: translateY(-2px);
        }
        .dot-btn {
          height: 8px; border: none; border-radius: 4px;
          cursor: pointer; padding: 0;
          transition: width 0.35s ease, background 0.35s ease;
        }
        .scroll-down {
          position: absolute; bottom: 36px; left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 50%;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          animation: bounce 2s ease-in-out infinite;
          transition: background 0.2s;
        }
        .scroll-down:hover { background: rgba(255,255,255,0.28); }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
 
      <section style={{
        position: 'relative', height: '92vh', minHeight: '580px',
        overflow: 'hidden', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Slides */}
        {slides.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `${s.overlay}, url("${s.bg}")`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }} />
        ))}
 
        {/* Bottom fade to white */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
          background: 'linear-gradient(to top, #fff 10%, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
 
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 24px', maxWidth: '780px' }}>
          <p className="hero-tag" style={{
            color: '#f5a623', fontSize: '14px', fontWeight: 600,
            letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '18px',
          }}>Michael Palm Oil Plantation</p>
 
          <h1 className="hero-h1" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 900,
            color: '#fff', lineHeight: 1.1, marginBottom: '20px',
            textShadow: '0 4px 28px rgba(0,0,0,0.45)',
          }}>
            Pure Nigerian Gold<br />from Our Soil to<br />Your Table
          </h1>
 
          <p className="hero-sub" style={{
            color: 'rgba(255,255,255,0.85)', fontSize: '16px',
            lineHeight: 1.7, marginBottom: '36px',
          }}>
            Family-owned &bull; Sustainably grown &bull; Premium palm oil<br />
            from the heart of Nigeria since 2012
          </p>
 
          <div className="hero-btns" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="hero-btn-primary" onClick={() => scrollTo('products')}>
              Explore Our Products
            </button>
            <button className="hero-btn-secondary" onClick={() => scrollTo('gallery')}>
              Take a Virtual Tour
            </button>
          </div>
        </div>
 
        {/* Slide dots */}
        <div style={{
          position: 'absolute', bottom: '90px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', gap: '8px', zIndex: 4,
        }}>
          {slides.map((_, i) => (
            <button key={i} className="dot-btn"
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '28px' : '8px',
                background: i === active ? '#f5a623' : 'rgba(255,255,255,0.45)',
              }}
            />
          ))}
        </div>
 
        {/* Scroll down cue */}
        <button className="scroll-down" onClick={() => scrollTo('about')}>
          <ChevronDown size={20} color="#fff" />
        </button>
      </section>
    </>
  )
}
