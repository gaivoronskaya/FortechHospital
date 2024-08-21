import { combineReducers } from "redux";
import appointmentsReducer from "./appointments";
import userReducer from "./users";

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
});

export default rootReducer;
