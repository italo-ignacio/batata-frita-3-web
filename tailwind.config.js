/** @type {import('tailwindcss').Config} */

const colors = require('./src/presentation/style/palette/colors.json');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.tsx'],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('scrollbar', '&::-webkit-scrollbar');
    })
  ],
  theme: {
    colors,
    extend: {
      boxShadow: {
        base: '0px 0px 7px 2px rgba(0,0,0,0.2)'
      }
    },
    screens: {
      desktop: '1281px',
      laptop: '1024px',
      tablet: '768px'
    }
  }
};
