import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { HStack } from './HStack';

const meta = {
  title: 'UI / HStack',
  component: HStack,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HStack>;

export default meta;

const builder = new StoryBuilder<typeof HStack>()
  .defineMeta(meta)
  .defineSharedProps({
    children: (
      <>
        <p>HStack</p>
        <p>Works</p>
      </>
    ),
  });

export const Base = builder.buildStory({});
