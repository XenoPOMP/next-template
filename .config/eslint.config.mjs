import xenopomp from 'eslint-config-xeno';

export default xenopomp(
  {},
  {
    name: 'Rules breakup #2',
    rules: {
      'style/operator-linebreak': 'off',
      'test/consistent-test-it': 'off',
      'test/prefer-lowercase-title': 'off',
      'style/jsx-quotes': 'off',
      'style/multiline-ternary': 'off',
      'style/indent': 'off',
    },
    ignores: [
      'cypress',
    ],
  },
);
