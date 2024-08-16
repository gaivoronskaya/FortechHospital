import { api } from "../http";

export const getAppointments = async () => {
  const response = await api.get("/appointments");

  return response.data;
};
