/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Hanken Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-1": "#1125D6",
        "red-1": "#FF5555",
        "yellow-1": "#FFB21E",
        "green-1": "#00BB8F",
        "dark-navy": "#303B59",
        "navy-blue": "#CAC9FF",
      },
    },
  },
  plugins: [],
};
