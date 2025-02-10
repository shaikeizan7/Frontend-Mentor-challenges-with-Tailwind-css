/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      frans: ["Fraunces"],
    },
    letterSpacing: {
      widest: ".5em",
    },
    extend: {
      colors: {
        cream: "#F2EAE2",
        "gun-metal": "#1C232B",
        green: "#3D8168",
        grey: "#6C7289",
      },
    },
  },
  plugins: [],
};
