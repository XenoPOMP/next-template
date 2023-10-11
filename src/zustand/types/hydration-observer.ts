export type HydrationObserver<S extends any = {}> = S & {
  _hasHydrated: boolean;
  setHasHydrated: (state: HydrationObserver<S>['_hasHydrated']) => void;
};
