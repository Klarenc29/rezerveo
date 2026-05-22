import type { Config } from 'tailwindcss';

/**
 * Rezerveo design system.
 * Brand palette (confirmed): primary #1e3a8a / #00e676 / #0f172a / #fff,
 * secondary #3b82f6 / #34d399 / #f3f4f6 / #9ca3af.
 */
const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Deep blue / indigo scale (primary brand)
        brand: {
          50: '#eef3ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5bcfc',
          400: '#7d99f8',
          500: '#3b82f6', // secondary blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e3a8a', // primary deep blue
          900: '#172554',
          950: '#0f172a', // slate base
        },
        // Emerald / green scale (accent)
        accent: {
          50: '#e6fff3',
          100: '#b9ffdd',
          200: '#86ffc4',
          300: '#4dfba7',
          400: '#34d399', // secondary green
          500: '#00e676', // primary emerald
          600: '#00c265',
          700: '#039a52',
          800: '#08723f',
          900: '#0a4e2d',
        },
        ink: {
          DEFAULT: '#0f172a',
          soft: '#1e293b',
        },
      },
      fontFamily: {
        // Primary/display: licensed "Typo Round" -> Quicksand fallback.
        display: ['"Typo Round"', 'Quicksand', 'ui-rounded', 'system-ui', 'sans-serif'],
        // Secondary/body: Montserrat (incl. 200 ExtraLight).
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.18), 0 20px 50px -20px rgba(59,130,246,0.45)',
        'glow-accent': '0 0 0 1px rgba(0,230,118,0.22), 0 20px 50px -20px rgba(0,230,118,0.4)',
        card: '0 12px 40px -16px rgba(15,23,42,0.25)',
        'card-dark': '0 16px 50px -18px rgba(0,0,0,0.6)',
        soft: '0 2px 10px -2px rgba(15,23,42,0.08)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        'accent-gradient': 'linear-gradient(135deg, #00e676 0%, #34d399 100%)',
        'hero-radial':
          'radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(15,23,42,0) 70%)',
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -24px) scale(1.05)' },
          '66%': { transform: 'translate(-18px, 12px) scale(0.97)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 18s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
