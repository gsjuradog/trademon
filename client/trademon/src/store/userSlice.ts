import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { User, SignIn } from './interfaces';
import { signInUser } from '../utils/rest';

const initialState: any = {
  user: {
    token: '',
    id: 0,
    email: '',
    avatarUrl: '/assets/avatarIcon.png',
    username: '',
    trainerID: 0,
    trainerName: '',
    mtgoID: 0,
    mtgoName: '',
    buyerRating: [],
    sellerRating: [],
    transactionSales: [],
    transactionPurchases: [],
    transactionTrades: [],
    numOfStrikes: 0,
    watchList: [],
    activeOffers: [],
    createdAt: undefined,
    updatedAt: undefined,
    error: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, { payload }: PayloadAction<User>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state.user = payload;
    },
    updateUserUrl(state, { payload }: PayloadAction<string | undefined>) {
      state.avatarUrl = payload;
    },
    getUserError(state, action: PayloadAction<string>) {
      console.error('TRADE - Error Handling: ', action.payload);
      return state;
    },
  },
});

export const { getUser, getUserError, updateUserUrl } = userSlice.actions;
export default userSlice.reducer;

// THUNK / EPIC

// THUNK1: Fetching User
export const fetchUser = (signin: SignIn): AppThunk => async (dispatch) => {
  try {
    let response: User;
    response = await signInUser({
      email: signin.email,
      password: signin.password,
    });
    if (!response.error) {
      dispatch(getUser(response));
    }
    console.log('USER THUNK fetchUser: I fetched: ', response);
  } catch (err) {
    dispatch(getUserError(err.toString()));
  }
};
