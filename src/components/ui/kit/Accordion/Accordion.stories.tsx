import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Accordion } from './Accordion';

const meta = {
  title: 'UI Kit / Accordion',
  component: Accordion,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Default: Story = {
  args: {
    ...sharedProps,
  },
  decorators: [
    () => (
      <>
        <Accordion className={cn('max-w-[500px]')}>
          <Accordion.Collapse>Collapse</Accordion.Collapse>
          <Accordion.Body>Body of collapsable accordion</Accordion.Body>
        </Accordion>
      </>
    ),
  ],
};
