/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest:  '#2D4A2D',
        sage:    '#7A9E7E',
        moss:    '#4E6B4E',
        cream:   '#F5F0E8',
        sand:    '#D4C4A0',
        earth:   '#8B6914',
        bark:    '#5C3D2E',
        charcoal:'#1A1A1A',
        warm:    '#FEFDFB',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-up-d': 'fadeUp 0.7s 0.2s ease-out forwards',
        'fade-in':   'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
