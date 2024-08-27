import CustomButton from "../UI/CustomButton";
import {
  StyledModal,
  StyledModalForm,
  StyledFooterContent,
  StyledHeaderContent,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalContent,
  StyledModalTitle,
} from "./style";

const ModalForm = ({
  closeModal,
  modalTitle,
  children,
  buttonTitle,
  handleSubmit,
  handlePrimaryAction,
  openModal,
}) => {
  if (!openModal) return null;

  return (
    <StyledModal>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledHeaderContent>
            <StyledModalTitle>{modalTitle}</StyledModalTitle>
          </StyledHeaderContent>
        </StyledModalHeader>
        <StyledModalForm handleSubmit={handleSubmit}>
          {children}
        </StyledModalForm>
        <StyledModalFooter>
          <StyledFooterContent>
            <CustomButton
              handleActionButton={closeModal}
              classNameButton="modal-form__buttons"
            >
              Отмена
            </CustomButton>
            <CustomButton
              handleActionButton={handlePrimaryAction}
              typeButton="submit"
              classNameButton="modal-form__buttons modal-form_confirmation-button"
            >
              {buttonTitle}
            </CustomButton>
          </StyledFooterContent>
        </StyledModalFooter>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ModalForm;
