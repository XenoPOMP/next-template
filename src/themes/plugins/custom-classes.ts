import plugin from 'tailwindcss/plugin';
import type { CSSRuleObject } from 'tailwindcss/types/config';

import { cssPropertiesToTw } from '../api';

// eslint-disable-next-line jsdoc/require-jsdoc
function createComponent(
  name: string,
  value: CSSRuleObject,
): Record<string, CSSRuleObject> {
  return {
    [name]: value,
  };
}

// eslint-disable-next-line jsdoc/require-jsdoc
const createScrollable = (axis: string) =>
  createComponent(`.scrollable-${axis}`, {
    [`overflow${axis.toUpperCase()}`]: 'auto',
  });

/**
 * Add custom classes and utilities to tailwind.
 * @constructor
 */
export const CustomClassesPlugin = () => {
  return plugin(({ addComponents }) => {
    addComponents({
      '.flex-center': cssPropertiesToTw({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }),

      ...createScrollable('x'),
      ...createScrollable('y'),
    });
  });
};
