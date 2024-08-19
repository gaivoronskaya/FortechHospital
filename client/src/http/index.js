import axios from "axios";
import { refreshToken } from "../services/users"; // Импорт функции для рефреша токена
import { baseURL } from "../constants";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Интерцептор для обработки ответов и обновления токена
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log("Error status:", error.response ? error.response.status : "No response");

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();
        console.log("New access token:", newAccessToken);

        localStorage.setItem("token", newAccessToken);
        sessionStorage.setItem("token", newAccessToken);

        api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (error) {
        console.log("Failed to refresh token, redirecting to login...");
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        window.location.href = "/login";

        return Promise.reject(error);
      }
    }

    if (error.response && error.response.status === 500) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;