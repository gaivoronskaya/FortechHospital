import appointmentsEnums from "../enums/appointments";

const initialState = {
  appointments: [],
  error: null,
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case appointmentsEnums.GET_APPOINTMENT:
      return {
        ...state,
        error: null,
      };

    case appointmentsEnums.GET_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointments: action.playload,
        error: null,
      };

    case appointmentsEnums.GET_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default appointmentsReducer;
