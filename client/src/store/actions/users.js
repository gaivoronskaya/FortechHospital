import userEnums from "../enums/users";

export const startAddUser = (payload) => {
  return {
    type: userEnums.ADD_USER,
    payload,
  };
};

export const successAddUser = (payload) => {
  return {
    type: userEnums.ADD_USER_SUCCESS,
    payload,
  };
};

export const errorAddUser = (error) => {
  return {
    type: userEnums.ADD_USER_ERROR,
    error,
  };
};

export const startLoginUser = (payload) => {
  return {
    type: userEnums.LOGIN_USER,
    payload,
  };
};

export const successLoginUser = (payload) => {
  return {
    type: userEnums.LOGIN_USER_SUCCESS,
    payload,
  };
};

export const errorLoginUser = (error) => {
  return {
    type: userEnums.LOGIN_USER_ERROR,
    error,
  };
};

export const startRefreshToken = () => {
  return {
    type: userEnums.REFRESH_TOKEN,
  };
};

export const successRefreshToken = (payload) => {
  return {
    type: userEnums.REFRESH_TOKEN_SUCCESS,
    payload,
  };
};

export const errorRefreshToken = (error) => {
  return {
    type: userEnums.REFRESH_TOKEN_ERROR,
    error,
  };
};

export const startLogoutUser = () => {
  return {
    type: userEnums.LOGOUT_USER,
  };
};

export const successLogoutUser = () => {
  return {
    type: userEnums.LOGOUT_USER_SUCCESS,
  };
};

export const errorLogoutUser = (error) => {
  return {
    type: userEnums.LOGOUT_USER_ERROR,
    error,
  };
};