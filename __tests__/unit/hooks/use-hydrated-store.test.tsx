import { describe, test } from 'vitest';

import { createStorageKey } from '@/utils/misc';
import { useHydratedStore } from '@/zustand';
import { createPersistentStore } from '@/zustand/utils';

import { assertHookRendering } from '@test/assets';

const testStore = createPersistentStore(() => ({ data: '' }), {
  name: createStorageKey('test', 'store'),
});

describe('useHydratedStore hook', () => {
  test('It renders', () => {
    assertHookRendering(() => useHydratedStore(testStore, s => s));
  });
});
