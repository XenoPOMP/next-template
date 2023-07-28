'use client';

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

    changeVersion(state, action: ReduxAction<AppSettings['appVersion']>) {
      state.appVersion = action.payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { simpleAction, changeVersion } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
