import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {detailOrChat: boolean} = {detailOrChat: true};

const preferencesSlice = createSlice({
  name: '[preferences]',
  initialState,
  reducers: {
    setPreferences(state, { payload }: PayloadAction<{detailOrChat: boolean}>) {
      state = payload;
      console.log('What is preferred state?  ', state);
      return state;
    },
    resetPreferences(state) {
      state = {detailOrChat: true};
      return state;
    },
  },
});

export const { setPreferences, resetPreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
