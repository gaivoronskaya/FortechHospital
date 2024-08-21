import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import CustomCelector from "../UI/CustomCelector";
import {
  StyledModal,
  StyledHeader,
  StyledTitle,
  StyleButtonCancel,
  StyleСonfirmationButton,
  StyledModalForm,
  StyledModalInput,
  StyledFooter,
  StyledModalCelector,
} from "./style";

const ModalForm = ({ closeModal, dataModal, handleSaveChanges, handleChangeInput }) => {
  const doctorsOptions = [
    { value: "doctor 1", label: "Врач 1" },
    { value: "Врач 2", label: "Врач 2" },
    { value: "Врач 3", label: "Врач 3" },
  ];
  return (
    <>
      <StyledModal>
        <StyledHeader>
          <StyledTitle>Изменить прием</StyledTitle>
        </StyledHeader>
        <StyledModalForm>
          <CustomInput
            as={StyledModalInput}
            label="Имя:"
            nameInput="name"
            valueInput={dataModal?.name || ""}
            handleChangeInput={handleChangeInput}
          />
          <CustomCelector
            as={StyledModalCelector}
            labelCelector="Врач:"
            nameCelect="doctor"
            typeCelect="date"
          >
            {doctorsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomCelector>
          <CustomInput
            as={StyledModalInput}
            label="Дата:"
            nameInput="date"
            valueInput={dataModal?.date || ""}
            handleChangeInput={handleChangeInput}
          />
          <CustomInput
            as={StyledModalInput}
            label="Жалобы:"
            nameInput="complaint"
            valueInput={dataModal?.complaint  || ""}
            handleChangeInput={handleChangeInput}
            typeInput="comment"
          />
        </StyledModalForm>
        <StyledFooter>
          <CustomButton handleActionButton={closeModal} as={StyleButtonCancel}>
            Отмена
          </CustomButton>
          <CustomButton as={StyleСonfirmationButton} handleActionButton={handleSaveChanges}>Сохранить</CustomButton>
        </StyledFooter>
      </StyledModal>
    </>
  );
};

export default ModalForm;
