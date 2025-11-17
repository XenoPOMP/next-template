// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import xenopomp from 'xenopomp-essentials/eslint';

export default xenopomp(
  {
    // Prohibit deprecated symbols.
    deprecation: 'error',
    // Additional internal cfg rules.
    rules: {
      'style/brace-style': 'off',
      'style/quote-props': 'off',
      'style/indent-binary-ops': 'off',
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
  {
    name: 'Ignore files',
    ignores: ['**/*.md'],
  },
  ...storybook.configs['flat/recommended'],
);
