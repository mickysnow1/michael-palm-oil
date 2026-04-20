import { useEffect, useRef, useState } from 'react'
import { ShoppingCart } from 'lucide-react'

const products = [
  {
    name: 'Refined Palm Oil',
    desc: 'Golden, pure cooking oil for your kitchen',
    // Palm oil in a bottle / golden oil — matches card 1
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=85',
  },
  {
    name: 'Crude Palm Oil (CPO)',
    desc: 'High-quality export-grade oil',
    // Fresh palm fruit bunches on the tree — matches card 2
    img: 'https://images.unsplash.com/photo-1596273501044-6e4bcd2a9879?w=600&q=85',
  },
  {
    name: 'Palm Kernel Oil',
    desc: 'For cosmetics & industrial use',
    // Close-up green palm leaves — matches card 3
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=85',
  },
]

function ProductCard({ product, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      borderRadius: '14px', overflow: 'hidden', background: '#fff',
      boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.14)' : '0 4px 20px rgba(0,0,0,0.08)',
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s, box-shadow 0.3s`,
      opacity: visible ? 1 : 0,
      transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(28px)',
      cursor: 'pointer',
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: '210px', overflow: 'hidden' }}>
        <img src={product.img} alt={product.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }} />
      </div>
      <div style={{ padding: '20px 22px 24px' }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '19px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px',
        }}>{product.name}</h3>
        <p style={{ color: '#999', fontSize: '13px', marginBottom: '18px' }}>{product.desc}</p>
        <button style={{
          width: '100%', background: '#f5a623', color: '#fff', border: 'none',
          borderRadius: '7px', padding: '11px', fontWeight: 700, fontSize: '14px',
          fontFamily: 'inherit', cursor: 'pointer', transition: 'background 0.2s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#e0911a'}
          onMouseLeave={e => e.currentTarget.style.background = '#f5a623'}
        >
          <ShoppingCart size={15} /> Buy Now
        </button>
      </div>
    </div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: '#fff', padding: '80px 60px 100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center', marginBottom: '54px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900,
            color: '#1a1a1a', marginBottom: '14px',
          }}>Our Premium Products</h2>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>
            Every product carefully processed and quality-checked from our farm gates to your door.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }} className="products-grid">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} delay={i * 0.12} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
