/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base:   "#0A0A0A",   // page canvas — near-black
        panel:  "#111113",   // card surface
        lift:   "#2B2B31",   // elevated surface
        accent: "#8E8E97",   // silver — interactive
        viola:  "#4A4A52",   // mid grey
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans:    ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}