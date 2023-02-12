const Color = require('color');

const primaryColor = "#1f12ff"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "../../packages/ui/**/*.{html,js,svelte,ts}",
    "./components/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primaryColor,
          light: Color(primaryColor).lighten(0.2).hex(),
          dark: Color(primaryColor).darken(0.2).hex()
        },
        secondary: {
          DEFAULT: Color("#ffffff").darken(0.9).string()
        },
        border: {
          dark: Color("#ffffff").alpha(0.2).string(),
          light: Color("#000000").alpha(0.2).string()
        }
      },
    },
  },
  plugins: [],
}
