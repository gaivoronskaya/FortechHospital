import { createNewUser } from "../../services/users";
import { startAddUser, successAddUser, errorAddUser } from "../actions/users";

export const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startAddUser());
      const newUser = await createNewUser(user);
      dispatch(successAddUser(newUser));
      console.log("успешно")
    } catch (error) {
      const errorText = error.newUser
        ? error.newUser.data.message
        : error.message;
      dispatch(errorAddUser(errorText));
      console.log("ха")
    }
  };
};
