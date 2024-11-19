

// /** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui'
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         Poppins:['sans','serif'],
//     },
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// },
// }















/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'), 
  ],
};