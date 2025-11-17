import type { Meta, StoryObj } from '@storybook/nextjs';

import { Loading } from './Loading';

const meta = {
  title: 'UI Kit / Loading',
  component: Loading,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  variant: 'circle',
} satisfies Partial<Story['args']>;

export const Circle: Story = {
  args: {
    ...sharedProps,
  },
};
