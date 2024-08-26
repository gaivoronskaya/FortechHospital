import Appointment from "../Appointment";
import { tableHeaders } from "../../constants";
import { StyledTable, StyledLine, StyledTitle, StyledCellsBody } from "./style";

const TableAppointment = ({ appointments, handleEditAppointment }) => {
  return (
    <StyledTable>
      <thead>
        <StyledLine>
          {tableHeaders.map((header, index) => (
            <StyledTitle key={index}>{header}</StyledTitle>
          ))}
        </StyledLine>
      </thead>
      <StyledCellsBody>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment._id}
            appointment={appointment}
            handleEditAppointment={() => handleEditAppointment(appointment._id)}
          />
        ))}
      </StyledCellsBody>
    </StyledTable>
  );
};

export default TableAppointment;
