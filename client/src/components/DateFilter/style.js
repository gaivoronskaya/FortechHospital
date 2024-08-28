import styled from "styled-components";
import add_filter from "../../images/add_filter.svg"

export const StyledComponent = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;


  .date-filter__button {
    background: none;
    border: none;
    width: 40px;
    height: 40px;
    background-image: url(${add_filter});
  }
`;

export const StyledTitle = styled.h6`
  font-size: 18px;
`