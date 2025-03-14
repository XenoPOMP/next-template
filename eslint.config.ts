import xenopomp from 'xenopomp-essentials/eslint';

export default xenopomp(
  {
    rules: {
      'style/brace-style': 'off',
    },
  },
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
);
