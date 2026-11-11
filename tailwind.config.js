/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        paper: "#fafaf8",
        orange: { DEFAULT: "#ff5a1f", soft: "#ffe3d6" },
        sky: { DEFAULT: "#2f6fed", soft: "#e4edff" },
        muted: "#6b6a65",
      },
      fontFamily: {
        display: ['"Archivo Black"', "sans-serif"],
        sans: ['"Archivo"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
