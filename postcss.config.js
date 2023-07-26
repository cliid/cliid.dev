module.exports = {
  plugins: {
    ...(process.env.NODE_ENV === 'production' && {
      'postcss-import': {},
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      },
      cssnano: {}
    }),
    tailwindcss: {},
    autoprefixer: {}
  }
};
