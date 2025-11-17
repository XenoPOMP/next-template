import type { Meta, StoryObj } from '@storybook/nextjs';
import cn from 'classnames';

import Spacer from './Spacer';

const meta = {
  title: 'UI/Spacer',
  component: Spacer,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Spacer>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line jsdoc/require-jsdoc
const decorators = (vertical?: boolean): Story['decorators'] => [
  (child, args) => (
    <div
      className={cn('flex', {
        'h-[50dvh] flex-col': !!vertical,
      })}
    >
      <div>Spacer</div>
      {child(args)}
      <div>Spacer</div>
    </div>
  ),
];

const sharedProps = {
  className: cn('bg-red-500/50'),
} satisfies Partial<Story['args']>;

export const Horizontal: Story = {
  args: {
    ...sharedProps,
  },
  decorators: decorators(),
};

export const Vertical: Story = {
  args: {
    ...sharedProps,
  },
  decorators: decorators(true),
};
