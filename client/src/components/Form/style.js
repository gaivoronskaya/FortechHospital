import styled from "styled-components";
import backgroundImage from "../../images/background.svg";

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
`;

export const StyledFormContainer = styled.div`
  width: 400px;
  height: 490px;
  background-color: #ffffff;
`;

export const StyledFormContent = styled.form`
  width: 321px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFormImage = styled.div`
  background-image: url(${backgroundImage});
  width: 450px;
  height: 500px;
  background-repeat: no-repeat;
`;

export const StyledFormTitle = styled.h1`
  font-size: 36px;
  margin: 0 0 30px 10px;
  padding-top: 40px;
`;

export const StyledFormLink = styled.a`
  color: #000000;
`;

export const StyledFormEntrance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
`;
