---
to: __tests__/unit/zustand/<%= h.changeCase.paramCase(name) %>.test.tsx
---
import { describe, test } from 'vitest';

import { use<%= h.changeCase.pascalCase(name) %> } from '@/zustand';

import { assertHookRendering } from '@test/assets';

describe('SettingsStore', () => {
  test('It renders', () => {
    assertHookRendering(() => use<%= h.changeCase.pascalCase(name) %>());
  });
});

