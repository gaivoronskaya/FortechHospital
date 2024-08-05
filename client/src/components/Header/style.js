import styled from "styled-components";
import icon from "../../images/icon.svg";

export const HeaderContainer = styled.header`
  width: 989px;
  height: 117px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.20);
`;

export const HeaderImage = styled.div`
  width: 106px;
  height: 84px;
  background-image: url(${icon});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 50px;
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  margin-left: 30px;
`;
