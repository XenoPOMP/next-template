import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from './InputField';

const meta = {
  title: 'UI Kit / Fields / Input field',
  component: InputField,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
