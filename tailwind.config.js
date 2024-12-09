/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./greeting.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsApp: {
          500: "#25D366",
        },
        faceBook: {
          500: "#1877F2",
        },
        instaGram: {
          500: "#E4405F",
        },
      },
      fontFamily: {
        ptSerif: ['"PT Serif", serif'],
      },
    },
  },
  plugins: [],
}

