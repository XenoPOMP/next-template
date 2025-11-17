import type { Meta, StoryObj } from '@storybook/nextjs';
import cn from 'classnames';

import { ZStack } from '@/components/ui';

const meta = {
  title: 'UI / ZStack',
  component: ZStack,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ZStack>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: (
    <>
      {Array.from({ length: 3 }, (_, k) => (
        <div
          key={k + 1}
          className={cn('flex-center size-[50px] bg-red-500/50')}
          style={{
            top: `calc(${k + 1} * 50%)`,
            left: `calc(${k + 1} * 50%)`,
          }}
        >
          {k + 1}
        </div>
      ))}
    </>
  ),
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
