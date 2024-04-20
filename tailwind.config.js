/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
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
        'mera': ['Mera Pro', 'sans-serif'] 
      },
      spacing: {
        '28rem' : '28rem',
        '20rem' : '20rem',
        '35rem' : '35rem',
        '26rem' : '26rem',
        '43rem' : '43rem',
        '64rem' : '64rem',
        '40rem' : '40rem',
        '61.5rem' : '61.5rem',
        '83rem' : '83rem',
        '14rem' : '14rem'
      },
      width: {
        '30rem' : '30rem',
        '445px' : '445px'
      },
      height: {
        '665px' : '665px'
      },
      rotate: {
        '25' : '25deg'
      },
    },
  },
  plugins: [],
}
