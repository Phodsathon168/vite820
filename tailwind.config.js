/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primayTitle:"#FF5F5D",
        primaryContent:"#FF5F5D",
        primarySubcontent:"#FF5F5D",
        primaryBase:"#FF5F5D",
        primaryAccent:"#FF5F5D",
        primaryBg:"#747E7E",
      }
    },
  },
  plugins: [],
}

