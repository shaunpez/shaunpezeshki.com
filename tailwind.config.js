/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md}", // Adjust this path if your file structure is different
  ],
  theme: {
    extend: {
      container: {
        screens: {
          lg: '1080px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}