import { createNewUser, loginUser } from "../../services";
import {
  startAddUser,
  successAddUser,
  errorAddUser,
  startLoginUser,
  successLoginUser,
  errorLoginUser,
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
