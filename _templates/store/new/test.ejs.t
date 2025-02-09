---
to: __tests__/unit/zustand/<%= h.changeCase.paramCase(name) %>.test.tsx
---
import { describe, test } from 'vitest';

import { DEFAULT_SELECTOR, use<%= h.changeCase.pascalCase(name) %> } from '@/zustand';

import { assertHookRendering } from '@test/assets';

describe('SettingsStore', () => {
  test('It renders', () => {
    assertHookRendering(() => use<%= h.changeCase.pascalCase(name) %>(DEFAULT_SELECTOR));
  });
});

