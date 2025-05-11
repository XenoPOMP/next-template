import { useEffect, useState } from 'react';
import type { ReplaceReturnType } from 'xenopomp-essentials';

import type { createPersistentStore } from '@/zustand/utils';

type ReturnedStore<TStore> = ReturnType<typeof createPersistentStore<TStore>>;

/**
 * Handle persisted bound store.
 *
 * @param boundStore
 * @param selector
 *
 * @example
 * const [state, isLoading] = useHydratedStore(useSettingsStore, state => state);
 *
 * <>
 *   {isLoading ? <>Loading...</> : <>Hydrated!</>}
 * </>
 */
export const useHydratedStore = <TBound, TSelect = unknown>(
  boundStore: ReturnedStore<TBound>,
  selector: ReplaceReturnType<Parameters<ReturnedStore<TBound>>[0], TSelect>,
): [state: TSelect, isLoading: boolean] => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  const state = boundStore(selector);

  useEffect(() => {
    if (!boundStore.persist.hasHydrated()) {
      boundStore.persist.rehydrate();
    }

    setHasHydrated(true);
  }, []);

  return [state, !hasHydrated];
};
