import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { API_URL } from "~src/config";
import { storage } from "~src/utils";

function authRequestInterceptor(
  config: AxiosRequestConfig
): AxiosRequestConfig {
  const userInfo = storage.getUserInfo();
  if (config.headers) {
    if (userInfo) {
      config.headers.authorization = `Bearer ${userInfo.token}`;
    }
    config.headers.Accept = "application/json";
  }
  return config;
}

export const axios: AxiosInstance = Axios.create({
  baseURL: API_URL,
});

// @ts-ignore
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use((response) => response);
