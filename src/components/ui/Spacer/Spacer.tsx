import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

/**
 * This component works similar to SwiftUI`s Spacer struct.
 * Grows inside flex container.
 *
 * @param className
 * @param ariaHidden
 * @param props
 * @constructor
 */
const Spacer: VariableFC<'div', unknown, 'children'> = ({
  className,
  'aria-hidden': ariaHidden = true,
  ...props
}) => {
  return (
    <div
      className={cn('flex-grow', className)}
      aria-hidden={ariaHidden}
      {...props}
    >
      <></>
    </div>
  );
};

export default Spacer;
