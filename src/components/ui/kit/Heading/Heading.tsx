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

  const levelMap: Record<typeof level, string> = {
    1: '3.2rem',
    2: '2.4rem',
    3: '2.0rem',
    4: '1.6rem',
    5: '1.4rem',
  };

  return (
    <Comp
      className={cn('font-bold leading-[normal]', className)}
      style={{
        fontSize: levelMap[level],
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  );
};
