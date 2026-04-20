import { useEffect, useRef, useState } from 'react'
import { Leaf, Droplets, Users, Award } from 'lucide-react'

const pillars = [
  {
    icon: <Leaf size={28} />,
    title: 'Eco-Farming',
    desc: 'Zero-burn policy, composting organic matter, and protecting biodiversity corridors across our 250+ hectares.',
    color: '#2d6a2d',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Water Stewardship',
    desc: 'Closed-loop effluent treatment ensures zero harmful discharge into local waterways and rivers.',
    color: '#1565c0',
  },
  {
    icon: <Users size={28} />,
    title: 'Community First',
    desc: 'Employing 85+ families, running a local school fund, and training the next generation of sustainable farmers.',
    color: '#f5a623',
  },
  {
    icon: <Award size={28} />,
    title: 'RSPO Aligned',
    desc: 'Committed to the Roundtable on Sustainable Palm Oil principles — traceable, transparent, responsible.',
    color: '#7b2d2d',
  },
]

export default function Sustainability() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 40px',
      background: '#0f3d0f',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=60")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.12,
      }} />
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '80px solid rgba(245,166,35,0.06)' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '60px solid rgba(45,106,45,0.1)' }} />

      <div ref={ref} style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '64px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <p style={{ color: '#f5a623', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Green Promise
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '16px',
          }}>Our Sustainability Commitment</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', maxWidth: '520px', margin: '0 auto' }}>
            Every decision we make is guided by our responsibility to the land, our communities, and future generations.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {pillars.map((p, i) => (
            <div key={p.title} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '36px 28px',
              backdropFilter: 'blur(8px)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.65s ease ${i * 0.12}s, transform 0.65s ease ${i * 0.12}s`,
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(245,166,35,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: p.color + '22',
                border: `1px solid ${p.color}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: p.color === '#2d6a2d' ? '#6fc26f' : p.color === '#1565c0' ? '#64b5f6' : p.color === '#f5a623' ? '#f5a623' : '#ef9a9a',
                marginBottom: '20px',
              }}>
                {p.icon}
              </div>
              <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>
                {p.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
