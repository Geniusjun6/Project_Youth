/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-top-banner": "url('/image/banner-3.jpg')"
      }
    },
    colors: {
      'youth_color': {
        'm': '#5170FD',
        's': '#4636FC',
        'i': '#AEE1FC'
      },
      'text_color': {
        'gray': '#f2f2f2',
        'gray2': '#8d8d8d'
      },
      'bg_color': '#F9F9F9',
      'bg_gradient': '#000000',
      'bg_white': '#FFFFFF'
    },
  },
  plugins: [],
}

