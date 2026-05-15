/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        charcoal: '#0B0B0B',
        graphite: '#121212',
        ink: '#1A1A1A',
        ember: '#CC5500',
        amber: '#FF6A00',
        copper: '#FF8C42',
        flame: '#FFA266',
        'off-white': '#F5F5F5',
        'soft-white': '#E8E8E8',
        muted: '#8B8B8B',
        'muted-dark': '#5A5A5A',
        line: 'rgba(255, 255, 255, 0.06)',
        'line-strong': 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 10vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      backgroundImage: {
        'ember-glow': 'radial-gradient(60% 60% at 50% 50%, rgba(255,106,0,0.45) 0%, rgba(204,85,0,0.2) 35%, rgba(0,0,0,0) 70%)',
        'amber-fade': 'linear-gradient(135deg, #FF6A00 0%, #CC5500 60%, #7A2F00 100%)',
        'noise-mask': 'radial-gradient(circle at 50% 0%, rgba(255,106,0,0.18), transparent 60%)',
        'glass-card': 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        'border-shine': 'linear-gradient(135deg, rgba(255,140,66,0.5) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.03) 70%, rgba(255,140,66,0.4) 100%)',
        'grid-faint': "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        'ember-sm': '0 0 24px -6px rgba(255,106,0,0.45)',
        'ember-md': '0 8px 48px -12px rgba(255,106,0,0.4)',
        'ember-lg': '0 20px 80px -20px rgba(255,106,0,0.55)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
        'card': '0 24px 60px -24px rgba(0,0,0,0.8), 0 1px 0 0 rgba(255,255,255,0.04) inset',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'scan': 'scan 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
