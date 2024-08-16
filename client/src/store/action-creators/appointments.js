import {
  getAppointments,
} from "../../services/appointments";
import {
  startGetAppointment,
  successGetAppointment,
  errorGetAppointment,
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