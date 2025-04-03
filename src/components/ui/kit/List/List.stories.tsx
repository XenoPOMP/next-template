import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { SplitView } from '@/components/ui/kit';

import { List } from './List';
import { Internal_ListItem } from './ListItem.tsx';

const meta = {
  title: 'UI Kit / List',
  component: List,
  subcomponents: {
    List,
    Internal_ListItem,
    SplitView,
  },
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  className: cn('w-[300px]'),
  children: (
    <>
      <List.Item>List item</List.Item>
      <List.Item>List item</List.Item>
      <List.Item disableIcon>List item</List.Item>
      <List.Item disableIcon>List item</List.Item>
    </>
  ),
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
