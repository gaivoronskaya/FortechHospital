import taskEnums from "../enums/task";

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

export const errorLoginUser = (payload) => {
  return {
    type: taskEnums.LOGIN_USER_ERROR,
    payload,
  };
};

export const startSendAppointment = (playload) => {
  return {
    type: taskEnums.SEND_APPOINTMENT,
    playload,
  };
};

export const successSendAppointment = (playload) => {
  return {
    type: taskEnums.SEND_APPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorSendAppointment = (playload) => {
  return {
    type: taskEnums.SEND_APPOINTMENT_ERROR,
    playload,
  };
};

export const startRenameAppointment = (playload) => {
  return {
    type: taskEnums.RENAME_APPOINTMENT,
    playload,
  };
};

export const successRenameAppointment = (playload) => {
  return {
    type: taskEnums.RENAME_APPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorRenameAppointment = (playload) => {
  return {
    type: taskEnums.RENAME_APPOINTMENT_ERROR,
    playload,
  };
};

export const startDeleteAppointment = (playload) => {
  return {
    type: taskEnums.DELETE_APPOINTMENT,
    playload,
  };
};

export const successDeleteAppointment = (playload) => {
  return {
    type: taskEnums.DELETE_APPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorDeleteAppointment = (playload) => {
  return {
    type: taskEnums.DELETE_APPOINTMENT_ERROR,
    playload,
  };
};
