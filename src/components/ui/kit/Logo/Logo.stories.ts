import type { Meta, StoryObj } from '@storybook/nextjs';

import { Logo } from './Logo';

const meta = {
  title: 'UI Kit / Logo',
  component: Logo,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Default: Story = {
  args: {
    ...sharedProps,
  },
};
