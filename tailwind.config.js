// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './components/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './lib/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './constants/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx,vue}'
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
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: '#00807D',
          50: '#66FFFB',
          100: '#4DFFFB',
          200: '#1AFFFA',
          300: '#00E6E1',
          400: '#00B3AF',
          500: '#00807D',
          600: '#004D4B',
          700: '#001A19',
          800: '#000000',
          900: '#000000'
        },
        bg: '#f7f9fd',
        'dark-bg': '#09101b',
        text: '#0b1423',
        'dark-text': '#eff4fa',
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
              color: theme('colors.gray.900')
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900')
            },
            code: {
              color: theme('colors.pink.500'),
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
