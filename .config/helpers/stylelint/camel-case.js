const { withSeverity } = require('./with-severity');

/** Rule for pattern names (like, class selector names etc.) */
const CAMEL_CASE = withSeverity(
  '^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$',
  'error',
);

module.exports = {
  CAMEL_CASE,
};
