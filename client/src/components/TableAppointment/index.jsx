import { tableHeaders } from "../../constants";
import AppointmentItem from "../AppointmentItem";
import {
  StyledTable,
  StyledLine,
  StyledTitle,
  StyledCellsBody,
} from "./style";

const TableAppointment = ({ appointments }) => {
  return (
    <StyledTable>
      <StyledLine>
        {tableHeaders.map((header, index) => (
          <StyledTitle key={index}>{header}</StyledTitle>
        ))}
      </StyledLine>
      <StyledCellsBody>
        {appointments.map((appointment) => (
          <AppointmentItem key={appointment._id} appointment={appointment} />
        ))}
      </StyledCellsBody>
    </StyledTable>
  );
};

export default TableAppointment;