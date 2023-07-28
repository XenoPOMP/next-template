import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/src/redux/index';

/**
 * App dispatch hook. Type-safe.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed useSelector hook.
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
