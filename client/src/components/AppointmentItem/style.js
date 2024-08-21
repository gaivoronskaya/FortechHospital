import styled from "styled-components";
import rename from "../../images/rename.svg";
import deleteButton from "../../images/delete.svg";
import CustomButton from "../UI/CustomButton";

export const StyledLineCell = styled.tr`
  text-align: center;
`;

export const StyledCell = styled.td`
  padding: 12px 15px;
  border-right: 1px solid #000000;
`;

export const StyledButtonDelete = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border: none;
  background-image: url(${deleteButton});
`;

export const StyledButtonRename = styled(CustomButton)`
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border: none;
  background-image: url(${rename});
  background-size: cover;
  cursor: pointer;
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 5px;
`;
