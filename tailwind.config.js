/** @type {import('tailwindcss').Config} */
const overlayGradient = `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 95%, rgba(0,0,0,1) 100%)`;
const overlayedPicture = (url) => `url(${url}), ${overlayGradient}`;
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    backgroundImage: {
      hero: overlayedPicture("/hero.webp"),
      "2dSMLM": overlayedPicture("/2dr.webp"),
      "3dSMLM": overlayedPicture("/3dr.webp"),
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
