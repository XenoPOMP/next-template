import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { useHydratedStore, useSettingsStore } from '@/zustand';

import { expectHookToRender } from '@test/assets';

describe('useHydratedStore hook', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    expectHookToRender(() => useHydratedStore(useSettingsStore, s => s));
  });

  test('You can invoke methods', async () => {
    const { result } = renderHook(() =>
      useHydratedStore(useSettingsStore, s => s),
    );

    const { lang } = result.current.state;

    expect(lang).toBe('en');
  });
});
