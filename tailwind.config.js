/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {},
  },

  darkMode: 'class',

  plugins: [
    require("./src/assets/plugins/bg-plugin"),
    require("./src/assets/plugins/rotate-plugin"),
    require("./src/assets/plugins/font-plugin"),
  ],
}
