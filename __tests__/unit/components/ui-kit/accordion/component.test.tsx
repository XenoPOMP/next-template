import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Accordion } from '@/components/ui/kit';

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
