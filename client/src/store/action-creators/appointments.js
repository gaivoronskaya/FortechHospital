import {
  getAppointments,
  sendNewAppointments,
} from "../../services/appointments";
import {
  startGetAppointment,
  successGetAppointment,
  errorGetAppointment,
  startSendAppointment,
  successSendAppointment,
  errorSendAppointment,
} from "../actions/appointments";

export const getUserAppointments = () => {
  return async (dispatch) => {
    try {
      dispatch(startGetAppointment());
      const response = await getAppointments();

      dispatch(successGetAppointment(response));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorGetAppointment(errorText));
    }
  };
};

export const sendAppointments = (appointmentData) => {
  return async (dispatch) => {
    try {
      dispatch(startSendAppointment());
      const response = await sendNewAppointments(appointmentData);
      
      dispatch(successSendAppointment(response));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorSendAppointment(errorText));
    }
  };
};

