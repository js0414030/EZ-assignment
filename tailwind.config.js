/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B1F3B",
        accent: "#FF7A00",
      },
      fontFamily: {
      playfair: ["Playfair Display", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  }
  },
  plugins: [],
}
