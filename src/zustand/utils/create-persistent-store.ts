import type { SelectivePartial } from 'xenopomp-essentials';
import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type SimpleCreator<T> = StateCreator<T, [], []>;

/** Use this type for adding create.set to shared state. */
export type StoreSetter<Store> = Parameters<SimpleCreator<Store>>[0];

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
