  import CustomButton from "../UI/CustomButton";
  import {
    FormContainer,
    FormTitle,
    FormLink,
    FormEntrance,
    FormContent,
    FormContainergtoundImage,
    FormWrapper,
  } from "./style";

  const Form = ({ title, handleSubmit, children, buttonInfo }) => {
    return (
      <FormWrapper>
        <FormContainergtoundImage />
        <FormContainer onSubmit={handleSubmit}>
          <FormContent>
            <FormTitle>{title}</FormTitle>
            {children}
            <FormEntrance>
              <CustomButton
                typeButton="submit"
                nameButton="registrationButton"
                valueButton="register"
              >
                {buttonInfo}
              </CustomButton>
              <FormLink href="#">Авторизоваться</FormLink>
            </FormEntrance>
          </FormContent>
        </FormContainer>
      </FormWrapper>
    );
  };

  export default Form;
