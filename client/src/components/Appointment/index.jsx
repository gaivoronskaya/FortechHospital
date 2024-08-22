import { formatDate } from "../../helpers/formate-date";
import {
  StyledCell,
  StyledLineCell,
  StyledButtonRenameAppointment,
  StyledButtonDelete,
  StyledButtons,
} from "./style";

const Appointment = ({ appointment }) => {
  return (
    <StyledLineCell>
      <StyledCell>{appointment.name}</StyledCell>
      <StyledCell>{appointment.doctor}</StyledCell>
      <StyledCell>{formatDate(appointment.date)}</StyledCell>
      <StyledCell>{appointment.complaint}</StyledCell>
      <StyledCell>
        <StyledButtons>
          <StyledButtonDelete />
          <StyledButtonRenameAppointment classNameButton="renameButton" />
        </StyledButtons>
      </StyledCell>
    </StyledLineCell>
  );
};

export default Appointment;
