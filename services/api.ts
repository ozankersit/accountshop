import axios, {AxiosError, AxiosRequestConfig} from 'axios'
import axiosRetry from "axios-retry";   
import { isClientSide } from '../constans/helpers';
import { ApiErrorResponse } from './types/ApiResponse';

export const httpService = axios.create();

// retry
axiosRetry(httpService,
  {
    retries: 2,
    retryDelay: (retryCount) => {
      return retryCount * 1000;
    },
    shouldResetTimeout: true,
    retryCondition: (error) => {
      console.error(`Retry API Error ${error.code} ${error.message}`,
        {
          url: error?.config?.url,
          method: error?.config?.method,
          headers: error?.config?.headers,
          timeout: error?.config?.timeout
        } as AxiosRequestConfig)
      return true
    }
  }
);




// requests using this instance will wait 15 seconds before timing out
httpService.defaults.timeout = 15000;

// Alter defaults after instance has been created

if (typeof window !== "undefined" && window.localStorage.getItem("Authorization")) {
    httpService.defaults.headers.common['Authorization'] = window.localStorage.getItem("Authorization") ||'';
}

if (typeof window !== "undefined" && window.localStorage.getItem("tenantId")) {
  httpService.defaults.headers.common['tenantId'] = window.localStorage.getItem("tenantId") ||'';
}
// httpService.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
httpService.interceptors.request.use(function (config) {
  // Do something before request is sent
  !isClientSide() && console.log(`API info`,
    {
      url: config.url,
      method: config.method,
      body: config.data || '',
      //headers:config.headers
    } as AxiosRequestConfig)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
httpService.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response && response?.data && response?.data['error_api']) {
    const errorApi = response?.data['error_api'] as ApiErrorResponse;
    console.error(`API Error `, errorApi,
      {
        url: response.config.url,
        method: response.config.method,
        headers: response.config.headers,
        body: response.config.data || '',
        timeout: response.config.timeout
      } as AxiosRequestConfig)
    if (errorApi.http_status_code !== 200) {
      return Promise.reject(errorApi);
    }
  }
  return response;
}, function (error: AxiosError) {
  console.error(`API Error ${error.code} ${error.message}`,
    {
      url: error.config?.url,
      method: error.config?.method,
      headers: error.config?.headers,
      timeout: error.config?.timeout
    } as AxiosRequestConfig)
  if (error.response) {
    const resError = error.response;
    if (resError.status === 401) {
      // Alter defaults after instance has been created
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("Authorization");
        window.localStorage.removeItem("tenantId");
        window.location.href = "/login";
      }
    }
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(`API Response error ${resError.status} ${resError.statusText}`);
  } else if (error.request) {
    const reqError = error.request;
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.error(`API Request error ${reqError}`);
  } else {
    // Something happened in setting up the request that triggered an Error
  }
  return Promise.reject(error);
});
