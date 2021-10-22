module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-preset-env': {
      autoprefixer: {}
    },
    cssnano: { preset: 'default' }
  }
};
