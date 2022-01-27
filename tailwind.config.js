module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#000',
      secondary: '#0C786C',
      default: '#FFF',
    },
    fontFamily: {
      sans: ['Lato'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
