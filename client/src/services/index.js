import axios from "axios";
import { baseURL } from "../constants";

const api = axios.create({
  baseURL,
});

export const createNewUser = async (user) => {
  const response = await api.post("/users/signup", user);

  return response.data;
};  