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
  classNameInput,
  classNameInputContainer,
  inputRef,
}) => {
  return (
    <StyledInputContainer className={classNameInputContainer}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledCustomInput
        placeholder={placeholder}
        type={typeInput}
        value={valueInput}
        name={nameInput}
        onChange={handleChangeInput}
        id={`input_${nameInput}`}
        className={classNameInput}
        ref={inputRef}
      />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledInputContainer>
  );
};

export default CustomInput;
