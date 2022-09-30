import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { queryParams } from 'utils/helpers/url';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params = {} }) => {
    try {
      const response = await axios({
        url,
        method,
        data,
        params,
        paramsSerializer: (params) => queryParams(params).slice(1),
      });
      return { data: response, meta: response, params };
    } catch (e) {
      const err = e as AxiosError;
      return { error: baseUrl + url, err, data , params };
    }
  };

