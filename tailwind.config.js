/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'normal': ['1rem', { //16px
        lineHeight: '1.188rem',
        fontWeight: '400',
      }],
      'normal-bold': ['1rem', { //16px
        lineHeight: '1.188rem',
        fontWeight: '700',
      }],
      'sub-title': ['1.125rem', { //18px
        lineHeight: '1.375rem',
        fontWeight: '400',
      }],
      'sub-title-bold': ['1.125rem', { //18px
        lineHeight: '1.375rem',
        fontWeight: '700',
      }],
      'title': ['1.25rem', { //20px
        lineHeight: '1.5rem',
        fontWeight: '400',
      }],
      'title-bold': ['1.25rem', { //20px bold
        lineHeight: '1.5rem',
        fontWeight: '700',
      }],
      'sub-head': ['1.625rem', { //26px
        lineHeight: '1.938rem',
        fontWeight: '400',
      }],
      'sub-head-bold': ['1.625rem', { //26px bold
        lineHeight: '1.938rem',
        fontWeight: '700',
      }],
      'head': ['1.875rem', { //30px
        lineHeight: '2.25rem',
        fontWeight: '400',
      }],
      'head-bold': ['1.875rem', { //30px bold
        lineHeight: '2.25rem',
        fontWeight: '700',
      }],
      'xl': ['2.5rem', { //40px
        lineHeight: '3rem',
        fontWeight: '400',
      }],
      'xl-bold': ['2.5rem', { //40px
        lineHeight: '3rem',
        fontWeight: '700',
      }],
      '2xl': ['2.813rem', { //45px
        lineHeight: '3.375rem',
        fontWeight: '400',
      }],
      '2xl-bold': ['2.813rem', { //45px bold
        lineHeight: '3.375rem',
        fontWeight: '700',
      }],
      '3xl': ['1.875rem', { //50px
        lineHeight: '3.75rem',
        fontWeight: '400',
      }],
      '3xl-bold': ['1.875rem', { //50px bold
        lineHeight: '3.75rem',
        fontWeight: '700',
      }],
      '4xl': ['3.125rem', { //70px bold
        lineHeight: '5.25rem',
        fontWeight: '400',
      }],
      '4xl-bold': ['3.125rem', { //70px bold
        lineHeight: '5.25rem',
        fontWeight: '700',
      }],
    },
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
      'red': '#FF3737',
      'light-gray': "#E8E8E8",
    },
  },
  plugins: []
}