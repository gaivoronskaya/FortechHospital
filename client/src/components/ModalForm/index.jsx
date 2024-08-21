import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import CustomCelector from "../UI/CustomSelector";
import { doctorsOptions } from "../../constants";
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
            labelSelector="Врач:"
            nameSelector="doctor"
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
