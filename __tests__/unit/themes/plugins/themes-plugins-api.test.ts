import type { CSSRuleObject } from 'tailwindcss/types/config';
import { describe, test } from 'vitest';

import { cssPropertiesToTw } from '@/styles/themes/plugins/api';

import { expectToDeepEqual } from '@test/assets';

describe('Theme plugins API', () => {
  test('Convert React`s CSSProperties to CSS-in-JS', () => {
    const converted = cssPropertiesToTw({
      background: 'red',
      scale: 0.1,
      opacity: undefined,
    });

    const real: CSSRuleObject = {
      background: 'red',
      scale: '0.1',
      opacity: null,
    };

    expectToDeepEqual(converted, real);
  });
});
