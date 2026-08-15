/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cta: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
        },
      },
      fontFamily: {
        lora: ['Lora', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem', // 20px
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(55, 48, 163, 0.08)',
        'card-hover': '0 8px 40px 0 rgba(55, 48, 163, 0.18)',
        cta: '0 8px 32px 0 rgba(5, 150, 105, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f0f4ff 0%, #fdf6e3 100%)',
        'section-gradient': 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
        'cta-gradient': 'linear-gradient(135deg, #3730a3 0%, #4f46e5 100%)',
      },
    },
  },
  plugins: [],
};
