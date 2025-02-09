---
to: __tests__/unit/hooks/<%= h.changeCase.paramCase(name) %>/hook.test.ts
eol_last: true
---
import { describe, test } from 'vitest';

import { <%= h.changeCase.camelCase(name) %> } from '@/hooks';

import { assertHookRendering } from '@test/assets';

describe('<%= h.changeCase.camelCase(name) %>', () => {
  test('It renders', () => {
    assertHookRendering(() => <%= h.changeCase.camelCase(name) %>());
  });
});
