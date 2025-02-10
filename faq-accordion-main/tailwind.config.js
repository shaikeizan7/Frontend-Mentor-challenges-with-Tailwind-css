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
        "dark-purple": "#301534",
        purple: "#AD28EB",
        "pale-purple": "#8B6990",
        "light-purple": "#F8EEFF",
      },
      backgroundImage: {
        "bg-mobile": "url('../assets/images/background-pattern-mobile.svg')",
        "bg-desktop": "url('../assets/images/background-pattern-desktop.svg')",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
