import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Glass } from './Glass';

const meta = {
  title: 'UI Kit / Glass',
  component: Glass,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Glass>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: <header>Glass header</header>,
  blur: 8,
  className: cn('py-[8px] sticky top-0'),
} satisfies Partial<Story['args']>;

export const StickyHeader: Story = {
  args: {
    ...sharedProps,
  },
  render: props => (
    <div className={cn('h-[200dvh]')}>
      {Array.from({ length: 5 }, () => (
        // eslint-disable-next-line react/no-missing-key
        <p>Content</p>
      ))}

      <Glass
        asChild
        {...props}
      />

      {Array.from({ length: 25 }, () => (
        // eslint-disable-next-line react/no-missing-key
        <p>Content</p>
      ))}
    </div>
  ),
};
