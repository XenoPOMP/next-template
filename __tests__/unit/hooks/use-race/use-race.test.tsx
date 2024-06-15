import { describe, test } from 'vitest';

import { expectHookToRender } from '@/__tests__/assets/utilities';
import { useRace } from '@/src/hooks/use-race';

describe('useRace hook', () => {
  test('It renders', () => {
    expectHookToRender(() => useRace('race', async () => {}, {}));
  });
});
