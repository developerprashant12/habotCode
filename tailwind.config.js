// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C",
        secondary: "#123557",
        accent: "#ED64A6",
        buttonColor1: "#00732F",
        buttonColor2: "#3e3b3b"
      },
    },
  },
  plugins: [],
};

export default config;