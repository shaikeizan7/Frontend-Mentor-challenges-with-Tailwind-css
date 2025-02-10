/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      frans: ["Fraunces"],
    },
    colors: {
      "dark-purle": "#24053E",
      "davy-grey": "#584D62",
      Eucaplyptus: "#44FFA1",
      "ghost-white": "#FCF8FF",
    },
    extend: {
      screens: {
        sm: "480px", // Custom breakpoint named 'xs'

        lg: "1200px", // Overriding existing 'xl' breakpoint

        md: "768px", // Another custom breakpoint named 'tablet'

        xl: "1440px", // Another custom breakpoint named 'tablet'
      },
    },
  },
  plugins: [],
};
