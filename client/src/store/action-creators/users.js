import {
  createNewUser,
  loginUser,
  getAppointments,
} from "../../services/users";
import {
  startAddUser,
  successAddUser,
  errorAddUser,
  startLoginUser,
  successLoginUser,
  errorLoginUser,
  startGetAppointment,
  successGetAppointment,
  errorGetAppointment,
  logoutUser,
} from "../actions/users";

export const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startAddUser());
      const newUser = await createNewUser(user);
      dispatch(successAddUser(newUser));
    } catch (error) {
      const errorText = error.newUser
        ? error.newUser.data.message
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
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorLoginUser(errorText));
    }
  };
};
export const getUserAppointments = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(startGetAppointment());
      const response = await getAppointments(userId);

      dispatch(successGetAppointment(response));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorGetAppointment(errorText));
    }
  };
};

// export const logoutUserAction = () => {
//   return (dispatch) => {
//     dispatch(logoutUser());
//   };
// };
