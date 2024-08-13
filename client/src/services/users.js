import axios from "axios";
import { baseURL } from "../constants";

const api = axios.create({
  baseURL,
});

export const createNewUser = async (user) => {
  const newUser = await api.post("/users/signup", user);

  return newUser.data;
};

export const loginUser = async (user) => {
  const userLogin = await api.post("/users/signin", user);

  return userLogin.data;
};
