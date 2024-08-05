import styled from "styled-components";
import { CustomButtonStyle } from "../UI/CustomButton/style";

export const Table = styled.table`
  border-collapse: collapse;
  margin-top: 40px;
  width: 989px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;

export const Line = styled.tr`
  text-align: center;
  background-color: #c4c4c4;
`;

export const LineCell = styled.tr`
  text-align: center;
`;

export const Cell = styled.td`
  padding: 12px 15px;
  border-right: 1px solid #000;
`;

export const Title = styled.td`
  padding: 12px 15px;
`;

export const CellsBody = styled.tbody`
  border: 1px solid #000;
`;

export const ButtonDelete = styled(CustomButtonStyle)`
  width: 24px;
  height: 24px;
  background-image: url(../../images/delete.svg);
`;

export const ButtonRename = styled(CustomButtonStyle)`
  width: 24px;
  height: 24px;
  background-image: url(../../images/rename.svg);
`;

export const Buttons = styled.div`
  display: flex;
  gap: 5px;
`;
