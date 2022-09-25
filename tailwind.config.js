/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary:'#0038FF',
      'blue':'#002CC8',
      'dark-blue':'#0023A1',
      'sapphire': '#001871',
      'light-blue': '#3158FF',
      'navy-blue': '#010024',
      'white': '#FFFFFF',
      'concrete': '#F3F3F3',
      'dark': '#0F0F0F',
      'storm-gray': '#666B84',
      'gray': '#AFB3C7',
    },
  },
  plugins: [],
}