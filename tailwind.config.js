const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      primary: '#B0746D',
      light: '#D4B3AF',
      dark: '#96222A',
      background: '#FBEEEF',
      complementary: '#FFD9D7',
      yellow: colors.yellow
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
