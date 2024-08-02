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
    default:
      return state;
  }
};

export default userReducer;
