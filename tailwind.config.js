/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/imgs/PPE.jpg')",
        footwear:
          "url('/assets/imgs/expert-advice-safety-footwear-resources-boot.jpg')",
        safetyfootwear: "url('/assets/imgs/better imgs/safetyfootwearbg.jpg')",
      },
      gridTemplateColumns: {
        "service-cards": "repeat(3,minmax(20em,1fr))",
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
