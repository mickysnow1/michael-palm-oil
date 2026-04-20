import { Leaf, Droplets, Users, Award } from 'lucide-react'
 
const pillars = [
  {
    icon: <Leaf size={26} />,
    title: 'Eco-Farming',
    desc: 'Zero-burn policy, composting organic matter, and protecting biodiversity corridors across our 250+ hectares.',
    accent: '#6fc26f',
    bg: 'rgba(111,194,111,0.1)',
  },
  {
    icon: <Droplets size={26} />,
    title: 'Water Stewardship',
    desc: 'Closed-loop effluent treatment ensures zero harmful discharge into local waterways and rivers.',
    accent: '#64b5f6',
    bg: 'rgba(100,181,246,0.1)',
  },
  {
    icon: <Users size={26} />,
    title: 'Community First',
    desc: 'Employing 85+ families, running a local school fund, and training the next generation of sustainable farmers.',
    accent: '#f5a623',
    bg: 'rgba(245,166,35,0.1)',
  },
  {
    icon: <Award size={26} />,
    title: 'RSPO Aligned',
    desc: 'Committed to the Roundtable on Sustainable Palm Oil principles — traceable, transparent, responsible.',
    accent: '#ef9a9a',
    bg: 'rgba(239,154,154,0.1)',
  },
]
 
export default function Sustainability() {
  return (
    <>
      <style>{`
        .sust-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 36px 28px;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .sust-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(245,166,35,0.3);
        }
        .sust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .sust-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .sust-grid { grid-template-columns: 1fr; }
        }
      `}</style>
 
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '96px 40px', background: '#0f3d0f',
      }}>
        {/* BG texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1400&q=50")',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.1,
        }} />
 
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{
              color: '#f5a623', fontSize: '12px', fontWeight: 700,
              letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '14px',
            }}>Green Promise</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900,
              color: '#fff', marginBottom: '16px',
            }}>Our Sustainability Commitment</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Every decision guided by our responsibility to the land, our communities, and future generations.
            </p>
          </div>
 
          <div className="sust-grid">
            {pillars.map((p) => (
              <div key={p.title} className="sust-card">
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: p.bg, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: p.accent, marginBottom: '20px',
                }}>
                  {p.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#fff', fontSize: '19px', fontWeight: 700,
                  marginBottom: '10px',
                }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '14px', lineHeight: 1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
