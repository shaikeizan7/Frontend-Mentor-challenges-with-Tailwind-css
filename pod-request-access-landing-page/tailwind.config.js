/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Chivo", "system-ui"],
    },
    extend: {
      backgroundImage: {
        mobile: "url('/assets/mobile/image-host.jpg')",
        desktop: "url('/assets/desktop/image-host.jpg')",
      },
    },
  },
  plugins: [],
};
