/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-pattern": "url('/images/pattern-background-mobile.svg')",
        "desktop-pattern": "url('/images/pattern-background-desktop.svg')",
      },
    },
  },

  plugins: [],
};
