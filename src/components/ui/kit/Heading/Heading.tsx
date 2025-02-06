import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import type { HeadingProps, HeadingType } from './Heading.props';

/**
 * Creates pre-styled html heading element according to design system.
 * @constructor
 */
export const Heading: VariableFC<'h1', HeadingProps> = ({
  level,
  className,
  children,
  style,
  ...props
}) => {
  const Comp = `h${level}` as HeadingType;

  return (
    <Comp
      className={cn('font-bold leading-[normal]', className)}
      style={{
        fontSize: `var(--heading-${level})`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  );
};
