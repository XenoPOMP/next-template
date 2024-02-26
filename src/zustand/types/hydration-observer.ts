export type HydrationObserver<S = object> = S & {
  _hasHydrated: boolean;
  setHasHydrated: (state: HydrationObserver<S>['_hasHydrated']) => void;
};
