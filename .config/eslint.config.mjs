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
            ArrowFunctionExpression: true,
            FunctionExpression: true,
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
