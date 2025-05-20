import { Input } from '@headlessui/react';
import { capitalize } from 'xenopomp-essentials';

import { Field } from '@/components/ui/kit';
import type { InferRenderFnType } from '@/utils/storybook';
import { StoryBuilder } from '@/utils/storybook';

import { InputField } from './InputField';

const builder = new StoryBuilder<typeof InputField>()
  .defineMeta({
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
  })
  .defineSharedProps({});

export default builder.meta;

// eslint-disable-next-line jsdoc/require-jsdoc
const render: InferRenderFnType<typeof builder> = ({
  type,
  placeholder,
  ...args
}) => (
  <InputField
    type={type}
    placeholder={
      placeholder || type === undefined ? placeholder : capitalize(type)
    }
    {...args}
  />
);

export const Base = builder.buildStory({
  render,
});
