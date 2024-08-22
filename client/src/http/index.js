import axios from "axios";
import store from "../store";
import { refreshToken } from "../services/users";
import { errorRefreshToken } from "../store/actions/users";
import { baseURL } from "../constants";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();

        localStorage.setItem("accessToken", newAccessToken);
        api.defaults.headers.Authorization = `Bearer ${newAccessToken}`;

        return api.request(originalRequest);
      } catch (refreshError) {
        store.dispatch(errorRefreshToken(refreshError.message));
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
