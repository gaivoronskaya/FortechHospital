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

export const startSendAppointment = (playload) => {
  return {
    type: appointmentsEnums.SEND_APPOINTMENT,
    playload,
  };
};

export const successSendAppointment = (playload) => {
  return {
    type: appointmentsEnums.SEND_APPOINTMENT_SUCCESS,
    playload,
  };
};

export const errorSendAppointment = (playload) => {
  return {
    type: appointmentsEnums.SEND_APPOINTMENT_ERROR,
    playload,
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
