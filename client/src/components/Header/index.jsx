import { useContext } from "react";
import HeaderContext from "../../context/header";
import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
  StyledHeader,
} from "./style.js";

const Header = ({ children }) => {
  const { title } = useContext(HeaderContext);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderImage />
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
        {children}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
