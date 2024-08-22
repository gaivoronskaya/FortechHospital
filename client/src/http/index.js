import axios from "axios";
import { refreshToken } from "../services/users";
import { baseURL } from "../constants";
import useActions from "../hooks/useActions";

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
      const { logoutUser, errorRefreshToken } = useActions();

      try {
        const newAccessToken = await refreshToken();

        localStorage.setItem("accessToken", newAccessToken);

        return api.request(originalRequest);
      } catch (refreshError) {
        logoutUser();
        errorRefreshToken(refreshError.message);
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
