const stats = [
  { value: '250+', label: 'Hectares',          color: '#f5a623' },
  { value: '100%', label: 'Traceable',         color: '#f5a623' },
  { value: '85',   label: 'Families Supported',color: '#2d6a2d' },
  { value: 'RSPO', label: 'RSPO-Aligned',      color: '#f5a623' },
]
 
export default function About() {
  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 72px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-img-col { order: -1; }
          .about-img-col img { height: 320px !important; }
        }
      `}</style>
 
      <section style={{ background: '#fff', padding: '96px 40px 112px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="about-grid">
 
            {/* Text */}
            <div>
              <p style={{
                color: '#2d6a2d', fontSize: '12px', fontWeight: 700,
                letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '16px',
              }}>Our Story</p>
 
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900,
                color: '#1a1a1a', lineHeight: 1.15, marginBottom: '24px',
              }}>
                From Our Village Soil<br />to the World
              </h2>
 
              <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.85, marginBottom: '44px' }}>
                Michael Palm Oil Plantation was founded by Michael in the heart of Nigeria.
                What started as a small family plot has grown into a thriving, sustainable
                palm oil farm committed to quality, community, and the environment. Every
                bunch of fruit is hand-harvested with care and processed with pride.
              </p>
 
              {/* Stats */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                borderTop: '2px solid #f0ede6', paddingTop: '32px',
              }}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{
                    textAlign: i === 0 ? 'left' : 'center',
                    borderRight: i < 3 ? '1px solid #eee' : 'none',
                    padding: i === 0 ? '0 16px 0 0' : i === 3 ? '0 0 0 16px' : '0 16px',
                  }}>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '32px', fontWeight: 900,
                      color: s.color, lineHeight: 1, marginBottom: '5px',
                    }}>{s.value}</div>
                    <div style={{ color: '#999', fontSize: '12px', fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Image */}
            <div className="about-img-col" style={{ position: 'relative' }}>
              {/* Orange accent block */}
              <div style={{
                position: 'absolute', top: '-16px', right: '-16px',
                width: '80%', height: '80%',
                background: '#f5a623', borderRadius: '16px',
                opacity: 0.12, zIndex: 0,
              }} />
 
              <img
                src="https://images.unsplash.com/photo-1627467959547-215a4a97b10d?w=700&q=85"
                alt="Michael at his palm oil plantation"
                style={{
                  width: '100%', height: '440px',
                  objectFit: 'cover', objectPosition: 'top center',
                  borderRadius: '16px', position: 'relative', zIndex: 1,
                  boxShadow: '0 24px 64px rgba(0,0,0,0.17)',
                  display: 'block',
                }}
              />
 
              {/* Est badge */}
              <div style={{
                position: 'absolute', bottom: '-20px', left: '24px', zIndex: 2,
                background: '#1a4a1a', color: '#fff',
                borderRadius: '12px', padding: '14px 20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <span style={{ fontSize: '26px' }}>🌴</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>Est. 2012</div>
                  <div style={{ color: '#f5a623', fontSize: '12px', fontWeight: 500 }}>Premium Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
