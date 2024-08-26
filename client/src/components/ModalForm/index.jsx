import CustomButton from "../UI/CustomButton";
import {
  StyledModal,
  StyledHeader,
  StyledTitle,
  StyledModalForm,
  StyledFooter,
  StyledFooterContent,
  StyledHeaderContent,
} from "./style";

const ModalForm = ({
  closeModal,
  handleSaveChanges,
  modalTitle,
  children,
  buttonTitle,
}) => {
  return (
    <>
      <StyledModal>
        <StyledHeader>
          <StyledHeaderContent>
            <StyledTitle>{modalTitle}</StyledTitle>
          </StyledHeaderContent>
        </StyledHeader>
        <StyledModalForm>{children}</StyledModalForm>
        <StyledFooter>
          <StyledFooterContent>
            <CustomButton
              handleActionButton={closeModal}
              classNameButton="modal-form__buttons"
            >
              {buttonTitle}
            </CustomButton>
            <CustomButton
              handleActionButton={handleSaveChanges}
              classNameButton="modal-form__buttons modal-form__confirmation-button"
            >
              Сохранить
            </CustomButton>
          </StyledFooterContent>
        </StyledFooter>
      </StyledModal>
    </>
  );
};

export default ModalForm;
