const { withSeverity } = require('./with-severity');

/**
 * Wraps rule with error severity.
 *
 * @template Value extends any
 * @param value {Value}
 * @return {[Value,{severity: string}]}
 */
const withError = value => withSeverity(value, 'error');

module.exports = {
  withError,
};
