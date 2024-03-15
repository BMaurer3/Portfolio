/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4EFE4",
        textPrimary: "#000000",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Vollkorn: ["Vollkorn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
