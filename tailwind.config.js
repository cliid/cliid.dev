const colors = require('tailwindcss/colors');

module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css,scss,sass}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' }
          }
        }
      },
      animation: {
        shrink: 'shrink 1.5s infinite',
        expand: 'expand 1.5s infinite',
        'gradient-foreground-anim-1': 'gradient-foreground-1 8s infinite'
      },
      colors: {
        primary: {
          DEFAULT: '#F96F6F',
          50: '#FEDDDD',
          100: '#FDD1D1',
          200: '#FCB8B8',
          300: '#FBA0A0',
          400: '#FA8787',
          500: '#F96F6F',
          600: '#F74848',
          700: '#F62121',
          800: '#E40A0A',
          900: '#BD0808'
        },
        bg: '#fff',
        'dark-bg': '#000000',
        text: '#222',
        'dark-text': '#bbb',
        border: '#e5e5e5',
        'dark-border': '#333333',
        'spotify-green': '#1db954',
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
  }
};
