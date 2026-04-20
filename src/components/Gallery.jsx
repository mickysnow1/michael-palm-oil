import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
 
const images = [
  { src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=700&q=85', caption: 'Sunrise over the plantation' },
  { src: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=700&q=85', caption: 'Fresh palm fruit bunches' },
  { src: 'https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?w=700&q=85', caption: 'Golden refined oil' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=85', caption: 'Harvest season' },
  { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=85', caption: 'Community farmers' },
  { src: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=700&q=85', caption: 'Processing facility' },
]
 
export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
 
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
 
  return (
    <>
      <style>{`
        .g-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          background: #eee;
        }
        .g-item img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .g-item:hover img { transform: scale(1.06); }
        .g-caption {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0);
          display: flex; align-items: flex-end;
          padding: 16px;
          transition: background 0.3s ease;
        }
        .g-item:hover .g-caption { background: rgba(0,0,0,0.45); }
        .g-caption span {
          color: #fff; font-size: 13px; font-weight: 500;
          opacity: 0; transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .g-item:hover .g-caption span { opacity: 1; transform: translateY(0); }
        .g-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 220px;
          gap: 14px;
        }
        @media (max-width: 768px) {
          .g-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .g-grid { grid-template-columns: 1fr; }
        }
      `}</style>
 
      <section style={{ background: '#fff', padding: '96px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{
              color: '#f5a623', fontSize: '12px', fontWeight: 700,
              letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px',
            }}>Visual Journey</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a1a',
            }}>Life at Our Plantation</h2>
          </div>
 
          <div className="g-grid">
            {images.map((img, i) => (
              <div key={i} className="g-item" onClick={() => setLightbox(img)}>
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="g-caption">
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.9)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px', cursor: 'pointer',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              borderRadius: '50%', width: '44px', height: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            <X size={20} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '860px', width: '100%' }}>
            <img
              src={lightbox.src.replace('w=700', 'w=1200')}
              alt={lightbox.caption}
              style={{ width: '100%', borderRadius: '12px', display: 'block', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
            />
            <p style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginTop: '14px', fontSize: '15px' }}>
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
