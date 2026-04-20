import { useState } from 'react'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/2340164400"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9000,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: hovered
          ? '0 8px 32px rgba(37,211,102,0.6)'
          : '0 4px 18px rgba(37,211,102,0.4)',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        textDecoration: 'none',
        animation: 'pulse 2.5s ease-in-out infinite',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.476.668 4.794 1.832 6.789L2 30l7.414-1.805A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
        <path d="M23.5 20.5c-.33.93-1.96 1.77-2.7 1.87-.69.09-1.56.13-2.51-.16-.58-.18-1.32-.41-2.27-.81-3.99-1.72-6.6-5.72-6.8-5.99-.2-.27-1.63-2.17-1.63-4.14 0-1.97 1.03-2.94 1.4-3.34.37-.4.81-.5 1.08-.5.27 0 .54.002.77.014.25.012.58-.095.91.695.33.79 1.12 2.73 1.22 2.93.1.2.17.43.03.7-.13.27-.2.43-.39.66-.2.23-.42.51-.6.69-.2.19-.4.39-.17.76.23.37 1.02 1.68 2.19 2.72 1.5 1.34 2.77 1.75 3.14 1.95.37.2.58.17.8-.1.22-.27.93-1.09 1.18-1.46.25-.37.5-.31.84-.19.34.12 2.18 1.03 2.55 1.22.37.19.62.28.71.44.09.16.09.91-.24 1.84z" fill="#fff"/>
      </svg>
    </a>
  )
}
