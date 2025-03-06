import xenopomp from 'eslint-config-xeno';

export default xenopomp(
  {},
  {
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
);
