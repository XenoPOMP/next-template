import type { Meta, StoryObj } from '@storybook/nextjs';

import { Field } from './Field';

const meta = {
  title: 'UI Kit / Field',
  component: Field,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
