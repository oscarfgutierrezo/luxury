/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        seravekmedium: ["seravekmedium"],
      },
      colors: {
        orange: "#fcac00",
        red: "#fe4d2e",
        gainsboro: "#ddd",
      },
    },
  },
  plugins: [],
};
