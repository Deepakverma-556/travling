/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'text-2xsm': '10px',
        'text-xsm': '12px',
        'text-5xl': '56px',
      },
      colors: {
        darkgray:'#333333',
        lightgray:'#8f8f8f',
        orange:'#fa8443',
        blue:'#347f90',
      },
      lineHeight: {
        'leading-xl':'50px',
        'leading-2xl':'69px',
      }
    },
  },
  plugins: [],
}