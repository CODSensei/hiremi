/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0870FF',
        background: '#098CE31A',
        Border:'#098CE3',
        BlurHR:"#00000040"
      },
      fontFamily: {
        Regular:`Poppins-Regular`,
        Medium:`Poppins-Medium`,
        SemiBold:`Poppins-SemiBold`,
      },
    },
  },
  plugins: [],
};
