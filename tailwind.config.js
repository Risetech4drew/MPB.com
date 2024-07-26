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
        handprotection:
          "url('/assets/imgs/better imgs/Handprotection-hero-bg.webp')",
        reflectivewear:
          "url('/assets/imgs/better imgs/hero-bg-reflective-wear.jpg')",
        workwear: "url('/assets/imgs/better imgs/workwear-bg.webp')",
        welding: "url('/assets/imgs/better imgs/welding/welding-bg.jfif')",
        tools: "url('/assets/imgs/better imgs/Tools/tools-bg.jpg')",
        roadsafety:
          "url('/assets/imgs/better imgs/roadsafety/rpadsafety-bg.jfif')",
        commercial:
          "url('/assets/imgs/better imgs/commercial-printing/commercial-printing-bg.jpg')",
        printingImage:
          "url('/assets/imgs/better imgs/commercial-printing/side-picture.jfif')",
        corporate:
          "url('/assets/imgs/better imgs/corporate-uniforms/corporate-uni-bg.jpg')",
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
