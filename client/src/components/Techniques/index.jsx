import {
  StyledTechniquesContainer,
  StyledTechniquesInput,
  StyledTechniquesButton,
} from "./style";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import CustomCelector from "../UI/CustomCelector";

const Techniques = ({
  formData,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
}) => {
  const doctorsOptions = [
    { value: "doctor 1", label: "Врач 1" },
    { value: "Врач 2", label: "Врач 2" },
    { value: "Врач 3", label: "Врач 3" },
  ];
  return (
    <StyledTechniquesContainer onSubmit={handleSubmit}>
      <CustomInput
        label="Имя:"
        as={StyledTechniquesInput}
        valueInput={formData.name}
        typeInput="text"
        handleChangeInput={handleChangeInput}
        nameInput="name"
        error={error.name}
      />
      <CustomCelector
        labelCelector="Врач:"
        valueCelect={formData.doctor}
        nameCelect="doctor"
        onChangeonChangeSelect={handleChangeInput}
      >
        {doctorsOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CustomCelector>
      <CustomInput
        label="Дата:"
        as={StyledTechniquesInput}
        valueInput={formData.date}
        typeInput="date"
        handleChangeInput={handleChangeInput}
        nameInput="date"
        error={error.date}
      />
      <CustomInput
        label="Жалобы:"
        as={StyledTechniquesInput}
        valueInput={formData.complaint}
        handleChangeInput={handleChangeInput}
        typeInput="text"
        nameInput="complaint"
        error={error.complaints}
      />
      <CustomButton
        as={StyledTechniquesButton}
        handleActionButton={handleActionButton}
        typeButton="submit"
        nameButton="mainNameButton"
        valueButton="mainValueButton"
      >
        Добавить
      </CustomButton>
    </StyledTechniquesContainer>
  );
};

export default Techniques;
