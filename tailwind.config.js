/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        RobotoSlab: ['Roboto Slab', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#0290ff;',
        'secondary-gray': '#121212;',
        'secondary-blue': ' #4386bf;',
      },
    },
  },
  plugins: [],
};
