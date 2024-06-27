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
        LBorder: '#098CE31A',
        BlurHR: '#00000040',
        Verified: '#1CAA77',
        Notch: '#0000001A',
        Slider: '#0000001A',
        HR:'#FFFDF1',
        Support:'#FFFDF1',
        Sub:'#00000080',
        Danger: '#DC143C',
      },
    },
  },
  plugins: [],
};
