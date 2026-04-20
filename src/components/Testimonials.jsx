import { Star } from 'lucide-react'
 
const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Restaurant Owner, Lagos',
    text: 'The best palm oil I have ever used in my kitchen. The flavour is rich, clean, and authentic — my customers always ask what makes my stew so special.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Food Exporter, Abuja',
    text: "Michael's CPO is consistently export-quality. Full traceability documentation, prompt delivery, and the team is always responsive. A trusted partner.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
  },
  {
    name: 'Ngozi Eze',
    role: 'Cosmetics Producer, Port Harcourt',
    text: "The Palm Kernel Oil is exceptional — cold-pressed, pure, and perfect for our skincare line. We've sourced from Michael for three years and won't switch.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80',
  },
]
 
export default function Testimonials() {
  return (
    <>
      <style>{`
        .t-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 32px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          border-top: 3px solid #f5a623;
          position: relative;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .t-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          transform: translateY(-4px);
        }
        .t-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 860px) {
          .t-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
        }
      `}</style>
 
      <section style={{ background: '#faf8f3', padding: '96px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{
              color: '#f5a623', fontSize: '12px', fontWeight: 700,
              letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px',
            }}>What Customers Say</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a1a',
            }}>Trusted Across Nigeria</h2>
          </div>
 
          <div className="t-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="t-card">
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={15} fill="#f5a623" color="#f5a623" />
                  ))}
                </div>
 
                {/* Quote */}
                <p style={{
                  color: '#555', fontSize: '15px', lineHeight: 1.8,
                  marginBottom: '24px', fontStyle: 'italic',
                }}>"{t.text}"</p>
 
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={t.avatar} alt={t.name}
                    style={{
                      width: '46px', height: '46px',
                      borderRadius: '50%', objectFit: 'cover',
                      border: '2px solid #f5a623',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#1a1a1a' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
