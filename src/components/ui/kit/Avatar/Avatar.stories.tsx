import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import catImg from '@test/assets/images/cat.jpeg';

import { Avatar } from './Avatar';

const meta = {
  title: 'UI Kit / Avatar',
  component: Avatar,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  className: cn('bg-red-500'),
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },

  render: args => (
    <>
      <div className={cn('flex gap-[.5rem]')}>
        <Avatar {...args} />
        <Avatar src={catImg} />
        <Avatar {...args} />
      </div>
    </>
  ),
};
