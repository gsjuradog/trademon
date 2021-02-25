import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  conversationsOrChat: boolean,
  currentChatId: number,
  currentChatItemId: number,
  currentChatOtherUserId: number,
} = {
  conversationsOrChat: true,
  currentChatId: 0,
  currentChatItemId: 0,
  currentChatOtherUserId: 0,
};

const preferencesSlice = createSlice({
  name: '[preferences]',
  initialState,
  reducers: {
    setPreferences(state, { payload }: PayloadAction<{
      conversationsOrChat: boolean,
      currentChatId: number,
      currentChatItemId: number,
      currentChatOtherUserId: number,
    }>) {
      state = payload;
      console.log('What is preferred state?  ', state);
      return state;
    },
    resetPreferences(state) {
      state = {
        conversationsOrChat: true,
        currentChatId: 0,
        currentChatItemId: 0,
        currentChatOtherUserId: 0,
      };
      return state;
    },
  },
});

export const { setPreferences, resetPreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
