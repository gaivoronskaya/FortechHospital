import styled from "styled-components";

export const StyledModal = styled.div`
  min-width: 642px;
  min-height: 180px;
  background-color: #ffffff;

  .modal-form__input,
  .modal-form__selector {
    width: 572px;
    height: 40px;
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-radius: 4px;
    padding-left: 10px;
  }

  .modal-form__buttons {
    width: 146px;
    height: 40px;
    border: 1px solid rgb(0, 0, 0, 0.2);
  }

  .modal-form__confirmation-button {
    background-color: #c5e9ff;
  }
`;

export const StyledHeader = styled.header`
  min-width: 642px;
  height: 90px;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2);
`;

export const StyledHeaderContent = styled.div`
  width: 572px;
  margin-left: auto;
  margin-right: auto;
  height: 90px;
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 36px;
`;

export const StyledFooter = styled.footer`
  min-width: 642px;
  height: 90px;
  box-shadow: 0 -4px 0 0 rgba(0, 0, 0, 0.2);
`;

export const StyledFooterContent = styled.div`
  width: 572px;
  height: 90px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

export const StyledModalForm = styled.form`
  width: 572px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const StyledModalContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
