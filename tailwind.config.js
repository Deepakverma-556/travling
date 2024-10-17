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
        'text-xxl': '56px',
      },
      colors: {
        darkgrey:'#333333',
        lightgrey:'#8f8f8f',
        orange:'#fa8443',
        blue: '#347f90',
        primary: '#42a7c3',
        darkorange: '#fe5a00',
        grey:'#f0f0f0'
      },
      lineHeight: {
        '2xl':'69px',
      },
      maxWidth: {
        sm: '136px',
      }
    },
  },
  plugins: [],
}