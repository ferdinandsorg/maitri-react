/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'archivo': ['"Archivo"', 'sans-serif'],
      },
      colors: {
        primary: '#E4C1F9',
        secondary: '#C2E812',
        configurator: {
          1: '#2D2D2A',
          2: '#55C1FF',
          3: '#715AFF',
          4: '#FF7F11',
          5: '#4E148C'
        }
      }
    }
  },
  plugins: [],
}