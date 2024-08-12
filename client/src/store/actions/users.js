import taskEnums from "../enums/users";

export const startAddUser = (payload) => {
  return {
    type: taskEnums.ADD_USER,
    payload,
  };
};

export const successAddUser = (payload) => {
  return {
    type: taskEnums.ADD_USER_SUCCESS,
    payload,
  };
};

export const errorAddUser = (error) => {
  return {
    type: taskEnums.ADD_USER_ERROR,
    error,
  };
};

export const startLoginUser = (payload) => {
  return {
    type: taskEnums.LOGIN_USER,
    payload,
  };
};

export const successLoginUser = (payload) => {
  return {
    type: taskEnums.LOGIN_USER_SUCCESS,
    payload,
  };
};

export const errorLoginUser = (error) => {
  return {
    type: taskEnums.LOGIN_USER_ERROR,
    error,
  };
};
