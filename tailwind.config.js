/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'title-color': '#26272A',
        'playlistBg': '#0f0f0f',
        'footer-bg': '#3E3A39',

      },
      fontFamily: {
        'nunito':['Nunito','sans-herif']
      }
    },
  },
  plugins: [],
}
