/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  // color pallete: https://colorhunt.co/palette/161853292c6dfaedf0ec255a
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        main: "#3494E6",
        secondry: "#EC6EAD",
        mainTextLight: "#1D2671",
        white: "#FAEDF0",
        darkBgMain: "#C33764",
        textdarkMain: "#FAEDF0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
