import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PersistParams<TStore> = Parameters<typeof persist<TStore, [], [], TStore>>;

/**
 * Small utility for creating bounded Zustand stores
 * with included persist middleware.
 *
 * @param init
 * @param options
 * @param rest
 */
export const createBoundStore = <TStore>(
  ...[init, options, ...rest]: PersistParams<TStore>
) => {
  return create<TStore>()(
    persist(
      init,
      {
        skipHydration: true,
        ...options,
      },
      ...rest,
    ),
  );
};
