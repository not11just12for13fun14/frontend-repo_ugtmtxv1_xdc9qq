import React from 'react';

const Logo = ({ variant = 'light', size = 'md', showText = true }) => {
  const isDark = variant === 'dark';
  const sizeMap = {
    sm: 28,
    md: 36,
    lg: 48,
  };
  const dim = sizeMap[size] || sizeMap.md;

  const primary = '#2C3E50';
  const secondary = '#E67E22';
  const textColor = isDark ? 'text-white' : 'text-[#2C3E50]';

  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="I corsi del prof logo"
      >
        {/* Monitor/Book base */}
        <rect x="8" y="16" width="48" height="32" rx="4" fill={isDark ? '#1F2A37' : '#F4F6F7'} />
        <rect x="14" y="22" width="36" height="20" rx="2" fill="#FFFFFF" />
        {/* Bookmark/Accent stripe */}
        <rect x="14" y="22" width="6" height="20" fill={secondary} />
        {/* Stand */}
        <rect x="28" y="48" width="8" height="4" rx="1" fill={primary} />
        <rect x="20" y="52" width="24" height="4" rx="2" fill={isDark ? '#334155' : '#D1D5DB'} />
        {/* Graduation cap */}
        <path d="M32 12L54 20L32 28L10 20L32 12Z" fill={primary} />
        <path d="M22 26C22 23.79 26.48 22 32 22C37.52 22 42 23.79 42 26V30C42 32.21 37.52 34 32 34C26.48 34 22 32.21 22 30V26Z" fill={isDark ? '#0F172A' : '#E5E7EB'} />
        {/* Tassel */}
        <circle cx="50" cy="20" r="2" fill={secondary} />
        <path d="M50 22V30" stroke={secondary} strokeWidth="2" strokeLinecap="round" />
      </svg>
      {showText && (
        <div className="leading-tight">
          <div className={`font-semibold tracking-tight ${textColor}`}>I corsi del prof</div>
          <div className={`${isDark ? 'text-gray-300' : 'text-gray-500'} text-xs`}>Impara in modo semplice</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
