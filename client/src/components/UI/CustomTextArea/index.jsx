import {
  StyledCustomTextArea,
  StyledTextAreaContainer,
  StyledErrorText,
  StyledLabel,
} from "./style";

const CustomTextArea = ({
  valueTextArea,
  habdleChangeTextArea,
  textAreaLabel,
  error,
  nameTextArea,
}) => {
  return (
    <StyledTextAreaContainer>
      {textAreaLabel && <StyledLabel>{textAreaLabel}</StyledLabel>}
      <StyledCustomTextArea
        value={valueTextArea}
        onChange={habdleChangeTextArea}
        label={textAreaLabel}
        name={nameTextArea}
      >
        {error && <StyledErrorText>{error}</StyledErrorText>}
      </StyledCustomTextArea>
    </StyledTextAreaContainer>
  );
};

export default CustomTextArea;
