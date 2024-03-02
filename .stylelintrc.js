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

/**
 * Create rule with error severity.
 * @type {[boolean,{severity: string}]}
 */
const WITH_ERROR = [
  true,
  {
    severity: 'error',
  },
];

module.exports = {
  rules: {
    'block-no-empty': WITH_ERROR,
    'property-no-vendor-prefix': null,

    'declaration-block-no-duplicate-properties': WITH_ERROR,
    'no-duplicate-selectors': WITH_ERROR,
    'comment-no-empty': WITH_ERROR,
    'declaration-no-important': WITH_ERROR,

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
};
