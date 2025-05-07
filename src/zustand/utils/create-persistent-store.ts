import type { SelectivePartial } from 'xenopomp-essentials';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Creator<T> = typeof persist<T>;

// eslint-disable-next-line jsdoc/require-jsdoc
export const createPersistentStore = <T>(
  creator: Parameters<Creator<T>>[0],
  options: SelectivePartial<Parameters<Creator<T>>[1], 'storage'>,
) => {
  return create<T>()(
    persist<T>(creator, {
      storage: createJSONStorage(() => localStorage),
      ...options,
    }),
  );
};
