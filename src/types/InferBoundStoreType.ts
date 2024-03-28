import type { StoreApi, UseBoundStore } from 'zustand';

/**
 * This type allows you to infer type of bound store.
 *
 * @example
 * type AppStore = InferBoundStoreType<typeof useAppStore>;
 *
 * // HydrationObserver<{
 * //   mode: 'light' | 'dark';
 * //   toggleTheme: () => void;
 * // }
 */
export type InferBoundStoreType<Func extends UseBoundStore<StoreApi<any>>> =
  Func extends UseBoundStore<StoreApi<infer StoreType>> ? StoreType : never;
