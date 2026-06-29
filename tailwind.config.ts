import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem'
      },
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        // Brand palette — quiet, editorial luxury
        ivory: {
          DEFAULT: '#FBF8F4',
          50: '#FEFCFA',
          100: '#FBF8F4',
          200: '#F4ECE2'
        },
        offwhite: '#FAF7F2',
        charcoal: {
          DEFAULT: '#1F1A17',
          muted: '#4A423D',
          soft: '#6B625C'
        },
        rose: {
          gold: '#B76E79',
          deep: '#9A5560',
          warm: '#C98F94',
          dust: '#E8C5C0'
        },
        blush: {
          DEFAULT: '#F6E1DE',
          50: '#FBF1EF',
          100: '#F6E1DE',
          200: '#EFC9C4'
        },
        gold: {
          leaf: '#C9A66B',
          soft: '#E6D2A8'
        },
        line: '#E8DFD5'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Playfair Display', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Editorial scale
        hairline: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.18em' }],
        eyebrow: ['0.75rem', { lineHeight: '1.1rem', letterSpacing: '0.22em' }]
      },
      letterSpacing: {
        luxe: '0.18em',
        regal: '0.32em'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31,26,23,0.04), 0 8px 24px -12px rgba(31,26,23,0.10)',
        luxe: '0 30px 60px -30px rgba(154,85,96,0.25)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 2.2s linear infinite',
        float: 'float 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
