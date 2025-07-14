import { describe, expect, test } from 'vitest';

import type { VStack } from '@/components/ui';
import meta from '@/components/ui/VStack/VStack.stories.tsx';
import { StoryBuilder } from '@/utils/storybook';

describe('StoryBuilder', () => {
  test('It renders', () => {
    const builder = new StoryBuilder<typeof VStack>()
      .defineMeta(meta)
      .defineSharedProps({
        children: 'CHILDREN',
        asChild: false,
      });

    const story = builder.buildStory({});
    expect(story).to.deep.equal({
      args: {
        children: 'CHILDREN',
        asChild: false,
      },
    });
  });
});
