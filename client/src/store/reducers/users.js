import userEnums from "../enums/users";

const initialState = {
  user: {},
  error: null,
  isAuth: false,
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
        isAuth: false,
        error: null,
      };

    case userEnums.LOGIN_USER_SUCCESS:
      return {
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

    default:
      return state;
  }
};

export default userReducer;
