/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0e17',
        darker: '#06090f',
        main: '#f0f2f5',
        muted: '#9ba1a6',
        gold: {
          DEFAULT: '#c9a25b',
          hover: '#dcc28a'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
