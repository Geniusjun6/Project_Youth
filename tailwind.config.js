/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'YouthColor': {
        'm': '#5170FD',
        's': '#4636FC',
        'i': '#AEE1FC'
      },
      'TextColor': {
        'gray': '#f2f2f2',
        'gray2': '#8d8d8d'
      }
    },
  },
  plugins: [],
}

