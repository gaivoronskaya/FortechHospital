import appointmentsEnums from "../enums/appointments";

export const startGetAppointment = (payload) => {
  return {
    type: appointmentsEnums.GET_APPOINTMENT,
    payload,
  };
};

export const successGetAppointment = (payload) => {
  return {
    type: appointmentsEnums.GET_APPOINTMENT_SUCCESS,
    payload,
  };
};

export const errorGetAppointment = (error) => {
  return {
    type: appointmentsEnums.GET_APPOINTMENT_ERROR,
    error,
  };
};

export const startCreateAppointment = (payload) => {
  return {
    type: appointmentsEnums.CREATE_APPOINTMENT,
    payload,
  };
};

export const successCreateAppointment = (payload) => {
  return {
    type: appointmentsEnums.CREATE_APPOINTMENT_SUCCESS,
    payload,
  };
};

export const errorCreateAppointment = (error) => {
  return {
    type: appointmentsEnums.CREATE_APPOINTMENT_ERROR,
    error,
  };
};

export const startUpdateAppointment = (playload) => {
  return {
    type: appointmentsEnums.UPDATE_APPOINTMENT,
    playload,
  };
};

export const successUpdateAppointment = (playload) => {
  return {
    type: appointmentsEnums.UPDATE_APPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorUpdateAppointment = (error) => {
  return {
    type: appointmentsEnums.UPDATE_APPOINTMENT_ERROR,
    error,
  };
};

export const startDeleteAppointment = (playload) => {
  return {
    type: appointmentsEnums.DELETE_APPPOINTMENT,
    playload,
  };
};

export const successDeleteAppointment = (playload) => {
  return {
    type: appointmentsEnums.DELETE_APPPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorDeleteAppointment = (error) => {
  return {
    type: appointmentsEnums.DELETE_APPPOINTMENT_ERROR,
    error,
  };
};