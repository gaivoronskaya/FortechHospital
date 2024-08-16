import axios from "axios";
import { refreshToken } from "../services/users"; // Импорт функции для рефреша токена
import { baseURL } from "../constants";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

// // Интерцептор для добавления токена в заголовки запросов
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token') || sessionStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Интерцептор для обработки ответов и обновления токена
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
      
//       try {
//         const newToken = await refreshToken();
//         axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
//         return api(originalRequest); // Повторяем запрос с новым токеном
//       } catch (refreshError) {
//         console.error('Ошибка обновления токена:', refreshError);
//         window.location.href = '/login'; // Перенаправляем на страницу логина
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );


// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const newToken = await refreshToken();
        
//         localStorage.setItem('token', newToken);

//         originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error('Ошибка обновления токена:', refreshError);
//         window.location.href = '/login';
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
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

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Попробуйте обновить токен
        const { data } = await refreshToken(); // Предположим, что рефреш токен возвращает объект с новым токеном
        const newToken = data.token; // Путь к новому токену может отличаться

        // Обновите токен в localStorage или sessionStorage
        localStorage.setItem('token', newToken);

        // Установите новый токен в заголовки
        api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

        // Повторите запрос с новым токеном
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Ошибка обновления токена:', refreshError);
        window.location.href = '/login'; // Перенаправляем на страницу логина
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);