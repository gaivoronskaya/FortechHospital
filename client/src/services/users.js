import { api } from "../http";

export const createNewUser = async (user) => {
  const newUser = await api.post("/users/signup", user);

  return newUser.data;
};

export const loginUser = async (user) => {
  const userLogin = await api.post("/users/signin", user);
  localStorage.setItem('token', userLogin.data.accessToken);
  sessionStorage.setItem('token', userLogin.data.accessToken);

  return userLogin.data;
};

export const getAppointments = async (userId) => {
  const response = await api.get(`/appointments?userId=${userId}`);

  return response.data;
};

export const refreshToken = async () => {
  const response = await api.get('/refresh');
  
  // Обновляем токены
  localStorage.setItem('token', response.data.accessToken);
  sessionStorage.setItem('token', response.data.accessToken);

  return response.data.accessToken;
};
