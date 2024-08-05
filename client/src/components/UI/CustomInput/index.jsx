import { StyledCustomInput, StyledLabel, StyledInputContainer } from "./style.js";

const CustomInput = ({
  placeholder,
  label,
  typeInput,
  valueInput,
  nameInput,
  handleChangeInput,
}) => {
  const inputId = `input_${nameInput}`;
  return (
    <StyledInputContainer>
      {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
      <StyledCustomInput
        placeholder={placeholder}
        type={typeInput}
        value={valueInput}
        name={nameInput}
        onChange={handleChangeInput}
      />
    </StyledInputContainer>
  );
};

export default CustomInput;
