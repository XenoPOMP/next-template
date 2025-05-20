import { Input } from '@headlessui/react';
import type { Meta, StoryObj } from '@storybook/react';
import type { Defined } from 'xenopomp-essentials';
import { capitalize } from 'xenopomp-essentials';

import { Field } from '@/components/ui/kit';

import { InputField } from './InputField';

const meta = {
  title: 'UI Kit / Fields / Input field',
  component: InputField,
  subcomponents: {
    Input,
    Field,
  },
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['text', 'date', 'number', 'datetime-local'] as const,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

/**
 * Default render function.
 * @param type
 * @param placeholder
 * @param args
 */
const render: Defined<Story['render']> = ({ type, placeholder, ...args }) => (
  <InputField
    type={type}
    placeholder={
      placeholder || type === undefined ? placeholder : capitalize(type)
    }
    {...args}
  />
);

export const Base: Story = {
  args: {
    ...sharedProps,
  },
  render,
};
