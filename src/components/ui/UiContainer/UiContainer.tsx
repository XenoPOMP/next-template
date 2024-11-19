import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import type { CSSProperties, FC } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';
import {
  type UiContainerVariantsType,
  uiContainerVariants,
} from './UiContainer.variants.ts';

interface UiContainerNestedProps
  extends PropsWith<
    'children' | 'className' | 'id' | 'style',
    UiContainerProps
  > {}

const UiContainer: FC<UiContainerNestedProps & UiContainerVariantsType> = ({
  children,
  className,
  id,
  style,
  margin = '2rem',
  maxWidth = '1680px',
  as = 'section',
  ...variants
}) => {
  const Component = as;

  return (
    <Component
      style={
        {
          '--max-container-width': maxWidth,
          '--margin': margin,
          ...style,
        } as CSSProperties
      }
      className={cn(
        styles.uiContainer,
        uiContainerVariants(variants),
        className,
      )}
      id={id}
    >
      {children}
    </Component>
  );
};

export default UiContainer;
