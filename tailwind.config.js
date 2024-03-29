const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{pages,components}/**/*.{js,jsx,ts,tsx}',
    './workshop/{challenges,solutions}/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('./stripes-plugin'), require('@tailwindcss/typography')],
}
