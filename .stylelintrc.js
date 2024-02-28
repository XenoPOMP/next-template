module.exports = {
  rules: {
    'block-no-empty': [
      true,
      {
        severity: 'error',
      },
    ],
    'property-no-vendor-prefix': null,

    'selector-class-pattern': [
      '^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$',
      {
        severity: 'error',
      },
    ],
    'scss/at-function-pattern': [
      '^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$',
      {
        severity: 'error',
      },
    ],
    'scss/at-mixin-pattern': [
      '^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$',
      {
        severity: 'error',
      },
    ],
    'scss/dollar-variable-pattern': [
      '^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$',
      {
        severity: 'error',
      },
    ],

    'scss/no-global-function-names': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
  },
  defaultSeverity: 'warning',
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss',
    'stylelint-config-tailwindcss/scss',
  ],
};
