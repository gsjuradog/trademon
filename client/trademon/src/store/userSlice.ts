import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { User } from './interfaces';
import { signInUser } from '../utils/rest';

const initialState: any = {user: 
  {
    token: '',
    id: 0,
    email: '',
    username: '',
    trainerID: 0,
    trainerName: '',
    mtgoID: 0,
    mtgoName: '',
    buyerRating: [],
    sellerRating: [],
    numOfStrikes: 0,
  }
}

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    getUser(state, { payload }: PayloadAction<User>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state.user = payload;
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
} = userSlice.actions;
export default userSlice.reducer;

// THUNK / EPIC

// THUNK1: Fetching User
export const fetchUser = (signin: any): AppThunk => async (dispatch) => {
  try {
    console.log(
      'THUNK fetch USER I am getting User Info: ',
      signin
    );
    let response: User;
    response = await signInUser({email: signin.email, password:signin.password});
    dispatch(getUser(response));

    console.log(
      'TRADE THUNK fetchUser: I fetched: ',
      response
    );
  } catch (err) {
    dispatch(getUserError(err.toString()));
  }
};
