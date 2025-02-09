import type { CSSRuleObject } from 'tailwindcss/types/config';
import { describe, expect, test } from 'vitest';

import { cssPropertiesToTw } from '@/styles/themes/plugins/api';

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

    expect(converted).to.deep.equal(real);
  });
});
