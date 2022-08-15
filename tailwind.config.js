/** @type {import('tailwindcss').Config} */
// const tailwindcssVariable = require('@tailwindcss/forms');

// module.exports = {
//   content: [
//     './src/pages/**/*.{js,jsx,ts,tsx}', // <- page에서 사용 할 수 있게 말을 해줘야함 page의 모든 폴더에 모든 파일. 확장자는 저뒤에
//     './src/components/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [tailwindcssVariable],
// };

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
};
