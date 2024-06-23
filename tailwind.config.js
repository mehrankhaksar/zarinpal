/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-wave": "url('../images/hero-wave.svg')",
      },
    },
  },
  plugins: [],
};
