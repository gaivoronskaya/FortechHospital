import { formatDate } from "../../helpers/formate-date";
import CustomButton from "../UI/CustomButton";
import {
  StyledTable,
  StyledLine,
  StyledCell,
  StyledTitle,
  StyledCellsBody,
  StyledButtonRename,
  StyledButtonDelete,
  StyledLineCell,
  StyledButtons,
} from "./style";

const TableTechniques = ({ techniques, handleEditAppointment }) => {
  return (
    <StyledTable>
      <StyledLine>
        <StyledTitle>Имя</StyledTitle>
        <StyledTitle>Врач</StyledTitle>
        <StyledTitle>Дата</StyledTitle>
        <StyledTitle>Жалобы</StyledTitle>
        <StyledTitle />
      </StyledLine>
      <StyledCellsBody>
        {techniques.map((technique) => (
          <StyledLineCell key={technique._id}>
            <StyledCell>{technique?.name || ""}</StyledCell>
            <StyledCell>{technique?.doctor || ""}</StyledCell>
            <StyledCell>{formatDate(technique?.date || "")}</StyledCell>
            <StyledCell>{technique?.complaint || ""}</StyledCell>
            <StyledCell>
              <StyledButtons>
                <CustomButton as={StyledButtonDelete} />
                <CustomButton handleActionButton={() => handleEditAppointment(technique._id)} as={StyledButtonRename} />
              </StyledButtons>
            </StyledCell>
          </StyledLineCell>
        ))}
      </StyledCellsBody>
    </StyledTable>
  );
};

export default TableTechniques;