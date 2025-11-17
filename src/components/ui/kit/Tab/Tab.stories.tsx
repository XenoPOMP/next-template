import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { Tab } from './Tab';

const meta = {
  title: 'UI Kit / Tab',
  component: Tab,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tab>;

export default meta;

const builder = new StoryBuilder<typeof Tab>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
