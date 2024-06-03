/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'], // Define your custom font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

