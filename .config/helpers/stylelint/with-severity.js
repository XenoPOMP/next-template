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

module.exports = {
  withSeverity,
};
