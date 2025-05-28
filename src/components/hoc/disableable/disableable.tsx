import type { FC } from 'react';
import type { DataAttributes } from 'xenopomp-essentials';

/**
 * Applies 'data-disabled' to any component.
 * @param Comp
 * @example
 * function Test({ children }: PropsWithChildren) {
 *   return <p>{children}</p>;
 * }
 *
 * const DisableableTest = disableable(Test);
 *
 * function Main() {
 *   return (
 *     <>
 *       <DisableableTest data-disabled>Test</DisableableTest>
 *     </>
 *   );
 * }
 */
function disableable<P>(Comp: FC<P>): FC<
  P &
    DataAttributes<{
      'data-disabled'?: boolean;
    }>
> {
  return ({ 'data-disabled': dataDisabled, ...props }) => (
    // @ts-expect-error Data-disabled should be available
    <Comp
      data-disabled={dataDisabled}
      {...props}
    />
  );
}
