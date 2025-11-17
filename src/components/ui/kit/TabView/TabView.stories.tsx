import type { Meta } from '@storybook/nextjs';

import { Tab } from '@/components/ui/kit';
import { StoryBuilder } from '@/utils/storybook';

import { TabView } from './TabView';

const meta = {
  title: 'UI Kit / TabView',
  component: TabView,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    Tab,
  },
} satisfies Meta<typeof TabView>;

export default meta;

const builder = new StoryBuilder<typeof TabView>()
  .defineMeta(meta)
  .defineSharedProps({
    children: (
      <>
        <Tab name='Properties'>This is a properties tab</Tab>
        <Tab name='CSS'>Preview CSS code</Tab>
      </>
    ),
  });

export const Base = builder.buildStory({});
