import {
  getAppointments,
  createNewAppointments,
  updateAppointment,
} from "../../services/appointments";
import {
  startGetAppointment,
  successGetAppointment,
  errorGetAppointment,
  startCreateAppointment,
  successCreateAppointment,
  errorCreateAppointment,
  startUpdateAppointment,
  successUpdateAppointment,
  errorUpdateAppointment,
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

export const updateAppointmentAsync = (id, updatedData) => async (dispatch) => {
  dispatch(startUpdateAppointment());

  try {
    const updatedAppointment = await updateAppointment(id, updatedData);
    dispatch(successUpdateAppointment(updatedAppointment));
  } catch (error) {
    dispatch(errorUpdateAppointment(error.message));
  }
};
