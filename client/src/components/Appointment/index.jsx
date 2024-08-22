import CustomButton from "../UI/CustomButton";
import { formatDate } from "../../helpers/formate-date";
import { StyledCell, StyledLineCell, StyledButtons } from "./style";

const Appointment = ({ appointment }) => {
  return (
    <StyledLineCell>
      <StyledCell>{appointment.name}</StyledCell>
      <StyledCell>{appointment.doctor}</StyledCell>
      <StyledCell>{formatDate(appointment.date)}</StyledCell>
      <StyledCell>{appointment.complaint}</StyledCell>
      <StyledCell>
        <StyledButtons>
          <CustomButton classNameButton="styled-buttons_all-button styled-buttons_delete-button" />
          <CustomButton classNameButton="styled-buttons_all-button styled-buttons_rename-button" />
        </StyledButtons>
      </StyledCell>
    </StyledLineCell>
  );
};

export default Appointment;
