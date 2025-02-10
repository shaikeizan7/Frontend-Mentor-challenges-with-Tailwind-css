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
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        "Light-Grey": "hsl(217, 12%, 63%)",
        "Medium-Grey": "hsl(216, 12%, 54%)",
        "Dark-Blue": "hsl(213, 19%, 18%)",
        "Very-Dark-Blue": " hsl(216, 12%, 8%)",
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
