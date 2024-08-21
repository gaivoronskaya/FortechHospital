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

export const startGetAppointment = (playload) => {
  return {
    type: userEnums.GET_APPOINTMENT,
    playload,
  };
};

export const successGetAppointment = (playload) => {
  return {
    type: userEnums.GET_APPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorGetAppointment = (error) => {
  return {
    type: userEnums.GET_APPOINTMENT_ERROR,
    error,
  };
};
