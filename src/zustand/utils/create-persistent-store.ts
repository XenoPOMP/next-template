import type { SelectivePartial } from 'xenopomp-essentials';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Creator<T> = typeof persist<T, [], [], T>;
type Init<T> = Parameters<Creator<T>>[0];
type Options<T> = Parameters<Creator<T>>[1];

// eslint-disable-next-line jsdoc/require-jsdoc
export const createPersistentStore = <T>(
  creator: Init<T>,
  options: SelectivePartial<Options<T>, 'storage'>,
) => {
  return create<T>()(
    persist<T>(creator, {
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      ...options,
    }),
  );
};
