/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-auto": "repeat(2, auto)",
      },
      screens: {
        msm: "550px",
        xsm: "420px",
        xxsm: "300px",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
