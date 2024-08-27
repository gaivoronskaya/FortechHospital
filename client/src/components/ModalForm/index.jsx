import { Modal } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import {
  StyledModal,
  StyledHeader,
  StyledTitle,
  StyledModalForm,
  StyledFooter,
  StyledFooterContent,
  StyledHeaderContent,
  StyledModalContainer,
} from "./style";

const ModalForm = ({
  closeModal,
  handleSaveChanges,
  modalTitle,
  children,
  buttonTitle,
  handleSubmit,
}) => {
  return (
    <Modal onClose={closeModal}>
      <StyledModalContainer>
        <StyledModal>
          <StyledHeader>
            <StyledHeaderContent>
              <StyledTitle>{modalTitle}</StyledTitle>
            </StyledHeaderContent>
          </StyledHeader>
          <StyledModalForm handleSubmit={handleSubmit}>
            {children}
          </StyledModalForm>
          <StyledFooter>
            <StyledFooterContent>
              <CustomButton
                handleActionButton={closeModal}
                classNameButton="modal-form__buttons"
              >
                Отмена
              </CustomButton>
              <CustomButton
                handleActionButton={handleSaveChanges}
                typeButton="submit"
                classNameButton="modal-form__buttons modal-form_confirmation-button"
              >
                {buttonTitle}
              </CustomButton>
            </StyledFooterContent>
          </StyledFooter>
        </StyledModal>
      </StyledModalContainer>
    </Modal>
  );
};

export default ModalForm;
