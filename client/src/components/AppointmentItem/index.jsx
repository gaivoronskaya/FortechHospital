import { formatDate } from "../../helpers/formate-date";
import {
  StyledCell,
  StyledLineCell,
  StyledButtonRename,
  StyledButtonDelete,
  StyledButtons,
} from "./style";

const AppointmentItem = ({ appointment }) => {
  return (
    <StyledLineCell key={appointment._id}>
      <StyledCell>{appointment.name}</StyledCell>
      <StyledCell>{appointment.doctor}</StyledCell>
      <StyledCell>{formatDate(appointment.date)}</StyledCell>
      <StyledCell>{appointment.complaint}</StyledCell>
      <StyledCell>
        <StyledButtons>
          <StyledButtonDelete />
          <StyledButtonRename classNameButton="renameButton" />
        </StyledButtons>
      </StyledCell>
    </StyledLineCell>
  );
};

export default AppointmentItem;
