import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './Api';

export const tagTypes = [
  'Auth',
] as const;

const baseApi = createApi({
  reducerPath: '/api',
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes,
  endpoints: () => ({}),
});

export default baseApi;
