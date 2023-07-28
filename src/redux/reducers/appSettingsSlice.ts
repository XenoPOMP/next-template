import { createSlice } from '@reduxjs/toolkit';

import type { ReduxAction } from '@/src/redux/types';

export type AppSettings = {
  appVersion: string;
};

const initialState: AppSettings = {
  appVersion: '0.0.0',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    simpleAction(state, action: ReduxAction<number>) {},
  },
});

export default appSettingsSlice.reducer;
export const { simpleAction } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
