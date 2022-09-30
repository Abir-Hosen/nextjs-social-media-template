import { createAction, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'app/Store';

export enum AuthStatusEnum {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',
}

export interface AuthState {
  isModal?: boolean;
  authStatus: AuthStatusEnum;
  error?: any;
}

const initialState: AuthState = {
  authStatus: AuthStatusEnum.SIGN_UP,
};

const signOutAction = createAction('auth/signout');

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthAction: () => initialState,
    updateAuthAction: (state: AuthState, action: PayloadAction<Partial<AuthState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const authSelector = createSelector(
  (state: AppState) => state.auth,
  (values) => values,
);

export const { resetAuthAction, updateAuthAction } = authSlice.actions;

export { signOutAction };

export default authSlice.reducer;
