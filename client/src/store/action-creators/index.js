import * as UserActionCreators from "./users";
import * as AppointmentsActionCreators from "./appointments";

export default {
  ...UserActionCreators,
  ...AppointmentsActionCreators,
};
