/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base:    "#050505",   // Jett black — page canvas
        jett:    "#050505",   // Jett black
        silver:  "#C0C0C0",   // Moonlit Silver
        cobalt:  "#2C3480",   // Cobalt Blue Deep
        panel:   "#0A0B10",   // card surface
        lift:    "#181B36",   // elevated surface
        accent:  "#2C3480",   // Cobalt Blue Deep — interactive
        viola:   "#4A4A52",   // mid grey
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