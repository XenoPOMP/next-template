import type { Meta } from '@storybook/nextjs';

import { VStack } from '@/components/ui';
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
    VStack,
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

export const MultipleTabViews = builder.buildStory({
  // eslint-disable-next-line jsdoc/require-jsdoc
  render: () => (
    <VStack
      alignment='topLeading'
      spacing='3.2rem'
    >
      <TabView>
        <Tab name='Properties'>Properties</Tab>
        <Tab name='Other'>Other?</Tab>
      </TabView>

      <TabView>
        <Tab name='First'>First tab</Tab>
        <Tab name='Second'>Second tab</Tab>
      </TabView>
    </VStack>
  ),
});
