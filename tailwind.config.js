/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      height: {
        '100vh': '100vh',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  variants: {},
  plugins: [],
};
