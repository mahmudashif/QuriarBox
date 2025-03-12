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
        'BasicOrange': '#F95C19',
        'BasicGray': '#464558',
        'footerPrimary' : '#222132',
        'footerSecondary' : '#2f2e41',
      },
    },
  },
  plugins: [],
}