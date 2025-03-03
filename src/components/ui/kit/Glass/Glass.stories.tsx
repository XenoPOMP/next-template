import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Stack } from '@/components/ui';

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
  asChild: true,
} satisfies Partial<Story['args']>;

export const StickyHeader: Story = {
  args: {
    ...sharedProps,
  },
  render: props => (
    <div className={cn('h-[200dvh]')}>
      {Array.from({ length: 5 }, () => (
        // eslint-disable-next-line react/no-missing-key
        <Stack asChild>
          <p>Content</p>
        </Stack>
      ))}

      <Stack asChild>
        <Glass {...props} />
      </Stack>

      {Array.from({ length: 25 }, () => (
        // eslint-disable-next-line react/no-missing-key
        <Stack asChild>
          <p>Content</p>
        </Stack>
      ))}
    </div>
  ),
};

export const GlassBlock: Story = {
  args: {
    ...sharedProps,
  },
  parameters: {
    layout: 'centered',
  },
  render: props => (
    <div className={cn('relative size-[100px]')}>
      <Glass
        {...props}
        className={cn(
          'absolute left-0 top-0 size-full',
          'flex-center aspect-square rounded bg-white p-[8px]',
          'z-20',
        )}
        blur={2}
      />

      <div className={cn('absolute left-0 top-0 size-full', 'z-10')}>
        Backdrop
      </div>
    </div>
  ),
};
