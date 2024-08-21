import { api } from "../http";

export const getAppointments = async () => {
  const appointments = await api.get("/appointments");

  return appointments.data;
};

export const createNewAppointments = async (appointmentData) => {
  const newAppointments = await api.post("/appointments", appointmentData);

  return newAppointments.data;
}
