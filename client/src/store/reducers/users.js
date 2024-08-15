import userEnums from "../enums/users";

const initialState = {
  user:{},
  error: null,
  isAuth: false,
  appointments: [],
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userEnums.ADD_USER:
      return {
        ...state,
        error: null,
      };

    case userEnums.ADD_USER_SUCCESS:
      return {
        user: action.payload.user,
        error: null,
        isAuth: true,
      };

    case userEnums.ADD_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false,
      };

    case userEnums.LOGIN_USER:
      return {
        ...state,
        error: null,
      };

    case userEnums.LOGIN_USER_SUCCESS:
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("isAuth", "true");

      return {
        ...state,
        error: null,
        user: action.payload.user,
        isAuth: true,
      };

    case userEnums.LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false,
      };

    case userEnums.GET_APPOINTMENT:
      return {
        ...state,
        error: null,
        isLoading: false,
      };

    case userEnums.GET_APPOINTMENT_SUCCESS:
      return {
        appointments: action.payload.appointments,
        error: null,
        isLoading: true,
      };

    case userEnums.GET_APPOINTMENT_ERROR:
      return {
        error: action.error,
        response: null,
        isLoading: false,
      };
    // case userEnums.LOGOUT_USER:
    //   localStorage.removeItem("user");
    //   localStorage.removeItem("isAuth");
    //   return {
    //     ...state,
    //     user: {},
    //     isAuth: false,
    //     error: null,
    //   };

    default:
      return state;
  }
};

export default userReducer;
