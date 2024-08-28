import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 500ms;

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

  .modal-form_confirmation-button {
    background-color: #c5e9ff;
  }
`;

export const StyledModalContent = styled.div`
  min-width: 642px;
  min-height: 327px;
  background-color: #ffffff;
`;

export const StyledModalHeader = styled.header`
  min-width: 642px;
  height: 90px;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2);
`;

export const StyledModalTitle = styled.h1`
  font-size: 36px;
`;

export const StyledHeaderContent = styled.div`
  width: 572px;
  margin-left: auto;
  margin-right: auto;
  height: 90px;
  display: flex;
  align-items: center;
`;

export const StyledModalForm = styled.form`
  width: 572px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  min-height: 100px;
`;

export const StyledModalFooter = styled.footer`
  min-width: 642px;
  height: 90px;
  box-shadow: 0 -4px 0 0 rgba(0, 0, 0, 0.2);
`;

export const StyledFooterContent = styled.div`
  width: 572px;
  margin-left: auto;
  margin-right: auto;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
