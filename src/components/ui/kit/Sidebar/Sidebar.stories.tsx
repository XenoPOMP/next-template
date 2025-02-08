import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Sidebar } from './Sidebar';

const meta = {
  title: 'UI Kit / Sidebar',
  component: Sidebar,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
  render: args => (
    <div
      className={cn('h-dvh w-dvw bg-red-500/20')}
      style={{
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr',
      }}
    >
      <Sidebar {...args} />
    </div>
  ),
};
