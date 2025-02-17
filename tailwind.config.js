/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          suisse: ['SuisseWorks', 'Georgia', 'Times', '"Times New Roman"', 'serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        },
      },
    },
    plugins: [],
  }