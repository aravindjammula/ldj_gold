/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ldj-gold': '#D4AF37', // Primary Gold
        'ldj-gold-light': '#E5C158', // Light Gold
        'ldj-gold-dark': '#B8942B', // Dark Gold
        'ldj-ivory': '#F8F5F0', // Ivory/Off-white
        'ldj-charcoal': '#1A1A1A', // Deep Charcoal
        'ldj-slate': '#2D3748', // Slate Gray
        'ldj-taupe': '#8C8A82', // Taupe
        'ldj-cream': '#F5F1E8', // Cream
        'ldj-dark': '#0f172a', // Keep for compatibility
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'], // Luxury display font
        'serif': ['"Playfair Display"', 'serif'], // Your existing
        'body': ['"Inter"', 'sans-serif'], // Modern body font
        'elegant': ['"Great Vibes"', 'cursive'], // For special accents
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E5C158 50%, #B8942B 100%)',
        'luxury-pattern': 'url("/src/assets/luxury-pattern.svg")',
        'grain-texture': 'url("/src/assets/grain-texture.png")',
      },
      animation: {
        'gentle-glow': 'gentleGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        gentleGlow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'gold': '0 10px 40px rgba(212, 175, 55, 0.15)',
        'inner-luxury': 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.06)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}