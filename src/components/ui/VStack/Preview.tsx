import cn from 'classnames';
import type { ComponentProps, ReactNode } from 'react';
import type { Defined } from 'xenopomp-essentials';

import { For } from '@/components/layout';
import { HStack, VStack } from '@/components/ui';

const alignments: Defined<ComponentProps<typeof HStack>['alignment']>[] = [
  'topLeading',
  'top',
  'topTrailing',
  'leading',
  'center',
  'trailing',
  'bottomLeading',
  'bottom',
  'bottomTrailing',
];

// eslint-disable-next-line jsdoc/require-jsdoc
const Dot = () => (
  <div className={cn('size-[15px] rounded-full bg-red-500')}></div>
);

// eslint-disable-next-line jsdoc/require-jsdoc
export function StackAlignmentPreview({
  stackType,
}: {
  stackType: 'vstack' | 'hstack';
}): ReactNode {
  return (
    <div className={cn('grid size-[450px] grid-cols-3 grid-rows-3 gap-[10px]')}>
      <For each={alignments}>
        {alignment => {
          const StackContainer = stackType === 'vstack' ? VStack : HStack;

          return (
            <div
              className={cn('grid gap-[5px]')}
              style={{
                gridTemplateRows: 'max-content 1fr',
              }}
            >
              <p className={cn('font-mono text-[12px]')}>{alignment}</p>

              <StackContainer
                className={cn('size-full rounded-[10px] bg-gray-500 p-[10px]')}
                alignment={alignment}
                spacing='5px'
              >
                <Dot />
                <Dot />
              </StackContainer>
            </div>
          );
        }}
      </For>
    </div>
  );
}
