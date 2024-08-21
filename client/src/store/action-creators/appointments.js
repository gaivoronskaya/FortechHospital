import {
  getAppointments,
  sendNewAppointments,
  updateAppointment,
} from "../../services/appointments";
import {
  startGetAppointment,
  successGetAppointment,
  errorGetAppointment,
  startSendAppointment,
  successSendAppointment,
  errorSendAppointment,
  startUpdateAppointment,
  successUpdateAppointment,
  errorUpdateAppointment,
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

export const updateAppointmentAsync = (id, updatedData) => async (dispatch) => {
  dispatch(startUpdateAppointment());

  try {
    const updatedAppointment = await updateAppointment(id, updatedData);
    dispatch(successUpdateAppointment(updatedAppointment));
  } catch (error) {
    dispatch(errorUpdateAppointment(error.message));
  }
};
