import hospitalPart from "../enums/users";

export const startAddUser = (payload) => {
  return {
    type: hospitalPart.ADD_USER,
    payload,
  };
};

export const successAddUser = (payload) => {
  return {
    type: hospitalPart.ADD_USER_SUCCESS,
    payload,
  };
};

export const errorAddUser = (error) => {
  return {
    type: hospitalPart.ADD_USER_ERROR,
    error,
  };
};
