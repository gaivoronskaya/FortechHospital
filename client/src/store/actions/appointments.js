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
