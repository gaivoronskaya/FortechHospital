import taskEnums from "../enums/task";

const initialState = {
  users: [],
  error: null,
  response: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskEnums.ADD_USER:
      return {
        ...state,
        error: null,
        response: null,
      };

    case taskEnums.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null,
        response: action.payload,
      };

    case taskEnums.ADD_USER_ERROR:
      return {
        ...state,
        error: action.error,
        response: null,
      };

    case taskEnums.LOGIN_USER:
      return {
        ...state,
        error: null,
        response: null,
      };

    case taskEnums.LOGIN_USER_SUCCESS:
      return {
        ...state,
        error: null,
        response: action.payload,
      };

    case taskEnums.LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.error,
        response: null,
      };

    case taskEnums.SEND_APPOINTMENT:
      return {
        ...state,
        error: null,
        response: null,
      };

    case taskEnums.SEND_APPOINTMENT_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null,
        response: action.payload,
      };

    case taskEnums.SEND_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
        response: null,
      };

      case taskEnums.RENAME_APPOINTMENT:
      return {
        ...state,
        error: null,
        response: null,
      };
    case taskEnums.RENAME_APPOINTMENT_SUCCESS:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
        error: null,
        response: action.payload,
      };
    case taskEnums.RENAME_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
        response: null,
      };

    case taskEnums.DELETE_APPOINTMENT:
      return {
        ...state,
        error: null,
        response: null,
      };
    case taskEnums.DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
        error: null,
        response: action.payload,
      };
    case taskEnums.DELETE_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
        response: null,
      };
    default:
      return state;
  }
};

export default userReducer;
