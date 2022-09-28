/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        main: "#ffff",
        white: "#ffff",
        darkBgMain: "#1E293B",
        textdarkMain: "#ffff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
