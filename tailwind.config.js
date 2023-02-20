/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lobster:['Oleo Script', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}
