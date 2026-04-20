import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export function CTABanner() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #f5a623 0%, #e07b10 100%)',
      padding: '80px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative shapes */}
      <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ position: 'absolute', bottom: '-80px', right: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Ready to Order?
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 900,
          color: '#fff',
          marginBottom: '20px',
          textShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}>
          Farm Fresh. Delivered to You.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
          Place your order today and get premium Nigerian palm oil delivered fresh from our farm.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: '#1a4a1a',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '15px 36px',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)'; }}
          >
            Order on WhatsApp
          </button>
          <button style={{
            background: '#fff',
            color: '#e07b10',
            border: 'none',
            borderRadius: '8px',
            padding: '15px 36px',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  )
}

const links = {
  Company: ['About Michael', 'Our Plantation', 'Sustainability', 'Gallery', 'Careers'],
  Products: ['Refined Palm Oil', 'Crude Palm Oil', 'Palm Kernel Oil', 'Palm Kernel Cake', 'Wholesale'],
  Support: ['FAQs', 'Delivery Info', 'Payment Options', 'Track Order', 'Contact Us'],
}

export function Footer() {
  return (
    <footer style={{ background: '#0f2410', color: '#ccc', padding: '70px 40px 30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '60px',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, color: '#fff' }}>Michael</span>
              <span style={{ fontSize: '20px' }}>🌴</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#999', marginBottom: '24px' }}>
              Premium palm oil from the heart of Nigeria. Family-owned, sustainably grown, proudly Nigerian since 2012.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: <MapPin size={14} />, text: 'Rivers State, Nigeria' },
                { icon: <Phone size={14} />, text: '+234 016 4400' },
                { icon: <Mail size={14} />, text: 'hello@michaelpalmoil.ng' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#aaa' }}>
                  <span style={{ color: '#f5a623' }}>{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.3px' }}>{title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ color: '#999', fontSize: '14px', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#f5a623'}
                      onMouseLeave={e => e.target.style.color = '#999'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: '#666' }}>
            © 2024 Michael Palm Oil Plantation. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '14px' }}>
            {[
              { icon: <Instagram size={18} />, href: '#' },
              { icon: <Facebook size={18} />, href: '#' },
              { icon: <Twitter size={18} />, href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#888',
                transition: 'background 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f5a623'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#888'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
