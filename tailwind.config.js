/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fff5eb',
          100: '#ffe8d3',
          200: '#ffd1a8',
          300: '#ffb87d',
          400: '#ffa45c',
          500: '#ff914d',
          600: '#ff914d',
          700: '#ff914d',
          800: '#ff914d',
          900: '#ff914d',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};