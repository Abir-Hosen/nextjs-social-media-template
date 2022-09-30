import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import baseApi from 'services/BaseApi.service';
import auth, { AuthState, signOutAction } from 'slices/Auth.slice';
import profile, { ProfileState } from 'slices/Profile.slice';

export interface AppState {
  auth: AuthState;
  profile: ProfileState;
}

const reducer = combineReducers({
  auth,
  profile,
  [baseApi.reducerPath]: baseApi.reducer,
});

const store = configureStore({
  reducer: (state, action) => reducer(signOutAction.match(action) ? undefined : state, action),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
