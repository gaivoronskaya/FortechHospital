import CustomButton from "../UI/CustomButton";
import { Link } from "react-router-dom";
import {
  FormContainer,
  FormTitle,
  FormLink,
  FormEntrance,
  FormContent,
  FormContainergtoundImage,
  FormWrapper,
} from "./style";

const Form = ({
  StyledTitle,
  handleSubmit,
  children,
  buttonInfo,
  linkTitle,
  handleNavigation,
}) => {
  return (
    <FormWrapper>
      <FormContainergtoundImage />
      <FormContainer onSubmit={handleSubmit}>
        <FormContent>
          <FormTitle>{StyledTitle}</FormTitle>
          {children}
          <FormEntrance>
            <CustomButton
              typeButton="submit"
              nameButton="registrationButton"
              valueButton="register"
            >
              {buttonInfo}
            </CustomButton>
            <FormLink>
              <Link onClick={handleNavigation}>{linkTitle}</Link>
            </FormLink>
          </FormEntrance>
        </FormContent>
      </FormContainer>
    </FormWrapper>
  );
};

export default Form;
