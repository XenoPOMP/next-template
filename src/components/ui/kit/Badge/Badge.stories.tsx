import type { Meta, StoryObj } from '@storybook/nextjs';

import { Badge } from './Badge';

const meta = {
  title: 'UI Kit / Badge',
  component: Badge,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: 'Badge',
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
