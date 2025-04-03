import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';
import { Cog, Info, Shield } from 'lucide-react';

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
      <List.Item icon={Cog}>Core settings</List.Item>

      <List.Item icon={Shield}>Privacy</List.Item>

      <List.Item icon={Info}>About</List.Item>
    </>
  ),
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
