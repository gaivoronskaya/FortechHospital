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
