import styled from "styled-components";
import icon from "../../images/icon.svg";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 117px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
`;

export const HeaderImage = styled.div`
  width: 106px;
  height: 84px;
  background-image: url(${icon});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 50px;
  position: absolute;
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  margin: auto;
`;