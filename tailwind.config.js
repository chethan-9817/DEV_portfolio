/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sys: {
          bg: "#05060d",
          panel: "#080c1c",
          blue: "#3cc8ff",
          purple: "#a855f7",
          dim: "#7c8db5",
        },
      },
      fontFamily: {
        display: ['"Orbitron"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
