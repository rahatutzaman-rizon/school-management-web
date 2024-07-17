/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          600: '#003366',
          700: '#002855',
          800: '#001f44',
        },
      },
    },
  },
  plugins: [],
}

