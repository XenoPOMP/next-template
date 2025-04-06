import type {
  ComponentProps,
  ComponentRef,
  FC,
  PropsWithChildren,
} from 'react';
import { useRef } from 'react';
import type { SetState, StrictOmit } from 'xenopomp-essentials';
import { jsxDotNotation } from 'xenopomp-essentials';

// eslint-disable-next-line jsdoc/require-jsdoc
const Internal_TestUI: FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);

type InoutProps<Name extends string> = Record<Name, string | undefined> &
  Partial<Record<`${Name}Attribute`, string>>;

/** */
const Internal_TestUI_Output: FC<InoutProps<'output'>> = ({
  output,
  outputAttribute = 'output',
}) => {
  return (
    <div
      data-testid={outputAttribute}
      data-output={output}
    >
      <></>
    </div>
  );
};

/** */
const Internal_TestUI_Input: FC<
  StrictOmit<InoutProps<'input'>, 'input'> & {
    updateState: SetState<string | undefined>;
  }
> = ({ inputAttribute = 'input', updateState }) => {
  const inputRef = useRef<ComponentRef<'input'>>(null);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleClick: ComponentProps<'input'>['onClick'] = () => {
    updateState(
      inputRef.current?.getAttribute('data-input-string')?.toString(),
    );
  };

  return (
    <input
      data-testid={inputAttribute}
      data-input-string=''
      ref={inputRef}
      onClick={handleClick}
    />
  );
};

export const TestUI = jsxDotNotation(Internal_TestUI, {
  Output: Internal_TestUI_Output,
  Input: Internal_TestUI_Input,
});
