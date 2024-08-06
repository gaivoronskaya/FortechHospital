import {
  createNewUser,
  loginUser,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../../services";
import {
  startAddUser,
  successAddUser,
  errorAddUser,
  startLoginUser,
  successLoginUser,
  errorLoginUser,
  startRenameAppointment,
  successSendAppointment,
  errorSendAppointment,
  startSendAppointment,
  successRenameAppointment,
  errorRenameAppointment,
  startDeleteAppointment,
  successDeleteAppointment,
  errorDeleteAppointment,
} from "../actions/tasks";

export const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startAddUser());
      const response = await createNewUser(user);

      console.log("Пользователь добавлен успешно!");
      dispatch(successAddUser(response));
    } catch (error) {
      console.error("Error object:", error);
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorAddUser(errorText));
    }
  };
};

export const loginUserAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startLoginUser());
      const response = await loginUser(user);

      dispatch(successLoginUser(response));
      console.log("Вход успешный");
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorLoginUser(errorText));
    }
  };
};

export const sendAppointment = (appointment) => {
  return async (dispatch) => {
    try {
      dispatch(startSendAppointment());
      const response = await createAppointment(appointment);

      dispatch(successSendAppointment(response));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorSendAppointment(errorText));
    }
  };
};

export const renameAppointment = (appointment) => {
  return async (dispatch) => {
    try {
      dispatch(startRenameAppointment());
      const response = await updateAppointment(appointment);

      dispatch(successRenameAppointment(response));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorRenameAppointment(errorText));
    }
  };
};

export const deleteOneAppointment = (appointment) => {
  return async (dispatch) => {
    try {
      dispatch(startDeleteAppointment());
      const response = await deleteAppointment(appointment);

      dispatch(successDeleteAppointment(response));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorDeleteAppointment(errorText));
    }
  };
};
