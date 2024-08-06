import styled from "styled-components";
import rename from "../../images/rename.svg";
import del from "../../images/delete.svg";

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin-top: 40px;
  width: 989px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;

export const StyledLine = styled.tr`
  text-align: center;
  background-color: #c4c4c4;
`;

export const StyledLineCell = styled.tr`
  text-align: center;
`;

export const StyledCell = styled.td`
  padding: 12px 15px;
  border-right: 1px solid #000;
`;

export const StyledTitle = styled.td`
  padding: 12px 15px;
`;

export const StyledCellsBody = styled.tbody`
  border: 1px solid #000;
`;

export const StyledButtonDelete = styled.button`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: none;
  background-image: url(${del});
`;

export const StyledButtonRename = styled.button`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: none;
  background-image: url(${rename});
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 5px;
`;
