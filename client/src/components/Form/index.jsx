import CustomButton from "../UI/CustomButton";
import { Link } from "react-router-dom";
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
            <StyledFormLink>
              <Link onClick={handleNavigation}>{linkTitle}</Link>
            </StyledFormLink>
          </StyledFormEntrance>
        </StyledFormContent>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};

export default Form;
