import hospitalPart from "../enums/users";

const initialState = {
  users: {},
  error: null,
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case hospitalPart.ADD_USER:
      return {
        ...state,
        error: null,
      };
    case hospitalPart.ADD_USER_SUCCESS:
      if (state.users[action.payload.id]) {
        return {
          ...state,
          isAuth: false,
        };
      }
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.id]: action.payload,
        },
        error: null,
        isAuth: true,
      };
    case hospitalPart.ADD_USER_ERROR:
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
