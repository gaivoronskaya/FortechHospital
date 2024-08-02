import styled from "styled-components";
import backgroundImage from "../../images/background.svg";

export const RegistrationFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
`;


export const RegistrationFormContainer = styled.div`
  width: 400px;
  height: 453px;
  background-color: #FFFFFF;

`;

export const RegistrationFormContent = styled.form`
  width: 321px;
  margin-left: auto;
  margin-right: auto;
`;

export const RegistrationFormContainergtoundImage = styled.div`
    background-image: url(${backgroundImage});
    width: 450px;
    height: 500px;
    background-repeat: no-repeat;
`;

export const RegistrationFormTitle = styled.h1`
  font-size: 36px;
  margin: 0 0 30px 10px;
  padding-top: 40px; 
`;

export const RegistrationFormLink = styled.a`
  color: #000000;
`;

export const RegistrationFormEntrance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
`;
