/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "raprimary": "#0A0908",
      },
      height: {
        'screen-10': '10vh',
        'screen-90': '90vh',
      }
    },
    plugins: [],
  }
}

