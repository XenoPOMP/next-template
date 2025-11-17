import type { Meta, StoryObj } from '@storybook/nextjs';

import { SplitView } from './SplitView';

const meta = {
  title: 'UI Kit / SplitView',
  component: SplitView,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof SplitView>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  style: {
    maxWidth: '300px',
  },
  children: 'Split view',
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
