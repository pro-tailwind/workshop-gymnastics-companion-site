/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{pages,components}/**/*.{js,jsx,ts,tsx}',
    './workshop/{exercises,solutions}/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('./bgStripesPlugin')],
}
