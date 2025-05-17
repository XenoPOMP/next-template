import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Input } from './Input';

const meta = {
  title: 'UI Kit / Input',
  component: Input,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['text', 'date', 'number'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  // type: 'text',
  className: cn('text-black'),
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
