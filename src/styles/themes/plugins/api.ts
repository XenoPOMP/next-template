import { getObjectEntries } from '@xenopomp/advanced-utils';
import { type CSSProperties } from 'react';
import { type CSSRuleObject } from 'tailwindcss/types/config';

/**
 * Converts React`s CSSProperties to **CSS-in-JS** object.
 *
 * @param styles
 */
export const cssPropertiesToTw = (styles: CSSProperties): CSSRuleObject => {
  const result: CSSRuleObject = {};

  const appendResult = (key: string, value: null | string) => {
    result[key] = value;
  };

  getObjectEntries(styles).forEach(([cssProperty, value]) => {
    /** Convert number value to string. */
    if (typeof value === 'number') {
      appendResult(cssProperty, value.toString());
      return;
    }

    /** Convert undefined to null. */
    if (typeof value === 'undefined') {
      appendResult(cssProperty, null);
      return;
    }

    /** Finally, append string to result. */
    appendResult(cssProperty, value);
  });

  return result;
};
