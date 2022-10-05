/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // spacing: {
      //   8: '2rem',
      //   16: '4rem',
      // },
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem',
      },
    },
  },
}
