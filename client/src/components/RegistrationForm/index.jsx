  import CustomButton from "../UI/CustomButton";
  import {
    RegistrationFormContainer,
    RegistrationFormTitle,
    RegistrationFormLink,
    RegistrationFormEntrance,
    RegistrationFormContent,
    RegistrationFormContainergtoundImage,
    RegistrationFormWrapper,
  } from "./style";

  const RegistrationForm = ({ title, handleSubmit, children, buttonInfo }) => {
    return (
      <RegistrationFormWrapper>
        <RegistrationFormContainergtoundImage />
        <RegistrationFormContainer onSubmit={handleSubmit}>
          <RegistrationFormContent>
            <RegistrationFormTitle>{title}</RegistrationFormTitle>
            {children}
            <RegistrationFormEntrance>
              <CustomButton
                typeButton="submit"
                nameButton="registrationButton"
                valueButton="register"
              >
                {buttonInfo}
              </CustomButton>
              <RegistrationFormLink href="#">Авторизоваться</RegistrationFormLink>
            </RegistrationFormEntrance>
          </RegistrationFormContent>
        </RegistrationFormContainer>
      </RegistrationFormWrapper>
    );
  };

  export default RegistrationForm;
