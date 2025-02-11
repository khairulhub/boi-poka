/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
 
        900: '#1a202c',
      },

    },
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

