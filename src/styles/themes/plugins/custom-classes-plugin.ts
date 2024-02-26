import plugin from 'tailwindcss/plugin';

import { cssPropertiesToTw } from './api';

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
    });
  });
};
