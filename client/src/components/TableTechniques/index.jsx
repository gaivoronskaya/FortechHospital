import {
  Table,
  Line,
  Cell,
  Title,
  CellsBody,
  ButtonRename,
  ButtonDelete,
  LineCell,
  Buttons,
} from "./style";

const TableTechniques = () => {
  return (
    <Table>
      <Line>
        <Title>Имя</Title>
        <Title>Врач</Title>
        <Title>Дата</Title>
        <Title>Жалобы</Title>
        <Title></Title>
      </Line>
      <CellsBody>
        <LineCell>
          <Cell>Иванов Иван Иванович</Cell>
          <Cell>Иванов Иван Иванович</Cell>
          <Cell>02.01.2020</Cell>
          <Cell>Текст с жалобами пользователя на приеме</Cell>
          <Cell>
            <Buttons>
              <ButtonDelete />
              <ButtonRename />
            </Buttons>
          </Cell>
        </LineCell>
      </CellsBody>
    </Table>
  );
};

export default TableTechniques;
