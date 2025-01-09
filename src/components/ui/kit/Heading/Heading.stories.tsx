import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
  title: 'UI Kit/Heading',
  component: Heading,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  level: 1,
} satisfies Partial<Story['args']>;

export const AllLevels: Story = {
  args: {
    ...sharedProps,
  },
  decorators: [
    () => (
      <>
        {([1, 2, 3, 4, 5] as const).map(lvl => (
          <Heading
            level={lvl}
            key={lvl}
          >
            Heading {lvl}
          </Heading>
        ))}
      </>
    ),
  ],
};
