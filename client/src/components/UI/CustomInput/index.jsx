import {
  StyledCustomInput,
  StyledLabel,
  StyledInputContainer,
  StyledErrorText,
} from "./style.js";

const CustomInput = ({
  placeholder,
  label,
  typeInput,
  valueInput,
  nameInput,
  handleChangeInput,
  error,
  as: AsComponent = StyledCustomInput,
}) => {
  const inputId = `input_${nameInput}`;
  return (
    <StyledInputContainer>
      {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
      <AsComponent
        placeholder={placeholder}
        type={typeInput}
        value={valueInput}
        name={nameInput}
        onChange={handleChangeInput}
      />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledInputContainer>
  );
};

export default CustomInput;