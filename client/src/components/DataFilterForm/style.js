import styled from "styled-components";
import deleteForm from "../../images/delete.svg";

export const StyledContainer = styled.div`
  width: 937px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  left: 290px;
  

  .date-filter__inputs {
    width: 230px;
    height: 40px;
  }

  .date-filter__filter-buttons {
    width: 20px;
    height: 40px;
  }

  .date-filter__cancel-button {
    width: 49px;
    height: 40px;
    background-image: url(${deleteForm});
    background-size: cover;
    background-color: none;
    border: none;
  }
`;

export const StyledFormFilter = styled.form`
  display: flex;
  gap: 20px;
  padding-top: 100px;
`;

export const StyletButtonsContainer = styled.form`
  display: flex;
  padding-top: 10px;
  margin-left: 20px;
  gap: 10px;
  padding-top: 100px;
`;
