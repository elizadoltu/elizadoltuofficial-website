/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--background-color)',
        'menu': 'var(--menu-color)',
        'font': 'var(--font-color)',
        'landing-page-orange': 'var(--landing-page-orange)',
        'about-page-orange': 'var(--about-page-orange)',
        'works-page-svg-green': 'var(--works-page-svg-green)',
        'works-page-green': 'var(--works-page-green)',
        'contact-page-blue': 'var(--contact-page-blue)',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'], 
        'mera': ['"Mera Pro"', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
