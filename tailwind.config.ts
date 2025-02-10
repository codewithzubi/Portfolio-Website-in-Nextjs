/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      // Updated color names according to Tailwind CSS v3.0+
      lightBlue: colors.sky,   // lightBlue has been renamed to sky
      warmGray: colors.stone,  // warmGray has been renamed to stone
      trueGray: colors.neutral, // trueGray has been renamed to neutral
      coolGray: colors.gray,  // coolGray has been renamed to gray
      blueGray: colors.slate,  // blueGray has been renamed to slate
    },
  },
  plugins: [],
};
