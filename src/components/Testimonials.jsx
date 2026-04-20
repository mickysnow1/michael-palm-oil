import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Restaurant Owner, Lagos',
    text: 'The best palm oil I have ever used in my kitchen. The flavour is rich, clean, and authentic — my customers always ask what makes my stew so special.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Food Exporter, Abuja',
    text: 'Michael\'s CPO is consistently export-quality. Full traceability documentation, prompt delivery, and the team is always responsive. A trusted supplier.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Ngozi Eze',
    role: 'Cosmetics Producer, PH',
    text: 'The Palm Kernel Oil is exceptional — cold-pressed, pure, and perfect for our skincare line. We have sourced from Michael for three years and won\'t switch.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
  },
]

export default function Testimonials() {
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
    <section style={{ padding: '90px 40px', background: '#faf8f3' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <p style={{ color: '#f5a623', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>What Customers Say</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a1a' }}>
            Trusted Across Nigeria
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {testimonials.map((t, i) => (
            <div key={t.name} style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '36px 32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.65s ease ${i * 0.12}s, transform 0.65s ease ${i * 0.12}s`,
              borderTop: '3px solid #f5a623',
            }}>
              <div style={{ position: 'absolute', top: '24px', right: '28px', color: '#f5e8c8' }}>
                <Quote size={40} />
              </div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {Array(t.rating).fill(0).map((_, j) => (
                  <Star key={j} size={16} fill="#f5a623" color="#f5a623" />
                ))}
              </div>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src={t.avatar} alt={t.name} style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #f5a623',
                }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#1a1a1a' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: '#888' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
