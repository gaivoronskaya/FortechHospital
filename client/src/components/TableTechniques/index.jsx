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

const TableTechniques = ({ techniques }) => {
  return (
    <StyledTable>
      <StyledLine>
        <StyledTitle>Имя</StyledTitle>
        <StyledTitle>Врач</StyledTitle>
        <StyledTitle>Дата</StyledTitle>
        <StyledTitle>Жалобы</StyledTitle>
        <StyledTitle></StyledTitle>
      </StyledLine>
      <StyledCellsBody>
        {techniques.map((technique) => (
          <StyledLineCell>
            <StyledCell key={technique._id}>{technique.name}</StyledCell>
            <StyledCell>{technique.doctor}</StyledCell>
            <StyledCell>{technique.date}</StyledCell>
            <StyledCell>{technique.complaint}</StyledCell>
            <StyledCell>
              <StyledButtons>
                <CustomButton as={StyledButtonDelete} />
                <CustomButton as={StyledButtonRename} />
              </StyledButtons>
            </StyledCell>
          </StyledLineCell>
        ))}
      </StyledCellsBody>
    </StyledTable>
  );
};

export default TableTechniques;
