---
to: __tests__/unit/components/ui-kit/<%= h.changeCase.paramCase(name) %>/component.test.tsx
---
import { describe, test } from 'vitest';

import { <%= h.changeCase.camelCase(name) %> } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('<%= h.changeCase.camelCase(name) %> component', () => {
  test('It renders', () => {
    assertRendering(
      <Accordion>
        <Accordion.Collapse>Collapse</Accordion.Collapse>
        <Accordion.Body>Body</Accordion.Body>
      </Accordion>,
    );
  });
});