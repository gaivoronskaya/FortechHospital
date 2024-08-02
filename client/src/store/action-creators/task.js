import { createNewUser } from "../../services";
import { startAddUser, successAddUser, errorAddUser } from "../actions/tasks";

const addNewUser = (user) => {
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

export default addNewUser;
