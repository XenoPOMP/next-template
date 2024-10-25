const { withSeverity } = require('./with-severity');

/**
 * Wraps rule with warning severity.
 *
 * @template Value extends any
 * @param value {Value}
 * @return {[Value,{severity: string}]}
 */
const withWarning = value => withSeverity(value, 'warning');

module.exports = {
  withWarning,
};
