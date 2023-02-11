const Color = require('color');

const primaryColor = "#1f12ff"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "../../packages/ui/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primaryColor,
          light: Color(primaryColor).lighten(0.2).hex(),
          dark: Color(primaryColor).darken(0.2).hex()
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
