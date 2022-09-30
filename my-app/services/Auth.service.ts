import { User } from 'models/User';
import baseApi from './BaseApi.service';

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  password: string;
  password_confirmation: string;
  token: string;
  email: string;
}

export interface RegisterGuestRequest {
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface LoginPublicRequest {
  query: string;
}

export const authApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    forgotPassword: build.mutation<void, ForgotPasswordRequest>({
      query: (data) => ({ method: 'POST', url: '/forgot-password', data }),
    }),
    resetPassword: build.mutation<void, ResetPasswordRequest>({
      query: (data) => ({ method: 'POST', url: '/reset-password', data }),
    }),
    registerGuest: build.mutation<User, RegisterGuestRequest>({
      query: (data) => ({ method: 'POST', url: '/register-guest', data }),
    }),
    loginPublic: build.mutation<User, LoginPublicRequest>({
      query: ({ query }) => ({ method: 'POST', url: `/public/login?${query}` }),
    }),
  }),
});

export const {
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRegisterGuestMutation,
  useLoginPublicMutation,
} = authApi;
