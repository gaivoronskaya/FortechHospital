import { CustomInputStyle, Label, InputContainer } from "./style.js";

const CustomInput = ({
  placeholder,
  label,
  typeInput,
  value,
  nameInput,
  onChange,
}) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <CustomInputStyle
        placeholder={placeholder}
        type={typeInput}
        value={value}
        name={nameInput}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default CustomInput;
