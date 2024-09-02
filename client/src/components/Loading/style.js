import styled, {keyframes} from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
  color: #333;
`;

export const StyledSpinner = styled.div`
    width: 50px;
  height: 50px;
  border: 5px solid lightgray;
  border-top: 5px solid gray;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
