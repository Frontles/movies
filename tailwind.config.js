/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
console.log(colors);
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    extend: {

      fontFamily: {
        gemunu: ['Gemunu Libre', 'Sans Serif'],
        open: ['Open Sans', 'Sans Serif']
      },
      spacing: {
        '128': '32rem',
      }
    },
    colors: {
      ...colors,
      'gega-red': "#BC1A45",
      'gega-melon': '#FFD369',
      'gega-grey': '#DDDDDD',
      'gega-white': '#F7F7F7',
      'black': '#000000',
    },
    container: {
      center: true,
      screens: {
        xl: '1140px',
        lg: '1140px',
        '2xl': '1140px',
      }
    },

  },
  plugins: [],
}