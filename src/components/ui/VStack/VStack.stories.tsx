import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { VStack } from './VStack';

const meta = {
  title: 'UI / VStack',
  component: VStack,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VStack>;

export default meta;

const builder = new StoryBuilder<typeof VStack>()
  .defineMeta(meta)
  .defineSharedProps({
    children: (
      <>
        <p>VStack</p>
        <p>Works</p>
      </>
    ),
  });

export const Base = builder.buildStory({});
