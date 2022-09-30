import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'app/Store';
import { User } from 'models/User';

export interface ProfileState {
  user?: User;
}

const initialState: ProfileState = {};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfileAction: () => initialState,
    updateProfileAction: (state: ProfileState, action: PayloadAction<Partial<ProfileState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const profileSelector = createSelector(
  (state: AppState) => state.profile,
  (values) => values,
);

export const { resetProfileAction, updateProfileAction } = profileSlice.actions;

export default profileSlice.reducer;
