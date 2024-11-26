/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish:["Mullish", "sans-serif"],
      },
      colors  : {
        deepBlue:"#02042a",
        lightBlue:"#2b84ea",
        lightBlue300:"#4b94ed",
        lightBlue500:"#0b72e7",
        greenLight:"#61cea6",
        grayText:"#818597",
        lightGray:"#e2e2e2",
        grayBlue:"#344a6c",
        deepBlueHead:"#162f56",
        gray:"#525a76",
    },
    keyframes: {
      'spin-gradient': {
        '0%, 100%': {
          'box-shadow': '0 0 10px 5px rgba(0, 0, 0, 0.5), 0 0 20px 10px rgba(0, 255, 0, 0.5), 0 0 30px 15px rgba(0, 0, 255, 0.5)',
        },
        '50%': {
          'box-shadow': '0 0 20px 10px rgba(0, 0, 0, 0.5), 0 0 40px 20px rgba(0, 255, 0, 0.5), 0 0 60px 30px rgba(0, 0, 255, 0.5)',
        },
      },
    },
    animation: {
      'spin-gradient': 'spin-gradient 2s infinite linear',
    },},
  },
  plugins: [],
}

