module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cyan: "#4D96A9",
        purple: "#855FB1",
        "dark-blue": "#28283D",
      },
      backgroundImage: {
        "bg-mobile": "url('/assets/mobile/image-footer.jpg')",
        "bg-desktop": "url('/assets/desktop/image-footer.jpg')",
      },
      fontFamily: {
        sans: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
