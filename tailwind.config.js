/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans Variable"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      colors: {
        // Fondo cálido y superficies
        cream: {
          DEFAULT: '#FBF8F3',
          100: '#F5F0E8',
          200: '#ECE5D9',
        },
        // Azul noche — texto principal y secciones oscuras
        ink: {
          DEFAULT: '#0E1A2B',
          700: '#243349',
          600: '#3B4A60',
          500: '#566478',
          400: '#7A8798',
          300: '#A8B1BE',
        },
        // Naranja — acento y llamadas a la acción
        brand: {
          DEFAULT: '#F97316',
          50: '#FFF4EA',
          100: '#FFE6D0',
          400: '#FB923C',
          600: '#EA580C',
          700: '#C2410C',
        },
        // Verde confianza / WhatsApp
        trust: {
          DEFAULT: '#16A34A',
          50: '#ECFDF3',
          600: '#15803D',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,26,43,0.04), 0 8px 24px -8px rgba(14,26,43,0.10)',
        'card-hover': '0 2px 4px rgba(14,26,43,0.05), 0 20px 40px -12px rgba(14,26,43,0.18)',
        cta: '0 8px 24px -6px rgba(249,115,22,0.55)',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-y': 'float-y 5s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}
