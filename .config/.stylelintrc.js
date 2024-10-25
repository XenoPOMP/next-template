const { CAMEL_CASE, withError, withWarning } = require('./helpers/stylelint');

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
