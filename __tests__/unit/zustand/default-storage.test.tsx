import { afterAll, describe, expect, test, vi } from 'vitest';
import { createJSONStorage } from 'zustand/middleware';

import defaultStorage from '@/src/zustand/storages/default-storage';


describe('Default storage', () => {
  afterAll(() => {
    vi.stubGlobal('window', window);
  });

  const storage = createJSONStorage(() => defaultStorage);

  test('Item remove works', () => {
    expect(() => storage?.removeItem('none')).not.toThrow();
  });

  test('What if window is undefined', async () => {
    vi.stubGlobal('window', undefined);

    expect(await storage?.getItem('none')).toBeNull();
  });
});
