import { describe, test } from 'vitest';

import { expectHookToRender } from '@/__tests__/assets/utilities';
import { useOutSide } from '@/src/hooks';

describe('useOutside hook', () => {
  test('It renders', () => {
    expectHookToRender(() => useOutSide());
  });
});
