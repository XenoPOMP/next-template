---
to: src/components/ui/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';

import { <%= h.changeCase.pascalCase(name) %> } from '@/components/ui';

const meta = {
  title: 'UI Kit / <%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof <%= h.changeCase.pascalCase(name) %>>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};

