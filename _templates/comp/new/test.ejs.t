---
to: __tests__/unit/components/<%= h.changeCase.paramCase(name) %>/component.test.tsx
---
import { describe, test } from 'vitest';

import { <%= h.changeCase.pascalCase(name) %> } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('<%= h.changeCase.pascalCase(name) %> component', () => {
  test('It renders', () => {
    assertRendering(<<%= h.changeCase.pascalCase(name) %> />);
  });
});
