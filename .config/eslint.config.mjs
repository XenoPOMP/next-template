import xenopomp from 'eslint-config-xeno';

export default xenopomp(
  {},
  {
    name: 'JSDoc',
    rules: {
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: false,
            ClassDeclaration: false,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
        },
      ],
    },
  },
  {
    name: 'Disable default styles',
    rules: {
      'style/brace-style': 'off',
    },
  },
);
