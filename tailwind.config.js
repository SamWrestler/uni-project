/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./*.{js,ts,jsx,tsx}",
    "./public/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'], // Define your custom font family
      },
    },
  },
  plugins: [
  ],
}

