import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { HStack, VStack } from '@/components/ui';

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
  maxSize: '1000px',
} satisfies Partial<Story['args']>;

export const Containers: Story = {
  decorators: [
    () => (
      <div className={cn('flex flex-col gap-1')}>
        <div className={cn('flex flex-col gap-4')}>
          <HStack
            {...sharedProps}
            alignStack='start'
          />
          <HStack {...sharedProps} />
          <HStack
            {...sharedProps}
            alignStack='end'
          />
        </div>

        <div className={cn('h-[45dvh] w-full', 'flex justify-center')}>
          <VStack
            {...sharedProps}
            maxSize='100px'
            alignStack='start'
          />
          <VStack
            {...sharedProps}
            maxSize='100px'
          />
          <VStack
            {...sharedProps}
            maxSize='100px'
            alignStack='end'
          />
        </div>
      </div>
    ),
  ],
};
