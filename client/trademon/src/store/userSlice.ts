import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { User, SignIn } from './interfaces';
import { getUserPublicDetails, signInUser } from '../utils/rest';

const initialState: any = {
  user: {
    token: '',
    id: 0,
    email: '',
    avatarUrl: '/assets/avatarIcon.png',
    username: 'none',
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
      state.user.avatarUrl = payload;
    },
    addFaveToState(state, { payload }: PayloadAction<Object>) {
      console.log('Append With this payload: ', payload);
      state.user.user.watchList = payload;
    },
    getUserError(state, action: PayloadAction<string>) {
      console.error('TRADE - Error Handling: ', action.payload);
      return state;
    },
  },
});

export const {
  getUser,
  getUserError,
  updateUserUrl,
  addFaveToState,
} = userSlice.actions;
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
    return response;
  } catch (err) {
    dispatch(getUserError(err.toString()));
  }
};

export const addFavoriteTrade = (
  tradeId: number,
  userId: any,
): AppThunk => async (dispatch) => {
  try {
    const existingWatchList: any = await getUserPublicDetails(userId);
    console.log('WE ARE ADDING THIS NEW FAVE : ', existingWatchList.watchList);
    const appendWatchList = { tradeId, ...existingWatchList.watchList };
    dispatch(addFaveToState(appendWatchList));
  } catch (error) {
    dispatch(getUserError(error.toString()));
  }
};
