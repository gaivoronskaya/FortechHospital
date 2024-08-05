import styled from "styled-components";
import CustomInput from "../UI/CustomInput";
import { CustomInputStyle } from "../UI/CustomInput/style";
import { CustomButtonStyle } from "../UI/CustomButton/style";

export const TechniquesContainer = styled.div`
  width: 989px;
  height: 122px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.20);
`;

export const TechniquesInput = styled.input`
  width: 188px;
  height: 45px;
`;

export const TechniquesButton = styled(CustomButtonStyle)`
  width: 131px;
  height: 45px;

`;
