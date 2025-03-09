/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Raleway": ["Raleway", "sans-serif"],
      "Oxanium": ["Oxanium", "sans-serif"],
    },
    extend: {
      spacing: {
        'max-width': '1324px',
      },
      colors: {
        'BackgroundColor': '#fff3e0',
      },
    },
  },
  plugins: [],
}