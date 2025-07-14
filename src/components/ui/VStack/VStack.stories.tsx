import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { VStack } from './VStack';

const meta = {
  title: 'UI Kit / VStack',
  component: VStack,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VStack>;

export default meta;

const builder = new StoryBuilder<typeof VStack>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
