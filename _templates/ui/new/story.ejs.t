---
to: src/components/ui/kit/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import type { Meta } from '@storybook/react';

import { StoryBuilder } from '@/utils/storybook';

import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

const meta = {
  title: 'UI Kit / <%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof <%= h.changeCase.pascalCase(name) %>>;

export default meta;

const builder = new StoryBuilder<typeof <%= h.changeCase.pascalCase(name) %>>()
  .defineMeta(meta)
  .defineSharedProps({});

export const Base = builder.buildStory({});
