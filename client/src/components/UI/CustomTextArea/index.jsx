import {
  StyledCustomTextArea,
  StyledTextAreaContainer,
  StyledErrorText,
  StyledLabel,
} from "./style";

const CustomTextArea = ({
  valueTextArea,
  handleChangeTextArea,
  textAreaLabel,
  error,
  nameTextArea,
}) => {
  return (
    <StyledTextAreaContainer>
      {textAreaLabel && <StyledLabel>{textAreaLabel}</StyledLabel>}
      <StyledCustomTextArea
        value={valueTextArea}
        onChange={handleChangeTextArea}
        label={textAreaLabel}
        name={nameTextArea}
      >
        {error && <StyledErrorText>{error}</StyledErrorText>}
      </StyledCustomTextArea>
    </StyledTextAreaContainer>
  );
};

export default CustomTextArea;
