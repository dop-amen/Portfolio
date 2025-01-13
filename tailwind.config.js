/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font family
      fontFamily: {
        'code': ['"Fira Code"'],
      },
      colors: {
        'menuColor': '#ABB2BF',
        'hoverColor': '#FFFFFF',
        'headingColor': '#C778DD',
      },
    },
  },
  plugins: [],
}

