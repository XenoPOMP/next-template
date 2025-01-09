import type { Meta, StoryObj } from '@storybook/react';

import DesignSystem from './DesignSystem';

const meta = {
  title: 'Design system',
  component: DesignSystem,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof DesignSystem>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
