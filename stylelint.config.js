module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': [
      true,
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
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'mixin',
          'include',
          'layer'
        ]
      }
    ],
    'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'selector-id-pattern': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-named-instance']
      }
    ],
    'declaration-colon-newline-after': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'value-list-comma-newline-after': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'selector-no-qualifying-type': null
  }
};
