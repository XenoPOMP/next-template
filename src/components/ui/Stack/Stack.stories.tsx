import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import Stack from './Stack';

const meta = {
  title: 'UI / Stack',
  component: Stack,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: 'I am UiContainer, but modern',
  className: 'bg-red-400/25',
  maxWidth: '1000px',
} satisfies Partial<Story['args']>;

export const Containers: Story = {
  decorators: [
    () => (
      <div className={cn('flex flex-col gap-1')}>
        <div className={cn('flex flex-col gap-4')}>
          <Stack
            {...sharedProps}
            alignStack='start'
          />
          <Stack {...sharedProps} />
          <Stack
            {...sharedProps}
            alignStack='end'
          />
        </div>

        <div className={cn('h-[500px] w-full', 'flex justify-center')}>Sus</div>
      </div>
    ),
  ],
};
