'use client';

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { getPersistConfig } from 'redux-deep-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appSettingsSlice from '@/src/redux/reducers/appSettingsSlice';

/** App`s root reducer. */
const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
});

/** Redux-persist config. */
const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  blacklist: ['appSettings.appVersion', 'appSettings.appName'],
  rootReducer,
});

/** Persisted reducer. All data changes will be saved in local storage. */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/** Redux store. */
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
