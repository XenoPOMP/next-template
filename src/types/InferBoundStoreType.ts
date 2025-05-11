import type { StoreApi, UseBoundStore } from 'zustand';

export type BoundStore<Api> = UseBoundStore<StoreApi<Api>>;

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
  Func extends BoundStore<infer StoreType> ? StoreType : never;
