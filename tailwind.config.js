/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      fontSize: {
        4.5: '40px',
      },
    },
  },
}
