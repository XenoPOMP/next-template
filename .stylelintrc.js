/**
 * Rule for pattern names (like, class selector names etc.)
 * @type {[string,{severity: string}]}
 */
const CAMEL_CASE = [
  '^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$',
  {
    severity: 'error',
  },
];

module.exports = {
  rules: {
    'block-no-empty': [
      true,
      {
        severity: 'error',
      },
    ],
    'property-no-vendor-prefix': null,

    'selector-class-pattern': CAMEL_CASE,
    'scss/at-function-pattern': CAMEL_CASE,
    'scss/at-mixin-pattern': CAMEL_CASE,
    'scss/dollar-variable-pattern': CAMEL_CASE,
    'scss/percent-placeholder-pattern': CAMEL_CASE,

    'scss/no-global-function-names': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'no-empty-source': null,
  },
  defaultSeverity: 'warning',
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss',
    'stylelint-config-tailwindcss/scss',
  ],
  ignoreFiles: ['coverage'],
};
