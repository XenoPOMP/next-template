import { describe, test } from 'vitest';

import { Accordion } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Accordion component', () => {
  test('It renders', () => {
    assertRendering(
      <Accordion>
        <Accordion.Collapse>Collapse</Accordion.Collapse>
        <Accordion.Body>Body</Accordion.Body>
      </Accordion>,
    );
  });
});
