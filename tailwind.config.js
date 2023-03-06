/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        archivo: ['"Archivo"', "sans-serif"],
      },
      colors: {
        primary: "#E4C1F9",
        secondary: "#C2E812",
        configurator: {
          0: "#2D2D2A",
          1: "#4E148C",
          2: "#55C1FF",
          3: "#715AFF",
          4: "#FF7F11",
        },
      },
    },
    fontWeight: {
      bold: "900",
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: ".25rem 1rem",
          borderRadius: ".25rem",
          color: "#000",
          backgroundColor: "#fff",
          borderRadius: "9999px",
          border: "1px solid #000",
          "&:hover, &.btn-active": {
            backgroundColor: "#000",
            color: "#fff",
          },
        },
        "#content h3": {
          fontWeight: "900",
          fontSize: "1.5rem",
          lineHeight: "2rem",
        },
      });
    }),
  ],
};
