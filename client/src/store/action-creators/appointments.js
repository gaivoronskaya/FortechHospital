import {
  getAppointments,
  createNewAppointments,
  updateAppointment,
  deleteAppointment,
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
  startDeleteAppointment,
  successDeleteAppointment,
  errorDeleteAppointment,
} from "../actions/appointments";

export const getUserAppointments = () => {
  return async (dispatch) => {
    try {
      dispatch(startGetAppointment());
      const appointmentList = await getAppointments();

      dispatch(successGetAppointment(appointmentList));
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
      const newAppointment = await createNewAppointments(appointmentData);

      dispatch(successCreateAppointment(newAppointment));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorCreateAppointment(errorText));
    }
  };
};

export const updateAppointmentAsync = (id, appointment) => async (dispatch) => {
  dispatch(startUpdateAppointment());

  try {
    const updatedAppointment = await updateAppointment(id, appointment);

    dispatch(successUpdateAppointment(updatedAppointment));
  } catch (error) {
    dispatch(errorUpdateAppointment(error.message));
  }
};

export const deleteAppointmentAsync = (id) => async (dispatch) => {
  dispatch(startDeleteAppointment());

  try {
    const deletedAppointment = await deleteAppointment(id);

    dispatch(successDeleteAppointment(deletedAppointment));
  } catch (error) {
    dispatch(errorDeleteAppointment(error.message));
  }
};
