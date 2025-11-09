import React from 'react'

// Logo component: "I corsi del prof" with graduation cap over a book/monitor
// Accepts props: variant = 'light' | 'dark', size in pixels
export default function Logo({ variant = 'light', size = 40, withText = true }) {
  const primary = '#2C3E50' // blue
  const accent = '#E67E22' // orange
  const textColor = variant === 'dark' ? '#FFFFFF' : primary

  return (
    <div className="inline-flex items-center gap-3 select-none" style={{ color: textColor }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="I corsi del prof logo"
      >
        {/* Monitor base */}
        <rect x="16" y="36" width="96" height="56" rx="8" fill={primary} />
        <rect x="24" y="44" width="80" height="40" rx="4" fill="#FFFFFF" />
        {/* Book pages at the bottom */}
        <path d="M28 92c8-6 22-6 30 0 8-6 22-6 30 0" stroke={accent} strokeWidth="6" strokeLinecap="round" />
        {/* Stand */}
        <rect x="56" y="96" width="16" height="8" rx="2" fill={primary} />
        <rect x="40" y="104" width="48" height="8" rx="4" fill={primary} />
        {/* Graduation cap */}
        <path d="M64 24L20 40l44 16 44-16-44-16z" fill={primary} />
        <path d="M44 48c0 6 9 10 20 10s20-4 20-10" stroke={primary} strokeWidth="6" strokeLinecap="round" />
        {/* Tassel */}
        <path d="M84 28v16" stroke={accent} strokeWidth="6" strokeLinecap="round" />
        <circle cx="84" cy="46" r="4" fill={accent} />
      </svg>
      {withText && (
        <div className="leading-tight">
          <div className="font-semibold" style={{ color: textColor }}>
            I corsi del prof
          </div>
          <div className="text-xs opacity-80" style={{ color: textColor }}>
            Informatica • TPSIT • Sistemi e Reti
          </div>
        </div>
      )}
    </div>
  )
}
