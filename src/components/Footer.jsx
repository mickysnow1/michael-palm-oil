import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export function CTABanner() {
  return (
    <>
      <style>{`
        .cta-btn-dark {
          background: #1a4a1a; color: #fff; border: none;
          border-radius: 8px; padding: 15px 36px;
          font-size: 16px; font-weight: 700; font-family: 'DM Sans', sans-serif;
          cursor: pointer; box-shadow: 0 6px 24px rgba(0,0,0,0.2);
          transition: background 0.2s, transform 0.2s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
        }
        .cta-btn-dark:hover { background: #143514; transform: translateY(-2px); }
        .cta-btn-light {
          background: #fff; color: #e07b10; border: none;
          border-radius: 8px; padding: 15px 36px;
          font-size: 16px; font-weight: 700; font-family: 'DM Sans', sans-serif;
          cursor: pointer; transition: background 0.2s, transform 0.2s;
          text-decoration: none; display: inline-flex; align-items: center;
        }
        .cta-btn-light:hover { background: #fff7ee; transform: translateY(-2px); }
      `}</style>

      <section style={{
        background: 'linear-gradient(135deg, #f5a623 0%, #e07b10 100%)',
        padding: '80px 40px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
            Ready to Order?
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900,
            color: '#fff', marginBottom: '16px',
          }}>Farm Fresh. Delivered to You.</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Place your order today and get premium Nigerian palm oil delivered fresh from our farm.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/2340164400" target="_blank" rel="noopener noreferrer" className="cta-btn-dark">
              💬 Order on WhatsApp
            </a>
            <a href="tel:+2340164400" className="cta-btn-light">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

const footerLinks = {
  Company:  ['About Michael', 'Our Plantation', 'Sustainability', 'Gallery', 'Careers'],
  Products: ['Refined Palm Oil', 'Crude Palm Oil', 'Palm Kernel Oil', 'Palm Kernel Cake', 'Wholesale'],
  Support:  ['FAQs', 'Delivery Info', 'Payment Options', 'Track Order', 'Contact Us'],
}

export function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          color: #888; font-size: 14px; text-decoration: none;
          transition: color 0.2s;
          display: block;
        }
        .footer-link:hover { color: #f5a623; }
        .social-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #888; text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .social-icon:hover { background: #f5a623; color: #fff; }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer style={{ background: '#0f2410', padding: '72px 40px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '16px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, color: '#fff' }}>Michael</span>
                <span style={{ fontSize: '20px' }}>🌴</span>
              </div>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.85, marginBottom: '24px' }}>
                Premium palm oil from the heart of Nigeria. Family-owned, sustainably grown, proudly Nigerian since 2012.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { icon: <MapPin size={13} />, text: 'Rivers State, Nigeria' },
                  { icon: <Phone size={13} />, text: '+234 016 4400' },
                  { icon: <Mail size={13} />,  text: 'hello@michaelpalmoil.ng' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888', fontSize: '14px' }}>
                    <span style={{ color: '#f5a623', flexShrink: 0 }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, marginBottom: '20px' }}>{title}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {items.map(item => (
                    <li key={item}>
                      <a href="#" className="footer-link">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '16px',
          }}>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
              © 2024 Michael Palm Oil Plantation. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[<Instagram size={16} />, <Facebook size={16} />, <Twitter size={16} />].map((icon, i) => (
                <a key={i} href="#" className="social-icon">{icon}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
