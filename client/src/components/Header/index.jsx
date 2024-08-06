import { HeaderContainer, HeaderImage, HeaderTitle } from "./style.js";

const Header = ({ StyledTitle,children }) => {
  return (
    <HeaderContainer>
      <HeaderImage />
      <HeaderTitle>{StyledTitle}</HeaderTitle>
      {children}
    </HeaderContainer>
  );
};

export default Header;
