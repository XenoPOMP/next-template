/**
 * Allows you to choose severity.
 *
 * @template Value extends any
 * @param value {Value}
 * @param severity {string}
 * @return {[Value,{severity: string}]}
 */
const withSeverity = (value, severity) => [
  value,
  {
    severity,
  },
];

/** Rule for pattern names (like, class selector names etc.) */
const CAMEL_CASE = withSeverity(
  '^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$',
  'error',
);

/**
 * Wraps rule with error severity.
 *
 * @template Value extends any
 * @param value {Value}
 * @return {[Value,{severity: string}]}
 */
const withError = value => withSeverity(value, 'error');

/**
 * Wraps rule with warning severity.
 *
 * @template Value extends any
 * @param value {Value}
 * @return {[Value,{severity: string}]}
 */
const withWarning = value => withSeverity(value, 'warning');

module.exports = {
  rules: {
    // Errors
    'block-no-empty': withError(true),
    'declaration-block-no-duplicate-properties': withError(true),
    'scss/comment-no-empty': withError(true),

    // Warnings
    'no-duplicate-selectors': withWarning(true),
    'declaration-no-important': withWarning(true),

    // Case
    'selector-class-pattern': CAMEL_CASE,
    'scss/at-function-pattern': CAMEL_CASE,
    'scss/at-mixin-pattern': CAMEL_CASE,
    'scss/dollar-variable-pattern': CAMEL_CASE,
    'scss/percent-placeholder-pattern': CAMEL_CASE,

    // Disabled
    'property-no-vendor-prefix': null,
    'scss/no-global-function-names': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'no-empty-source': null,
    'scss/at-if-closing-brace-space-after': null,
    'scss/at-if-closing-brace-newline-after': null,
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
