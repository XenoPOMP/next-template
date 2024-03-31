import type { ReplaceReturnType } from '@xenopomp/advanced-types';
import { useEffect, useState } from 'react';

import { type createBoundStore } from '@/src/zustand/utils';

type ReturnedStore<TStore> = ReturnType<typeof createBoundStore<TStore>>;

/**
 * Handle persisted bound store.
 *
 * @param boundStore
 * @param selector
 *
 * @example
 * const {
 *   state: { lang, changeLang },
 *   isLoading,
 * } = useHydratedStore(useSettingsStore, state => state);
 *
 * <>
 *   {isLoading ? <>Loading...</> : <>Hydrated!</>}
 * </>
 */
export const useHydratedStore = <TBound, TSelect>(
  boundStore: ReturnedStore<TBound>,
  selector: ReplaceReturnType<Parameters<ReturnedStore<TBound>>[0], TSelect>,
) => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  const state = boundStore(selector);

  useEffect(() => {
    if (!boundStore.persist.hasHydrated()) {
      boundStore.persist.rehydrate();
    }

    setHasHydrated(true);
  }, []);

  return {
    state,
    isLoading: !hasHydrated,
  };
};
