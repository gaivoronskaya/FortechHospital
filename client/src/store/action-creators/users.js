import {
  createNewUser,
  loginUser,
} from "../../services/users";
import {
  startAddUser,
  successAddUser,
  errorAddUser,
  startLoginUser,
  successLoginUser,
  errorLoginUser,
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
      const userId = response.user.id;
      console.log(userId, "ЛДЛ")

      dispatch(successLoginUser({
        user: response.user,
        userId: userId,
      }));
    } catch (error) { 
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorLoginUser(errorText));
    }
  };
};
