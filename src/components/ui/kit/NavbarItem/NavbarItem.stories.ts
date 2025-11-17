import type { Meta, StoryObj } from '@storybook/nextjs';

import { NavbarItem } from './NavbarItem';

const meta = {
  title: 'UI Kit/Navbar item',
  component: NavbarItem,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavbarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  href: '/',
  children: 'Home',
} satisfies Partial<Story['args']>;

export const Default: Story = {
  args: {
    ...sharedProps,
    parentPath: '/',
  },
};
