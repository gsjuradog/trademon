import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  conversationsOrChat: boolean,
  currentChatId: number,
  currentChatItemId: number,
  currentChatOtherUser: {
    id: number,
    avatarUrl: string,
    username: string
  },
  messages: any,
} = {
  conversationsOrChat: true,
  currentChatId: 0,
  currentChatItemId: 0,
  currentChatOtherUser: {
    id: 0,
    avatarUrl: '',
    username: ''
  },
  messages: [],
};

const preferencesSlice = createSlice({
  name: '[preferences]',
  initialState,
  reducers: {
    setPreferences(state, { payload }: PayloadAction<{
      conversationsOrChat: boolean,
      currentChatId: number,
      currentChatItemId: number,
      currentChatOtherUser: {
        id: number,
        avatarUrl: string,
        username: string
      },
      messages: any,
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
        currentChatOtherUser: {
          id: 0,
          avatarUrl: '',
          username: ''
        },
        messages: [],
      };
      return state;
    },
  },
});

export const { setPreferences, resetPreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
