/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/imgs/PPE.jpg')",
      },
      gridTemplateColumns: {
        "service-cards": "repeat(auto-fill,minmax(20em,1fr))",
      },
      height: {
        100: "30rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
