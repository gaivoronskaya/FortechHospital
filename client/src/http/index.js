import axios from "axios";
import { refreshToken } from "../services/users";
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

        return api.request(originalRequest);
      } catch (error) {
        throw error;
      }
    }
  }
);

export default api;
