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

export const getAppointments = async (userId) => {
  const response = await api.get(`/appointments?userId=${userId}`);

  return response.data;
};

export const createAppointment = async (appointments) => {
  const response = await api.post("/appointments", appointments);

  return response.data;
};

export const updateAppointment = async (appointmentId) => {
  const response = await api.patch(`/appointments:${appointmentId}`);

  return response.data;
};

export const deleteAppointment = async (appointmentId) => {
  const response = await api.delete(`/appointments:${appointmentId}`);

  return response.data;
};
