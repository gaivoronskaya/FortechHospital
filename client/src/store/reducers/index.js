import { combineReducers } from "redux";
import userReducer from "./task";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
