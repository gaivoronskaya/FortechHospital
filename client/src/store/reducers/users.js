import taskEnums from "../enums/users";

const initialState = {
  users: "",
  error: null,
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskEnums.ADD_USER:
      return {
        ...state,
        error: null,
      };
    case taskEnums.ADD_USER_SUCCESS:
      if (state.users === action.payload.name) {
        return {
          ...state,
          error: "User already exists",
          isAuth: false,
        };
      }
      return {
        ...state,
        users: action.payload.name,
        error: null,
        isAuth: true,
      };
    case taskEnums.ADD_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false,
      };
    case taskEnums.LOGIN_USER:
      return {
        ...state,
        error: null,
      };
    case taskEnums.LOGIN_USER_SUCCESS:
      return {
        ...state,
        error: null,
        users: action.payload.name,
        isAuth: true,
      };
    case taskEnums.LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
