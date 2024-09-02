/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "yellow": "hsl(47, 88%, 63%)",
      "gray-500": "hsl(0, 0%, 42%)",
      "gray-950": "hsl(0, 0%, 7%)",
      "white": 'hsl(0, 0%, 100%)',
      "black": '#000',
    },
    extend: {
      fontFamily: {
        figtree: "\"Figtree\", system-ui"
      },
      spacing: {
        '92': '23rem',
        '84': '21rem'
      },
      screens: {
        'xxs': '375px',
        'xs': '420px'
      }
    }
  },
  plugins: [],
}
