import type { Meta } from '@storybook/nextjs';

import { StoryBuilder } from '@/utils/storybook';

import { TabView } from './TabView';

const meta = {
  title: 'UI Kit / TabView',
  component: TabView,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TabView>;

export default meta;

const builder = new StoryBuilder<typeof TabView>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
