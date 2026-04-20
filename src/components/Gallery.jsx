import { useEffect, useRef, useState } from 'react'

const images = [
  { src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80', span: 'col', caption: 'Sunrise over the plantation' },
  { src: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=600&q=80', span: '', caption: 'Fresh palm fruit bunches' },
  { src: 'https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?w=600&q=80', span: '', caption: 'Golden refined oil' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', span: '', caption: 'Harvest season' },
  { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80', span: 'col', caption: 'Community farmers' },
  { src: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80', span: '', caption: 'Processing facility' },
]

export default function Gallery() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section style={{ padding: '90px 40px', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center',
          marginBottom: '56px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <p style={{ color: '#f5a623', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Visual Journey</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#1a1a1a' }}>
            Life at Our Plantation
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '16px',
        }} className="gallery-grid">
          {images.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} visible={visible} onClick={() => setLightbox(img)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.92)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeIn 0.25s ease',
          cursor: 'pointer',
          padding: '20px',
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', width: '100%' }}>
            <img src={lightbox.src.replace('w=600', 'w=1200')} alt={lightbox.caption} style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: '14px', fontSize: '15px' }}>
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function GalleryItem({ img, index, visible, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div onClick={onClick} style={{
      gridColumn: img.span === 'col' ? 'span 1' : 'span 1',
      borderRadius: '12px',
      overflow: 'hidden',
      height: index % 3 === 0 ? '300px' : '220px',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1)' : 'scale(0.95)',
      transition: `opacity 0.65s ease ${index * 0.08}s, transform 0.65s ease ${index * 0.08}s, box-shadow 0.3s ease`,
      cursor: 'pointer',
      boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.2)' : '0 4px 16px rgba(0,0,0,0.08)',
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.src} alt={img.caption} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: hovered ? 'scale(1.07)' : 'scale(1)',
        transition: 'transform 0.5s ease',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '16px',
      }}>
        <p style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>{img.caption}</p>
      </div>
    </div>
  )
}
