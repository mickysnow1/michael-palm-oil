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

export default function Products() {
  return (
    <section style={{ background: '#faf8f3', padding: '96px 40px' }}>
      <style>{`
        /* ── Card hover: ONLY CSS, zero JS state ── */
        .p-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: box-shadow 0.28s ease, transform 0.28s ease;
          display: flex;
          flex-direction: column;
        }
        .p-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.14);
          transform: translateY(-6px);
        }

        /* ── Image wrapper: fixed height, clips the zoom ── */
        .p-img-wrap {
          width: 100%;
          height: 220px;
          overflow: hidden;        /* <-- this is what clips the zoom */
          flex-shrink: 0;
          position: relative;
        }
        .p-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .p-card:hover .p-img {
          transform: scale(1.06);  /* zoom stays inside wrapper */
        }

        /* ── Buy button ── */
        .buy-btn {
          background: #f5a623;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-weight: 700;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }
        .buy-btn:hover {
          background: #e0911a;
        }
        .buy-btn:active {
          background: #c97e14;
          transform: scale(0.97);
        }

        /* ── View all button ── */
        .view-btn {
          background: transparent;
          border: 2px solid #1a4a1a;
          color: #1a4a1a;
          border-radius: 8px;
          padding: 13px 44px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .view-btn:hover {
          background: #1a4a1a;
          color: #fff;
        }

        /* ── Grid ── */
        .p-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        @media (max-width: 1100px) {
          .p-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .p-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            color: '#f5a623', fontSize: '12px', fontWeight: 700,
            letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px',
          }}>From Our Farm</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900,
            color: '#1a1a1a', marginBottom: '14px',
          }}>Our Premium Products</h2>
          <p style={{ color: '#888', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Every product carefully processed and quality-checked before leaving our farm gates.
          </p>
        </div>

        {/* Cards */}
        <div className="p-grid">
          {products.map((p) => (
            <div key={p.name} className="p-card">
              {/* Image — locked in fixed-height container */}
              <div className="p-img-wrap">
                <img src={p.img} alt={p.name} className="p-img" />
                <span style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: p.badgeColor, color: '#fff',
                  fontSize: '10px', fontWeight: 700,
                  padding: '4px 10px', borderRadius: '20px',
                  letterSpacing: '0.5px', textTransform: 'uppercase',
                }}>{p.badge}</span>
                <span style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
                  color: '#fff', fontSize: '12px', fontWeight: 600,
                  padding: '3px 9px', borderRadius: '20px',
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}>
                  <Star size={10} fill="#f5a623" color="#f5a623" /> {p.rating}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '19px', fontWeight: 700,
                  color: '#1a1a1a', margin: '0 0 6px', lineHeight: 1.3,
                }}>{p.name}</h3>
                <p style={{ color: '#999', fontSize: '13px', margin: '0 0 16px', lineHeight: 1.5 }}>{p.desc}</p>

                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', marginTop: 'auto',
                }}>
                  <div>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '22px', fontWeight: 900, color: '#1a4a1a',
                    }}>{p.price}</span>
                    <span style={{ color: '#bbb', fontSize: '12px', marginLeft: '3px' }}>{p.unit}</span>
                  </div>
                  <button className="buy-btn">
                    <ShoppingCart size={14} /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <button className="view-btn">View All Products</button>
        </div>
      </div>
    </section>
  )
}


