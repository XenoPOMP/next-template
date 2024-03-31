'use client';

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { ComponentProps, FC, useEffect } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { DeepPartial } from '@/__tests__/assets/types/DeepPartial';
import { Stub } from '@/__tests__/assets/types/Stub';
import { booleanishString } from '@/__tests__/assets/utilities/booleanishString';
import { clickAll } from '@/__tests__/assets/utilities/clickAll';
import useCopyToClipboard from '@/src/hooks/useCopyToClipboard';

const UseCopyToClipboardTestComponent: FC<{}> = () => {
  const { copy, isCopied } = useCopyToClipboard();

  useEffect(() => {
    console.debug(`[MOUNT] Is copied: ${isCopied}`);
  }, [isCopied]);

  return (
    <>
      <div data-testid={'output'} data-is-copied={isCopied}>
        Is text copied: {booleanishString(isCopied)}
      </div>

      <button
        onClick={() => {
          copy('amogus');
        }}
        data-testid={'payload-button'}
      >
        Copy
      </button>
    </>
  );
};

/**
 * Stubs navigator object. It is a more advanced way to mock objects.
 *
 * @param stub
 */
const stubNavigator = (stub?: DeepPartial<Stub<typeof navigator>>) => {
  const navigatorStub: DeepPartial<Stub<typeof navigator>> = stub ?? {
    clipboard: {
      writeText: async (text: string) => vi.fn(),
    },
  };

  vi.stubGlobal('navigator', navigatorStub);
};

describe('useCopyToClipboard hook', () => {
  /** Reset mocks. */
  beforeEach(() => {
    stubNavigator();
  });

  afterEach(() => cleanup());

  const renderComponent = (
    props: ComponentProps<typeof UseCopyToClipboardTestComponent>,
  ) => {
    return render(<UseCopyToClipboardTestComponent {...props} />);
  };

  test('Not throwing errors', () => {
    expect(() => renderComponent({})).not.toThrow();
  });

  test('Copy', () => {
    renderComponent({});

    const buttons = screen.getAllByText<HTMLButtonElement>(`Copy`);

    clickAll(buttons);
  });

  test('Promise rejection', () => {
    stubNavigator({
      clipboard: {
        writeText: async (text: string) =>
          new Promise((res, rej) => {
            rej();
          }),
      },
    });

    renderComponent({});

    const buttons = screen.getAllByText<HTMLButtonElement>(`Copy`);

    setTimeout(() => {}, 500);

    clickAll(buttons);
  });

  test('Timeout works', async () => {
    const expectOutputToBe = <TValue = unknown,>(value: TValue) => {
      console.debug(
        `[ ATTR] Assert [${isCopiedAttribute}](${output.getAttribute(isCopiedAttribute)}) to be ${value}`,
      );
      expect(output.getAttribute(isCopiedAttribute)).toBe(value);
    };

    renderComponent({});

    const isCopiedAttribute = 'data-is-copied';

    const output = screen.getByTestId('output');
    const button = screen.getByTestId('payload-button');

    // Button is not clicked. Is copied should be `false`
    expectOutputToBe('false');

    // Clicking to button. Is copied should be `true`
    fireEvent.click(button);
    await waitFor(() => expectOutputToBe('true'));
  });
});
