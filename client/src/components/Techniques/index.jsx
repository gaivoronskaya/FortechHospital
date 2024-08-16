import {
  StyledTechniquesContainer,
  StyledTechniquesInput,
  StyledTechniquesButton,
} from "./style";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";

const Techniques = ({ formData, handleChangeInput, handleActionButton }) => {
  return (
    <StyledTechniquesContainer>
      <CustomInput
        label="Имя:"
        as={StyledTechniquesInput}
        valueInput={formData.name}
        handleChangeInput={handleChangeInput}
        nameInput="name"
      />
      <CustomInput
        label="Врач:"
        as={StyledTechniquesInput}
        valueInput={formData.doctor}
        handleChangeInput={handleChangeInput}
        nameInput="doctor"
      />
      <CustomInput
        label="Дата:"
        as={StyledTechniquesInput}
        valueInput={formData.date}
        handleChangeInput={handleChangeInput}
        nameInput="date"
      />
      <CustomInput
        label="Жалобы:"
        as={StyledTechniquesInput}
        valueInput={formData.complaints}
        handleChangeInput={handleChangeInput}
        nameInput="complaints"
      />
      <CustomButton
        as={StyledTechniquesButton}
        handleActionButton={handleActionButton}
      >
        Добавить
      </CustomButton>
    </StyledTechniquesContainer>
  );
};

export default Techniques;
