import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { TypesafeLink } from './TypesafeLink';

const meta = {
  title: 'UI / TypesafeLink',
  component: TypesafeLink,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TypesafeLink>;

export default meta;

const builder = new StoryBuilder<typeof TypesafeLink>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
