import { createNewUser, loginUser } from "../../services/users";
import {
  startAddUser,
  successAddUser,
  errorAddUser,
  startLoginUser,
  successLoginUser,
  errorLoginUser,
  startRefreshToken,
  successRefreshToken,
  errorRefreshToken,
} from "../actions/users";

export const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startAddUser());
      const newUser = await createNewUser(user);

      localStorage.setItem("accessToken", newUser.accessToken);
      dispatch(successAddUser(newUser));
    } catch (error) {
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
      const signIn = await loginUser(user);

      localStorage.setItem("accessToken", signIn.accessToken);
      dispatch(successLoginUser(signIn.user));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorLoginUser(errorText));
    }
  };
};

export const refreshTokenAction = () => {
  return async (dispatch) => {
    try {
      dispatch(startRefreshToken());
      const newTokenResponse = await loginUser();

      localStorage.setItem("accessToken", newTokenResponse.data.accessToken);
      dispatch(successRefreshToken(newTokenResponse.data));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorRefreshToken(errorText));
    }
  };
};
