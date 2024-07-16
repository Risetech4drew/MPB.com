/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/imgs/PPE.jpg')",
      },
      gridTemplateColumns: {
        "service-cards": "repeat(auto-fill,minmax(15em,1fr))",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
