/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ldj-gold': '#D4AF37', // Your signature Gold
        'ldj-dark': '#0f172a', // Luxury Dark Blue/Black
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}