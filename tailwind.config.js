// @ts-check

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './constants/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'gradient-1-end': '#d100d1',
      'gradient-1-start': '#f20089',
      'gradient-to-br': '#e3342f'
    }),
    extend: {
      animation: {
        shrink: 'shrink 1.5s infinite',
        expand: 'expand 1.5s infinite',
        'gradient-foreground-anim-1': 'gradient-foreground-1 8s infinite'
      },
      spacing: {
        '9/16': '56.25%',
        0.25: '0.0625rem',
        0.75: '0.1875rem'
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
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
        text: colors.trueGray[400],
        'dark-text': colors.trueGray[600],
        border: '#e5e5e5',
        'dark-border': '#333333',
        gray: colors.trueGray,
        'spotify-green': '#1db954',
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600')
              },
              code: { color: theme('colors.primary.400') }
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900')
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900')
            },
            h3: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900')
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900')
            },
            code: {
              color: theme('colors.primary.400'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem'
            },
            'code:before': {
              content: 'none'
            },
            'code:after': {
              content: 'none'
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500')
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500')
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400')
              },
              code: { color: theme('colors.primary.400') }
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100')
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100')
            },
            h3: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100')
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100')
            },
            code: {
              backgroundColor: theme('colors.gray.800')
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400')
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400')
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700')
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark'],
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // @ts-ignore
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()'
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    })
  ]
};
