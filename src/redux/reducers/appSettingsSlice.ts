import { createSlice } from '@reduxjs/toolkit';

import type { ReduxAction } from '@/src/redux/types';

export type AppSettings = {
  appVersion: string;
  appName: string;
  language: 'en' | 'ru';
};

const initialState: AppSettings = {
  appVersion: '0.0.0',
  appName: 'React Vite Application',
  language: 'en',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    /** Change language with action. */
    changeLang(state, action: ReduxAction<AppSettings['language']>) {
      state.language = action.payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { changeLang } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
