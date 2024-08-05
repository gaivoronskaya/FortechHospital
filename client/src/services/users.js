import axios from "axios";
import { baseURL } from "../constants";

const api = axios.create({
  baseURL,
});

export const createNewUser = async (user) => {
  const newUser = await api.post("/users/signup", user);

  return newUser.data;
};  