import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1600&q=90',
    overlay: 'linear-gradient(to bottom, rgba(8,25,8,0.32) 0%, rgba(8,25,8,0.60) 100%)',
  },
  {
    bg: 'https://images.unsplash.com/photo-1596273501044-6e4bcd2a9879?w=1600&q=90',
    overlay: 'linear-gradient(to bottom, rgba(10,20,5,0.38) 0%, rgba(10,20,5,0.65) 100%)',
  },
  {
    bg: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=90',
    overlay: 'linear-gradient(to bottom, rgba(15,10,0,0.38) 0%, rgba(15,10,0,0.65) 100%)',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length)
      setAnimKey(k => k + 1)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{
      position: 'relative',
      height: '92vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `${slide.overlay}, url("${slide.bg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: i === active ? 1 : 0,
          transition: 'opacity 1.4s ease',
          transform: i === active ? 'scale(1.04)' : 'scale(1)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '1.4s, 7s',
        }} />
      ))}

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '130px',
        background: 'linear-gradient(to top, #fff 20%, transparent)', zIndex: 2,
      }} />

      <div key={animKey} style={{
        position: 'relative', zIndex: 3, textAlign: 'center',
        padding: '0 24px', maxWidth: '780px',
      }}>
        <p style={{
          color: '#f5a623', fontSize: '15px', fontWeight: 600,
          letterSpacing: '2px', textTransform: 'uppercase',
          marginBottom: '18px', animation: 'fadeUp 0.7s ease both', animationDelay: '0.1s',
        }}>Michael Palm Oil Plantation</p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(40px, 7.5vw, 76px)', fontWeight: 900,
          color: '#fff', lineHeight: 1.08, marginBottom: '22px',
          animation: 'fadeUp 0.7s ease both', animationDelay: '0.25s',
          textShadow: '0 4px 28px rgba(0,0,0,0.5)',
        }}>
          Pure Nigerian Gold<br />from Our Soil to<br />Your Table
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.88)', fontSize: '16px', lineHeight: 1.7,
          marginBottom: '38px', animation: 'fadeUp 0.7s ease both', animationDelay: '0.4s',
        }}>
          Family-owned &bull; Sustainably grown &bull; Premium palm oil<br />
          from the heart of Nigeria since 2012
        </p>

        <div style={{
          display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeUp 0.7s ease both', animationDelay: '0.55s',
        }}>
          <button style={{
            background: '#f5a623', color: '#fff', border: 'none', borderRadius: '7px',
            padding: '15px 34px', fontSize: '16px', fontWeight: 700, fontFamily: 'inherit',
            cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 6px 24px rgba(245,166,35,0.5)',
          }}
            onMouseEnter={e => { e.target.style.background = '#e0911a'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = '#f5a623'; e.target.style.transform = 'translateY(0)'; }}
          >Explore Our Products</button>

          <button style={{
            background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.75)',
            borderRadius: '7px', padding: '14px 34px', fontSize: '16px', fontWeight: 600,
            fontFamily: 'inherit', cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >Take a Virtual Tour</button>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '148px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '10px', zIndex: 4,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => { setActive(i); setAnimKey(k => k + 1); }} style={{
            width: i === active ? '30px' : '8px', height: '8px', borderRadius: '4px',
            background: i === active ? '#f5a623' : 'rgba(255,255,255,0.45)',
            border: 'none', transition: 'all 0.35s ease', cursor: 'pointer', padding: 0,
          }} />
        ))}
      </div>

      <div style={{
        position: 'absolute', bottom: '130px', right: '52px', zIndex: 4,
        width: '46px', height: '46px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)', animation: 'float 2.5s ease-in-out infinite', cursor: 'pointer',
      }}>
        <ArrowRight size={18} color="#fff" />
      </div>
    </section>
  )
}
