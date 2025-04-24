import axios, { type AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8090";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "content-type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status == 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;  
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
