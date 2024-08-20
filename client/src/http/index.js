//!!!!!!!!!!!!!!! Без библиотеки не могу решить проблему сохранения isAth. По этому данный код в данный момент бесполезен 


import axios from "axios";
import { refreshToken } from "../services/users";
import { baseURL } from "../constants";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

// api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem(
//     "accessToken"
//   )}`;

//   return config;
// });

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         const newAccessToken = await refreshToken();
//         console.log("NEW", newAccessToken);

//         localStorage.setItem("accessToken", newAccessToken);
//         sessionStorage.setItem("accessToken", newAccessToken);

//         // api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
//         // originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

//         return api.request(originalRequest);
//       } catch (error) {
//         throw error;
//       }
//     }
//   }
// );

// export default api;
