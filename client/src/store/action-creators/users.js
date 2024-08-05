import { createNewUser } from "../../services/users";
import { startAddUser, successAddUser, errorAddUser } from "../actions/users";

const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startAddUser());
      const newUser = await createNewUser(user);

      console.log("Пользователь добавлен успешно!");
      dispatch(successAddUser(newUser));
    } catch (error) {
      console.error("Error object:", error);
      const errorText = error.newUser
        ? error.newUser.data.message
        : error.message;
      dispatch(errorAddUser(errorText));
    }
  };
};

export default addNewUser;
