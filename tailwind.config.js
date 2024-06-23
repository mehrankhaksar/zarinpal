/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-wave": "url('../images/hero-wave.svg')",
        "hero-background-arrow": "url('../images/hero-background-arrow.svg')",
      },
    },
  },
  plugins: [],
};
