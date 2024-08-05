import taskEnums from "../enums/users";

const initialState = {
  users: "",
  error: null,
  newUser: null,
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskEnums.ADD_USER:
      return {
        ...state,
        error: null,
        newUser: null,
      };
    case taskEnums.ADD_USER_SUCCESS:
      if (state.users === action.payload.name) {
        return {
          ...state,
          error: "User already exists",
          newUser: null,
          isAuth: false,
        };
      }
      return {
        ...state,
        users: action.payload.name,
        error: null,
        newUser: action.payload,
        isAuth: true,
      };
    case taskEnums.ADD_USER_ERROR:
      return {
        ...state,
        error: action.error,
        newUser: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
