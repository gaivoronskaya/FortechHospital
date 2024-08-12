import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledCustomInput = styled.input`
  width: 321px;
  height: 40px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 4px;
  padding-left: 10px;
  background-color: #ffffff;
`;

export const StyledErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
