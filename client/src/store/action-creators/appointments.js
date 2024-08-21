import {
  getAppointments,
  createNewAppointments,
} from "../../services/appointments";
import {
  startGetAppointment,
  successGetAppointment,
  errorGetAppointment,
  startCreateAppointment,
  successCreateAppointment,
  errorCreateAppointment,
} from "../actions/appointments";

export const getUserAppointments = () => {
  return async (dispatch) => {
    try {
      dispatch(startGetAppointment());
      const getAppointment = await getAppointments();

      dispatch(successGetAppointment(getAppointment));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorGetAppointment(errorText));
    }
  };
};

export const createAppointments = (appointmentData) => {
  return async (dispatch) => {
    try {
      dispatch(startCreateAppointment());
      const addAppointments = await createNewAppointments(appointmentData);
      
      dispatch(successCreateAppointment(addAppointments));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorCreateAppointment(errorText));
    }
  };
};

