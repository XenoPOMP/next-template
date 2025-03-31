import type { Meta, StoryObj } from '@storybook/react';
import Link from 'next/link';

import { Button } from './Button';

const meta = {
  title: 'UI Kit/Button',
  component: Button,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: 'Click me',
  disabled: false,
} satisfies Partial<Story['args']>;

export const Default: Story = {
  args: {
    ...sharedProps,
  },
};

export const Accent: Story = {
  args: {
    ...sharedProps,
    variant: 'accent',
  },
};

export const AsLink: Story = {
  name: 'As link',
  decorators: [
    _story => (
      <Button asChild>
        <Link href='https://www.google.com'>google.com</Link>
      </Button>
    ),
  ],
};
