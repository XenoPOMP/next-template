import type { ValidateCallback } from '../index';

// eslint-disable-next-line jsdoc/require-jsdoc
export const onDateValidate: ValidateCallback = (prev, e) => {
  const input = e.target.value;
  const diff = input.replace(new RegExp(`^${prev}`), 'g');

  // Block dot input on certain condition
  if (diff === '.') {
    const pattern =
      // eslint-disable-next-line regexp/no-useless-quantifier,regexp/optimal-quantifier-concatenation,regexp/no-unused-capturing-group
      /(^(\d{1,2}\.){1}$)|(^(\d{1,2}\.){1}\d{1}$)|(^(\d{1,2}\.){2}$)|(^(\d{1,2}\.){2}\d{1}$)|(^(\d{1,2}\.){2}\d{1}\d{1}$)/;

    // Dot pattern is detected
    if (pattern.test(input)) {
      return false;
    }
  }

  return true;
};
