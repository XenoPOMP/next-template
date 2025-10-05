import type { Meta } from '@storybook/react';

import { StackAlignmentPreview } from '@/components/ui/VStack/Preview.tsx';
import { StoryBuilder } from '@/utils/storybook';

import { VStack } from './VStack';

const meta = {
  title: 'UI / Stacks / VStack',
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
export const Alignment = builder.buildStory({
  // eslint-disable-next-line jsdoc/require-jsdoc
  render: () => <StackAlignmentPreview stackType='vstack' />,
});
