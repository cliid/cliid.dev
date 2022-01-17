// @ts-check

const colors = require('tailwindcss/colors');

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css,scss,sass}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7777FF',
          50: '#D3D3FF',
          100: '#C9C9FF',
          200: '#B4B4FF',
          300: '#A0A0FF',
          400: '#8B8BFF',
          500: '#7777FF',
          600: '#6363FF',
          700: '#4E4EFF',
          800: '#3A3AFF',
          900: '#2525FF'
        },
        bg: '#fff',
        'dark-bg': '#000000',
        text: '#222',
        'dark-text': '#bbb',
        border: '#e5e5e5',
        'dark-border': '#333333',
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
