/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        eggshell: "#F3E5D7",
        "brandy-red": "#854632",
        "dark-resberry": "#7A284E",
        brown: "#5F564D",
      },
      fontFamily: {
        sans: ["Young Serif", "sans-serif"],
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
