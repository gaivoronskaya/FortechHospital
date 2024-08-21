import appointmentsEnums from "../enums/appointments";

export const startGetAppointment = (payload) => {
  return {
    type: appointmentsEnums.GET_APPOINTMENT,
    payload,
  };
};

export const successGetAppointment = (playload) => {
  return {
    type: appointmentsEnums.GET_APPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorGetAppointment = (error) => {
  return {
    type: appointmentsEnums.GET_APPOINTMENT_ERROR,
    error,
  };
};

export const startCreateAppointment = (playload) => {
  return {
    type: appointmentsEnums.CREATE_APPOINTMENT,
    playload,
  };
};

export const successCreateAppointment = (playload) => {
  return {
    type: appointmentsEnums.CREATE_APPOINTMENT_SUCCESS,
    playload,
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
