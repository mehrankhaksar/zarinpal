/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-wave": "url('../images/hero-wave.svg')",
        "hero-arrow-background": "url('../images/hero-arrow-background.svg')",
      },
    },
  },
  plugins: [],
};
