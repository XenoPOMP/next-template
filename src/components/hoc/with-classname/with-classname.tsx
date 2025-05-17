import cn from 'classnames';
import type { ElementType } from 'react';
import type { VariableFC } from 'xenopomp-essentials';

/**
 * Wraps your component and adds certain className to it.
 * @param Element
 * @param additionalClass
 *
 * @example
 * import cn from 'classnames';
 * import { VariableFC } from 'xenopomp-essentials';
 *
 * import { withClassname } from '@/components/hoc';
 *
 * const HocTest: VariableFC<'div', unknown, 'children'> = ({
 *   className,
 *   ...props
 * }) => {
 *   return (
 *     <div
 *       className={cn('italic', className)}
 *       style={{
 *         height: '300px',
 *       }}
 *       {...props}
 *     >
 *       I am wrapped with classname!
 *     </div>
 *   );
 * };
 *
 * // Resulting component will include 'bg-red-500'
 * export default withClassname(HocTest, 'bg-red-500');
 */
export function withClassname<E extends ElementType<{ className?: string }>>(
  Element: E,
  additionalClass: string,
): VariableFC<E, { className?: string }> {
  return function ({ className, ...props }) {
    return (
      <>
        {/* @ts-expect-error Types should be fine */}
        <Element
          className={cn(additionalClass, className)}
          {...props}
        />
      </>
    );
  };
}
