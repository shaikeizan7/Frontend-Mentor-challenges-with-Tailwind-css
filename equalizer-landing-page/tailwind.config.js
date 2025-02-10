/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440",
    },
    extend: {
      backgroundImage: {
        "desk-image": "url('/assets/bg-main-desktop.png')",
        "mobile-image": "url('/assets/bg-main-mobile.png')",
      },
      fontFamily: {
        sans: ["IBM-Plex-Sans", "sans-serif"],
      },
      colors: {
        orange: "#FA7453",
      },
    },
  },
  plugins: [],
};
