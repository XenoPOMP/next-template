import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta = {
  title: 'UI Kit / Toggle',
  component: Toggle,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
