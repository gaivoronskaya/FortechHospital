import { api } from "../http";

export const createNewUser = async (user) => {
  const signUpResponse = await api.post("/users/signup", user);

  return signUpResponse.data;
};

export const loginUser = async (user) => {
  const userLoginResponse = await api.post("/users/signin", user);

  return userLoginResponse.data;
};

export const refreshToken = async () => {
  const newTokenResponse = await api.get("/refresh");

  return newTokenResponse.data;
};
