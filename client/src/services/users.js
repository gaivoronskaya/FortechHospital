import { api } from "../http";

export const createNewUser = async (user) => {
  const newUser = await api.post("/users/signup", user);

  return newUser.data;
};

export const loginUser = async (user) => {
  const userLogin = await api.post("/users/signin", user);

  return userLogin.data;
};

export const refreshToken = async () => {
  const response = await api.get("/refresh");

  return response.data;
};
