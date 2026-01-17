/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/features/**/components/**/*.tsx",
    "./src/features/**/routes/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Consolas', 'monospace'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
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
      boxShadow: {
        'glow-green': '0 0 8px oklch(74% 0.18 142 / 0.4), 0 0 16px oklch(74% 0.18 142 / 0.2)',
        'glow-purple': '0 0 8px oklch(68% 0.22 295 / 0.4), 0 0 16px oklch(68% 0.22 295 / 0.2)',
        'glow-blue': '0 0 8px oklch(68% 0.15 230 / 0.4), 0 0 16px oklch(68% 0.15 230 / 0.2)',
      },
    },
  },
};
