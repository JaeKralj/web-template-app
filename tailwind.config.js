/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      dmsans: ['dm sans', 'sans-serif'],
      generalsans: ['general sans', 'sans-serif'],
      'clash-display': ['clash display', 'serif'],
    },
    extend: {
      colors: {
        black: '#0E0F10',
        white: '#FFFFFF',
        secondary: '#C7CAFE',
      },
      backgroundImage: {
        gradient: 'linear-gradient(266.55deg, #FF715B 2.21%, #5132C0 103.26%)',
      },
    },
  },
  plugins: [],
}

/** 
 ** font family
 *  clash display
 *  general sans
 * DM Sans

*/
