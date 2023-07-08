/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'resposive-fit': 'repeat(auto-fit, minmax(25rem, 25rem))'
      },
      keyframes:{
        rightToLeft: {
          'from': {transform: 'translate(0)'},
          'to': {transform: 'translate(-85vw)'}
        },
        leftToRight: {
          'from': {transform: 'translate(-85vw)'},
          'to': {transform: 'translate(0)'}
        },
        arrowHome: {
          '0%':   { transform:'translate(0,-10px) rotate(45deg)', opacity: '0'  },
          '50%':  { opacity: 1  },
          '100%': { transform:'translate(0,10px) rotate(45deg)', opacity: '0' }
        }
      },
      animation: {
        'right-roll': 'leftToRight infinite alternate 180s linear',
        'left-roll': 'rightToLeft infinite alternate 180s linear',
        'arrow-scroll': 'arrowHome 3s ease-in-out infinite'
      }
    },
    fontFamily: {
      "lemon-milk": "var(--font-lemonMilk)",
      "lato": "var(--font-lato)"
    }
  },
  plugins:[],
})