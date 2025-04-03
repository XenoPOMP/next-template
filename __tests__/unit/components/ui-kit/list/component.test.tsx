import { describe, test } from 'vitest';

import { List } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

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
