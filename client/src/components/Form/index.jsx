import CustomButton from "../UI/CustomButton";
import {
  StyledFormContainer,
  StyledFormTitle,
  StyledFormLink,
  StyledFormEntrance,
  StyledFormContent,
  StyledFormImage,
  StyledFormWrapper,
} from "./style";

const Form = ({
  title,
  handleSubmit,
  children,
  linkTitle,
  handleNavigation,
}) => {
  return (
    <StyledFormWrapper>
      <StyledFormImage />
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledFormContent>
          <StyledFormTitle>{title}</StyledFormTitle>
          {children}
          <StyledFormEntrance>
            <CustomButton
              typeButton="submit"
              nameButton="formNameButton"
              valueButton="formValueButton"
            >
              {linkTitle}
            </CustomButton>
            <StyledFormLink href={handleNavigation}>{linkTitle}</StyledFormLink>
          </StyledFormEntrance>
        </StyledFormContent>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};

export default Form;
