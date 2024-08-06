import axios from "axios";
import { baseURL } from "../constants";

const api = axios.create({
  baseURL,
});

export const createNewUser = async (user) => {
  const response = await api.post("/users/signup", user);

  return response.data;
};

export const loginUser = async (user) => {
  const response = await api.post("/users/signin", user);

  return response.data;
};

export const getAppointments = async () => {
  const response = await api.get("/");

  return response.data;
};

export const createAppointment = async (appointments) => {
  const response = await api.post("/", appointments);

  return response.data;
};

export const updateAppointment = async (appointmentId) => {
  const response = await api.patch(`/:${appointmentId}`);

  return response.data;
};

export const deleteAppointment = async (appointmentId) => {
  const response = await api.delete(`/:${appointmentId}`);

  return response.data;
};
