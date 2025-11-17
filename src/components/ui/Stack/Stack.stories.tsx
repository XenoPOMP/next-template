import type { Meta, StoryObj } from '@storybook/nextjs';
import cn from 'classnames';

import { Container as Stack } from './Stack';

const meta = {
  title: 'UI / Container',
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
  maxSize: '1000px',
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

        <div className={cn('h-[45dvh] w-full', 'flex justify-center')}>
          <Stack
            {...sharedProps}
            maxSize='100px'
            alignStack='start'
          />
          <Stack
            {...sharedProps}
            maxSize='100px'
          />
          <Stack
            {...sharedProps}
            maxSize='100px'
            alignStack='end'
          />
        </div>
      </div>
    ),
  ],
};
