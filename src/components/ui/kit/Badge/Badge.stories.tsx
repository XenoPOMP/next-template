import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';
import { capitalize } from 'xenopomp-essentials';

import { allBadgeVariants } from '@/components/ui/kit/Badge/Badge.variants.ts';

import { Badge } from './Badge';

const meta = {
  title: 'UI Kit / Badge',
  component: Badge,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: 'Badge',
} satisfies Partial<Story['args']>;

export const AllBadges: Story = {
  name: 'All badges',
  args: {
    ...sharedProps,
  },
  render: () => (
    <div className={cn('flex flex-wrap justify-center gap-[.4em]')}>
      {Object.keys(allBadgeVariants).map(name => (
        <Badge
          variant={name as NonNullable<NonNullable<Story>['args']>['variant']}
          key={name}
        >
          {capitalize(name)}
        </Badge>
      ))}
    </div>
  ),
};
