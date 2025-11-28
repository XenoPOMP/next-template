import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { List } from '@/components/ui/kit';

describe('List component', () => {
  test('It renders', () => {
    assertRendering(
      <List>
        <List.Item>List item 1</List.Item>
        <List.Item>List item 1</List.Item>
        <List.Item>List item 1</List.Item>
      </List>,
    );
  });
});
