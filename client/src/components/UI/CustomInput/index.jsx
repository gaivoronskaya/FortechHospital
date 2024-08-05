import { CustomInputStyle, Label, InputContainer } from "./style.js";

const CustomInput = ({
  placeholder,
  label,
  typeInput,
  value,
  nameInput,
  onChange,
  as: AsComponent = CustomInputStyle
}) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <AsComponent
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
