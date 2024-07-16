/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/imgs/PPE.jpg')",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
