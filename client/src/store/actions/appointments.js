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
