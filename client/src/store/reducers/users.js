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
        user: action.payload,
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
        isAuth: true,
      };

    case userEnums.LOGIN_USER_SUCCESS:
      return {
        error: null,
        user: action.payload,
        isAuth: true,
      };

    case userEnums.LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false,
      };

      case userEnums.REFRESH_TOKEN:
        return {
          ...state,
          error: null,
        };

      case userEnums.REFRESH_TOKEN_SUCCESS:
        return {
          error: null,
          isAuth: true,
        };
        
      case userEnums.REFRESH_TOKEN_ERROR:
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
