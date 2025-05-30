import { authkey } from "@/constants/authkey";
import { TGenericErrorResponse, TResponseSuccess } from "@/types";

import { getFromLocalStorage } from "@/utils/localStroge";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const accessToken = getFromLocalStorage(authkey);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignored
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const responseObject: TResponseSuccess = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const responseObject: TGenericErrorResponse = {
      statusCode: error?.renponse?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something is wrong..!",
      errorMessages: error?.response?.data?.errorMessage,
    };

    // return Promise.reject(error);

    return responseObject;
  }
);

export { instance };
