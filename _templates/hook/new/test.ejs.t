---
to: __tests__/unit/hooks/<%= h.changeCase.paramCase(name) %>/hook.test.ts
eol_last: true
---
import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { <%= h.changeCase.camelCase(name) %> } from '@/hooks';

import { assertHookRendering, create<%= h.changeCase.pascalCase(name) %>Test } from '@test/assets';

describe('<%= h.changeCase.camelCase(name) %>', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => <%= h.changeCase.camelCase(name) %>());
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUseSusTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});
