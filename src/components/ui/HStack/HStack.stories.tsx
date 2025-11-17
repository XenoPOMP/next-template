import type { Meta } from '@storybook/nextjs';

import StackAlignmentPreview from '@/components/ui/VStack/SB_Preview';
import { StoryBuilder } from '@/utils/storybook';

import { HStack } from './HStack';

const meta = {
  title: 'UI / Stacks / HStack',
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
export const Alignment = builder.buildStory({
  // eslint-disable-next-line jsdoc/require-jsdoc
  render: () => <StackAlignmentPreview stackType='hstack' />,
});
