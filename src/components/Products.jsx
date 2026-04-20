import { useEffect, useRef, useState } from 'react'
import { ShoppingCart, Star } from 'lucide-react'

const products = [
  {
    name: 'Refined Palm Oil',
    desc: 'Golden, pure cooking oil for your kitchen',
    price: '₦4,500',
    unit: '/ 5L',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=85',
    badge: 'Bestseller',
    badgeColor: '#f5a623',
    rating: 4.9,
  },
  {
    name: 'Crude Palm Oil (CPO)',
    desc: 'High-quality export-grade oil',
    price: '₦3,200',
    unit: '/ 5L',
    img: 'https://images.unsplash.com/photo-1596273501044-6e4bcd2a9879?w=600&q=85',
    badge: 'Export Grade',
    badgeColor: '#2d6a2d',
    rating: 4.8,
  },
  {
    name: 'Palm Kernel Oil',
    desc: 'For cosmetics & industrial use',
    price: '₦5,800',
    unit: '/ 5L',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=85',
    badge: 'Premium',
    badgeColor: '#c0392b',
    rating: 4.7,
  },
  {
    name: 'Palm Kernel Cake',
    desc: 'Nutritious animal feed supplement',
    price: '₦1,800',
    unit: '/ 50kg',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=85',
    badge: 'Agro',
    badgeColor: '#7b5c2e',
    rating: 4.6,
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Small staggered delay before observing so cards animate in sequence
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        },
        { threshold: 0.12 }
      )
      if (ref.current) obs.observe(ref.current)
      return () => obs.disconnect()
    }, index * 80)

    return () => clearTimeout(timer)
  }, [index])

  return (
    /*
     * KEY FIX: The card wrapper handles ONLY the entry animation (fade + slide up).
     * Hover lift is handled via CSS class so it never conflicts with the JS transform.
     * The image zoom is a separate child — no transform inheritance issues.
     */
    <div
      ref={ref}
      className="product-card"
      style={{
        borderRadius: '16px',
        background: '#fff',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        /* Entry animation only — no hover transform here */
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.55s ease, transform 0.55s ease`,
        /* Overflow hidden clips the zooming image cleanly */
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {/* ── Image container — fixed height, clips zoom ── */}
      <div style={{ position: 'relative', height: '224px', flexShrink: 0, overflow: 'hidden' }}>
        <img
          src={product.img}
          alt={product.name}
          className="product-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            /* Zoom transition handled purely in CSS class */
            transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />

        {/* Badge */}
        <span style={{
          position: 'absolute', top: '12px', left: '12px',
          background: product.badgeColor, color: '#fff',
          fontSize: '10px', fontWeight: 700,
          padding: '4px 10px', borderRadius: '20px',
          letterSpacing: '0.6px', textTransform: 'uppercase',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>{product.badge}</span>

        {/* Rating */}
        <span style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'rgba(0,0,0,0.52)', backdropFilter: 'blur(6px)',
          color: '#fff', fontSize: '12px', fontWeight: 600,
          padding: '4px 10px', borderRadius: '20px',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          <Star size={10} fill="#f5a623" color="#f5a623" />
          {product.rating}
        </span>

        {/* Hover overlay tint */}
        <div className="product-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'rgba(26,60,20,0)',
          transition: 'background 0.35s ease',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ── Text content ── */}
      <div style={{
        padding: '20px 22px 22px',
        display: 'flex', flexDirection: 'column', gap: '6px', flex: 1,
      }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '19px', fontWeight: 700, color: '#1a1a1a',
          margin: 0, lineHeight: 1.3,
        }}>{product.name}</h3>

        <p style={{
          color: '#999', fontSize: '13.5px', margin: 0, lineHeight: 1.5,
        }}>{product.desc}</p>

        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginTop: 'auto', paddingTop: '14px',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '22px', fontWeight: 900, color: '#1a4a1a',
            }}>{product.price}</span>
            <span style={{ color: '#bbb', fontSize: '12px' }}>{product.unit}</span>
          </div>

          {/* Buy Now — isolated from card hover via stopPropagation style */}
          <button
            className="buy-btn"
            style={{
              background: '#f5a623', color: '#fff', border: 'none',
              borderRadius: '8px', padding: '10px 18px',
              fontWeight: 700, fontSize: '13px', fontFamily: 'inherit',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'background 0.2s ease',
              flexShrink: 0,
            }}
          >
            <ShoppingCart size={14} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const headingRef = useRef(null)
  const [headingVisible, setHeadingVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeadingVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (headingRef.current) obs.observe(headingRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: '#faf8f3', padding: '96px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Heading */}
        <div ref={headingRef} style={{
          textAlign: 'center', marginBottom: '56px',
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? 'translateY(0)' : 'translateY(22px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <p style={{
            color: '#f5a623', fontSize: '12px', fontWeight: 700,
            letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px',
          }}>From Our Farm</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900,
            color: '#1a1a1a', marginBottom: '14px',
          }}>Our Premium Products</h2>
          <p style={{
            color: '#888', fontSize: '15.5px', maxWidth: '520px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Every product carefully processed and quality-checked before leaving our farm gates.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px',
        }}>
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <button
            className="view-all-btn"
            style={{
              background: 'transparent', border: '2px solid #1a4a1a',
              color: '#1a4a1a', borderRadius: '8px', padding: '13px 42px',
              fontSize: '15px', fontWeight: 700, fontFamily: 'inherit',
              cursor: 'pointer', transition: 'background 0.25s ease, color 0.25s ease',
            }}
          >
            View All Products
          </button>
        </div>
      </div>

      {/* ── All hover CSS in one place — no JS transform conflicts ── */}
      <style>{`
        /* Card lift — pure CSS, no JS state needed */
        .product-card {
          transition: opacity 0.55s ease, transform 0.55s ease,
                      box-shadow 0.28s ease !important;
        }
        .product-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 52px rgba(0,0,0,0.13) !important;
        }

        /* Image zoom — isolated inside its fixed-height container */
        .product-card:hover .product-img {
          transform: scale(1.07);
        }

        /* Overlay tint on hover */
        .product-card:hover .product-overlay {
          background: rgba(26,60,20,0.08) !important;
        }

        /* Buy button — darken only, no scale (scale on button inside
           a lifting card looks jittery) */
        .buy-btn:hover {
          background: #e0911a !important;
        }

        /* View all */
        .view-all-btn:hover {
          background: #1a4a1a !important;
          color: #fff !important;
        }

        @media (max-width: 640px) {
          .product-card:hover {
            transform: translateY(-4px) !important;
          }
        }
      `}</style>
    </section>
  )
}


