'use client';

import { render, screen } from '@testing-library/react';
import { DeepPartial } from '@xenopomp/advanced-types';
import { ComponentProps, FC } from 'react';
import { describe, expect, test, vi } from 'vitest';

import { Stub } from '@/__tests__/assets/types';
import useCopyToClipboard from '@/src/hooks/useCopyToClipboard';

import { booleanishString } from '../../assets/utilities';
import { clickAll } from '../../assets/utilities';

const UseCopyToClipboardTestComponent: FC<{}> = () => {
  const { copy, isCopied } = useCopyToClipboard();

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

const navigatorStub: DeepPartial<Stub<typeof navigator>> = {
  clipboard: {
    writeText: async (text: string) => vi.fn(),
  },
};

vi.stubGlobal('navigator', navigatorStub);

describe('useCopyToClipboard hook', () => {
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
});
