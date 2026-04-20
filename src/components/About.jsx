import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '250+', label: 'Hectares', color: '#f5a623' },
  { value: '100%', label: 'Traceable', color: '#f5a623' },
  { value: '85', label: 'Families Supported', color: '#333' },
  { value: 'RSPO', label: 'RSPO-Aligned', color: '#f5a623' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ padding: '90px 60px', background: '#fff' }}>
      <div ref={ref} style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 380px',
        gap: '80px', alignItems: 'center',
      }} className="about-grid">

        {/* Text */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 0.75s ease, transform 0.75s ease',
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900,
            color: '#1a1a1a', lineHeight: 1.15, marginBottom: '20px',
          }}>
            From Our Village Soil<br />to the World
          </h2>

          <p style={{
            color: '#555', fontSize: '15px', lineHeight: 1.85, marginBottom: '44px',
          }}>
            Michael Palm Oil Plantation was founded by Michael in the heart of Nigeria.
            What started as a small family plot has grown into a thriving, sustainable
            palm oil farm committed to quality, community, and the environment. Every
            bunch of fruit is hand-harvested with care and processed with pride.
          </p>

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '2px solid #f0ede6', paddingTop: '30px', gap: '0',
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: i === 0 ? 'left' : 'center',
                borderRight: i < 3 ? '1px solid #eee' : 'none',
                paddingRight: i < 3 ? '12px' : '0',
                paddingLeft: i > 0 ? '12px' : '0',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '34px', fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: '4px',
                }}>{s.value}</div>
                <div style={{ color: '#999', fontSize: '12px', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Farmer image — matches the smiling man in the design */}
        <div style={{
          position: 'relative',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(40px)',
          transition: 'opacity 0.75s ease 0.2s, transform 0.75s ease 0.2s',
        }}>
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=90&crop=faces&fit=crop"
            alt="Michael at his palm oil plantation"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              objectPosition: 'top center',
              borderRadius: '14px',
              boxShadow: '0 20px 56px rgba(0,0,0,0.15)',
              display: 'block',
            }}
            onError={e => {
              e.target.src = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&q=90&crop=faces&fit=crop'
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
