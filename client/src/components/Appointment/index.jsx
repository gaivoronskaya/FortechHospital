import CustomButton from "../UI/CustomButton";
import { formatDate } from "../../helpers/formate-date";
import { StyledCell, StyledLineCell, StyledButtons } from "./style";

const Appointment = ({ appointment, handleEditAppointment }) => {
  return (
    <StyledLineCell>
      <StyledCell>{appointment.name}</StyledCell>
      <StyledCell>{appointment.doctor}</StyledCell>
      <StyledCell>{formatDate(appointment.date)}</StyledCell>
      <StyledCell>{appointment.complaint}</StyledCell>
      <StyledCell>
        <StyledButtons>
          <CustomButton classNameButton="appointment__all-button appointment__all-button_delete-button" />
          <CustomButton
            classNameButton="appointment__all-button appointment__all-button_edit-button"
            handleActionButton={handleEditAppointment}
          />
        </StyledButtons>
      </StyledCell>
    </StyledLineCell>
  );
};

export default Appointment;
