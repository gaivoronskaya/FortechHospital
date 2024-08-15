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
  return (
    <StyledInputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <AsComponent
        placeholder={placeholder}
        type={typeInput}
        value={valueInput}
        name={nameInput}
        onChange={handleChangeInput}
        id={`input_${nameInput}`}
      />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledInputContainer>
  );
};

export default CustomInput;
