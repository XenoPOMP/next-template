import { CSSRuleObject } from 'tailwindcss/types/config';
import { describe, expect, test } from 'vitest';

import { expectToDeepEqual } from '@/__tests__/assets/utilities/expectToDeepEqual';
import { cssPropertiesToTw } from '@/src/styles/themes/plugins/api';

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
