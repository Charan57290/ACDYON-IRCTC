/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6fb',
          100: '#e7ecf6',
          200: '#cbd7eb',
          300: '#a1bbdc',
          400: '#7198ca',
          500: '#4e7ab9',
          600: '#3c609c',
          700: '#314d80',
          800: '#2a4269',
          900: '#253857',
          950: '#19243a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffefd4',
          200: '#ffdba3',
          300: '#ffc169',
          400: '#ff9c2c',
          500: '#ff7f00',
          600: '#f06400',
          700: '#c74a02',
          800: '#9e3a0a',
          900: '#7f320d',
          950: '#451605',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
