/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      height: {
        '100vh': '100vh',
      },
    },
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  variants: {},
  plugins: [],
};