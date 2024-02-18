'use client';

import { render, screen } from '@testing-library/react';
import { ComponentProps, FC, useEffect } from 'react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { DeepPartial } from '@/__tests__/assets/types/DeepPartial';
import { Stub } from '@/__tests__/assets/types/Stub';
import { booleanishString } from '@/__tests__/assets/utilities/booleanishString';
import { clickAll } from '@/__tests__/assets/utilities/clickAll';
import useCopyToClipboard from '@/src/hooks/useCopyToClipboard';

const UseCopyToClipboardTestComponent: FC<{}> = () => {
  const { copy, isCopied } = useCopyToClipboard();

  useEffect(() => {
    console.debug(`Is copied: ${isCopied}`);
  }, [isCopied]);

  return (
    <>
      <div>Is text copied: {booleanishString(isCopied)}</div>

      <button
        onClick={() => {
          copy('amogus');
        }}
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

  const renderComponent = (
    props: ComponentProps<typeof UseCopyToClipboardTestComponent>
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
});
