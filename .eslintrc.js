module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:import/typescript',
    'prettier'
  ],
  plugins: ['simple-import-sort', 'unused-imports', 'prettier'],
  rules: {
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'none',
        bracketSpacing: true
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/no-unescaped-entities': 0
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
