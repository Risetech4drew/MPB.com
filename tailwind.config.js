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
        headprotection:
          "url('/assets/imgs/better imgs/headprotection/head-protection-bg.jpg')",
        reflectivewear:
          "url('/assets/imgs/better imgs/hero-bg-reflective-wear.jpg')",
        workwear: "url('/assets/imgs/better imgs/workwear-bg.webp')",
        welding: "url('/assets/imgs/better imgs/welding/welding-bg.jfif')",
        tools: "url('/assets/imgs/better imgs/Tools/tools-bg.jpg')",
        roadsafety:
          "url('/assets/imgs/better imgs/roadsafety/roadsafety-items.jpg')",
        commercial:
          "url('/assets/imgs/better imgs/commercial-printing/commercial-printing-bg.jpg')",
        corporate:
          "url('/assets/imgs/better imgs/corporate-uniforms/corporate-uni-bg.jpg')",
        embroidery:
          "url('/assets/imgs/better imgs/embroidery/from_boos/IMG-20240730-WA0055.jpg')",
        embroideryMachine:
          "url('/assets/imgs/better imgs/embroidery/embroidery-bg.jfif')",

        promo:
          "url('/assets/imgs/better imgs/promo/Banner-PromotionalProducts.webp')",
        screenPrinting:
          "url('/assets/imgs/better imgs/screen-printing/sigma_compressed_0419.jpg')",

        contact: "url('/assets/imgs/better imgs/contact-us/contact-us.jpg')",
      },
      gridTemplateColumns: {
        "service-cards": "repeat(3,minmax(10em,1fr))",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
