import type { FC, PropsWithChildren } from 'react';
import { jsxDotNotation } from 'xenopomp-essentials';

// eslint-disable-next-line jsdoc/require-jsdoc
const Internal_TestUI: FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);

/**
 * @constructor
 */
const Internal_TestUI_Output: FC<{
  output: string | undefined;
  outputAttribute?: string;
}> = ({ output, outputAttribute = 'output' }) => {
  return (
    <div
      data-testid={outputAttribute}
      data-output={output}
    >
      <></>
    </div>
  );
};

export const TestUI = jsxDotNotation(Internal_TestUI, {
  Output: Internal_TestUI_Output,
});
