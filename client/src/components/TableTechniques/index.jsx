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

const TableTechniques = () => {
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
        <StyledLineCell>
          <StyledCell>Иванов Иван Иванович</StyledCell>
          <StyledCell>Иванов Иван Иванович</StyledCell>
          <StyledCell>02.01.2020</StyledCell>
          <StyledCell>Текст с жалобами пользователя на приеме</StyledCell>
          <StyledCell>
            <StyledButtons>
              <CustomButton as={StyledButtonDelete} />
              <CustomButton as={StyledButtonRename} />
            </StyledButtons>
          </StyledCell>
        </StyledLineCell>
      </StyledCellsBody>
    </StyledTable>
  );
};

export default TableTechniques;
