import { api } from "../http";

export const getAppointments = async () => {
  const appointments = await api.get("/appointments");
  //  console.log(appointments.data);

  return appointments.data;
};

export const createNewAppointments = async (appointmentData) => {
  const newAppointments = await api.post("/appointments", appointmentData);

  return newAppointments.data;
};

export const updateAppointment = async (id, editingAppointment) => {
  const updateAppointment = await api.patch(
    `/appointments/${id}`,
    editingAppointment
  );

  return updateAppointment.data;
};

export const deleteAppointment = async (id) => {
  const appointment = await api.delete(`/appointments/${id}`);

  return appointment.data;
};
