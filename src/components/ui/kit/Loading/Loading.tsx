'use client';

import cn from 'classnames';
import type { LucideProps } from 'lucide-react';
import type { SVGMotionProps } from 'motion/react';
import type { VariableFC } from 'xenopomp-essentials';

import {
  type LoadingVariantsType,
  loadingVariants,
} from './Loading.variants.ts';
import { Circle } from './icons';

const SHARED_ICON_PROPS: LucideProps & SVGMotionProps<any> = {
  size: '1em',
  color: 'currentColor',
};

/**
 * Adds loader icon with predefined animations.
 * @param variant see {@link LoadingVariantsType}
 * @param className
 * @param ariaBusy
 * @param props
 * @constructor
 */
export const Loading: VariableFC<'div', LoadingVariantsType, 'children'> = ({
  variant,
  className,
  'aria-busy': ariaBusy = true,
  ...props
}) => {
  return (
    <div
      aria-busy={ariaBusy}
      className={cn('', loadingVariants({ variant }), className)}
      {...props}
    >
      {/* Icons */}
      {variant === 'circle' && <Circle {...SHARED_ICON_PROPS} />}
    </div>
  );
};
