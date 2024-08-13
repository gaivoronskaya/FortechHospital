import userEnums from "../enums/users";

const initialState = {
  users: {},
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
        ...state,
        users: {
          ...state.users,
          [action.payload.id]: action.payload,
        },
        error: null,
        isAuth: true,
      };

    case userEnums.ADD_USER_ERROR:
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
