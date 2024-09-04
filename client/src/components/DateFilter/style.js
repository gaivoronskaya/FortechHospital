import styled from "styled-components";
import add_filter from "../../images/add_filter.svg";
import deleteForm from "../../images/delete.svg";

export const StyledComponent = styled.div`
  width: 937px;
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
`;

export const StyledContainer = styled.div`
  width: 937px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  .date-filter__inputs {
    width: 230px;
    height: 40px;
  }

  .date-filter__filter-buttons {
    width: 20px;
    height: 40px;
  }

  .date-filter__cancel-button {
    border: none;
    background-color: #c5e9ff;
    width: 40px;
    height: 40px;
  }

  .date-filter__label-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const StyledFormFilter = styled.form`
  display: flex;
  gap: 20px;
`;

export const StyletButtonsContainer = styled.form`
  display: flex;
  margin-left: 20px;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledButtonImage = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${deleteForm});
  background-size: cover;
  background-color: none;
`;
