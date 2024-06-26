/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Regular: 'Poppins-Regular',
      Medium: 'Poppins-Medium',
      Semibold: 'Poppins-SemiBold',
    },
    extend: {
      colors: {
        primary: '#0870FF',
        background: '#098CE31A',
        Border: '#098CE3',
        BlurHR: '#00000040',
        Verified: '#1CAA77',
      },
    },
  },
  plugins: [],
};
