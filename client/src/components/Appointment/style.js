import styled from "styled-components";
import renameButton from "../../images/rename.svg";
import deleteButton from "../../images/delete.svg";

export const StyledLineCell = styled.tr`
  text-align: center;
`;

export const StyledCell = styled.td`
  padding: 12px 15px;
  border-right: 1px solid #000000;
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 5px;

  .styled-buttons_all-button {
    width: 24px;
    height: 24px;
    border: none;
  }

  .styled-buttons_rename-button {
    background-image: url(${renameButton});
  }

  .styled-buttons_delete-button {
    background-image: url(${deleteButton});
  }
`;
