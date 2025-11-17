import type { Meta, StoryObj } from '@storybook/nextjs';

import { ShortcutHint } from './ShortcutHint';

const meta = {
  title: 'UI Kit / ShortcutHint',
  component: ShortcutHint,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ShortcutHint>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  keys: ['command', 'ctrl'],
  children: 'S',
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
