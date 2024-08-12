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

const Form = ({ title, handleSubmit, children, buttonInfo }) => {
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
              nameButton="registrationButton"
              valueButton="register"
            >
              {buttonInfo}
            </CustomButton>
            <StyledFormLink href="#">Авторизоваться</StyledFormLink>
          </StyledFormEntrance>
        </StyledFormContent>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};

export default Form;
