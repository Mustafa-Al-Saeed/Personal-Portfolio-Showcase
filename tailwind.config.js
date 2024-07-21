/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      keyframes:{
        "linksShow":{
          "0%": { transform: "scale(0)"},
          "70%": { transform: "scale(1.1)"},
          "100%":{ transform: "scale(1)"}
        }
      },
      animation:{
        "linksShow": "linksShow 0.5s linear  "
      },
      boxShadow: {
        'ul-shadow': '1px 1px 40px #2323242a',
        'icon-shadow': '1px 1px 8px 1px #2323242a',
      },
      colors: {
        'secondary': 'rgb(24 24 27)',
        "main-border": "rgba(63, 63, 70, 0.4 )",
      },
    },
    fontFamily : {
      roboto: ['Roboto', "sans-serif"],
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
