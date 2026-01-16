/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/features/**/components/**/*.tsx",
    "./src/features/**/routes/**/*.tsx",
  ],
  theme: {
    extend: {
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      height: {
        inher: "inherit",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        portfolioDark: {
          "primary": "#8c9bb4",
          "primary-content": "#ffffff",
          "secondary": "#b5b5b5",
          "secondary-content": "#212121",
          "accent": "#47bc9b",
          "accent-content": "#ffffff",
          "neutral": "#272d37",
          "neutral-content": "#d1d7e1",
          "base-100": "#262b33",
          "base-200": "#1e2229",
          "base-300": "#2f343f",
          "base-content": "#ffffff",
          "info": "#47bc9b",
          "info-content": "#ffffff",
          "success": "#8f9d6a",
          "success-content": "#ffffff",
          "warning": "#f9ee98",
          "warning-content": "#312f1e",
          "error": "#cf6a4c",
          "error-content": "#ffffff",
        },
      },
    ],
    darkTheme: "portfolioDark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
