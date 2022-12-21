/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/features/**/components/**/*.tsx",
    "./src/features/**/routes/**/*.tsx",
  ],
  theme: {
    colors: {
      primary: {
        1100: "#171b21",
        1000: "#272d37",
        900: "#3a4353",
        800: "#4e5a6e",
        700: "#61708a",
        600: "#7587a6",
        500: "#8c9bb4",
        400: "#a3afc3",
        300: "#bac3d2",
        200: "#d1d7e1",
        100: "#e3e7ed",
      },
      secondary: {
        1100: "#212121",
        1000: "#373737",
        900: "#535353",
        800: "#6f6f6f",
        700: "#8b8b8b",
        600: "#a7a7a7",
        500: "#b5b5b5",
        400: "#c4c4c4",
        300: "#d3d3d3",
        200: "#e1e1e1",
        100: "#ededed",
      },
      danger: {
        1100: "#29150f",
        1000: "#452319",
        900: "#673526",
        800: "#8a4632",
        700: "#ac583f",
        600: "#cf6a4c",
        500: "#d78269",
        400: "#df9b87",
        300: "#e7b4a5",
        200: "#efcdc3",
        100: "#f5e1db",
      },
      success: {
        1100: "#1c1f15",
        1000: "#2f3423",
        900: "#474e35",
        800: "#5f6846",
        700: "#778258",
        600: "#8f9d6a",
        500: "#a1ad82",
        400: "#b4bd9b",
        300: "#c7ceb4",
        200: "#d9decd",
        100: "#e8ebe1",
      },
      warning: {
        1100: "#312f1e",
        1000: "#534f32",
        900: "#7c774c",
        800: "#a69e65",
        700: "#cfc67e",
        600: "#f9ee98",
        500: "#faf0a9",
        400: "#fbf3ba",
        300: "#fcf6cb",
        200: "#fdf9dc",
        100: "#fdfbea",
      },
      info: {
        1100: "#0e251f",
        1000: "#173e33",
        900: "#235e4d",
        800: "#2f7d67",
        700: "#3b9c81",
        600: "#47bc9b",
        500: "#65c7ab",
        400: "#84d2bc",
        300: "#a3ddcd",
        200: "#c1e8dd",
        100: "#daf1eb",
      },

      text: {
        1100: "#1b1f24",
        1000: "#2e343c",
        900: "#454f5a",
        800: "#5c6978",
        700: "#738396",
        600: "#8b9eb5",
        500: "#9eaec1",
        400: "#b1becd",
        300: "#c5ceda",
        200: "#d8dee6",
        100: "#e7ebf0",
      },
      dark: "#262b33",
      "bg-background": "#2f343f",
      white: "#ffffff",
    },
    textColor: {
      primary: {
        1100: "#171b21",
        1000: "#272d37",
        900: "#3a4353",
        800: "#4e5a6e",
        700: "#61708a",
        600: "#7587a6",
        500: "#8c9bb4",
        400: "#a3afc3",
        300: "#bac3d2",
        200: "#d1d7e1",
        100: "#e3e7ed",
      },
      secondary: {
        1100: "#212121",
        1000: "#373737",
        900: "#535353",
        800: "#6f6f6f",
        700: "#8b8b8b",
        600: "#a7a7a7",
        500: "#b5b5b5",
        400: "#c4c4c4",
        300: "#d3d3d3",
        200: "#e1e1e1",
        100: "#ededed",
      },
      danger: {
        1100: "#29150f",
        1000: "#452319",
        900: "#673526",
        800: "#8a4632",
        700: "#ac583f",
        600: "#cf6a4c",
        500: "#d78269",
        400: "#df9b87",
        300: "#e7b4a5",
        200: "#efcdc3",
        100: "#f5e1db",
      },
      success: {
        1100: "#1c1f15",
        1000: "#2f3423",
        900: "#474e35",
        800: "#5f6846",
        700: "#778258",
        600: "#8f9d6a",
        500: "#a1ad82",
        400: "#b4bd9b",
        300: "#c7ceb4",
        200: "#d9decd",
        100: "#e8ebe1",
      },
      warning: {
        1100: "#312f1e",
        1000: "#534f32",
        900: "#7c774c",
        800: "#a69e65",
        700: "#cfc67e",
        600: "#f9ee98",
        500: "#faf0a9",
        400: "#fbf3ba",
        300: "#fcf6cb",
        200: "#fdf9dc",
        100: "#fdfbea",
      },
      info: {
        1100: "#0e251f",
        1000: "#173e33",
        900: "#235e4d",
        800: "#2f7d67",
        700: "#3b9c81",
        600: "#47bc9b",
        500: "#65c7ab",
        400: "#84d2bc",
        300: "#a3ddcd",
        200: "#c1e8dd",
        100: "#daf1eb",
      },
      text: {
        1100: "#1b1f24",
        1000: "#2e343c",
        900: "#454f5a",
        800: "#5c6978",
        700: "#738396",
        600: "#8b9eb5",
        500: "#9eaec1",
        400: "#b1becd",
        300: "#c5ceda",
        200: "#d8dee6",
        100: "#e7ebf0",
      },
      dark: "#262b33",
      "bg-background": "#2f343f",
      white: "#ffffff",
    },
    extend: {
      colors: {
        gray: {
          1100: "#17181a",
          1000: "#26292c",
          900: "#3a3e42",
          800: "#4d5258",
          700: "#60676e",
          600: "#747c84",
          500: "#8b9198",
          400: "#a2a7ad",
          300: "#b9bdc1",
          200: "#d0d3d6",
          100: "#e3e4e6",
        },
      },
      height: {
        inher: "inherit",
      },
      backgroundColor: {
        dark: "#262b33",
        background: "#2f343f",
      },
    },
  },
  plugins: [],
};
