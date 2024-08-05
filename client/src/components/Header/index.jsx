import { HeaderContainer, HeaderImage, HeaderTitle } from "./style.js";

const Header = ({ title,children }) => {
  return (
    <HeaderContainer>
      <HeaderImage />
      <HeaderTitle>{title}</HeaderTitle>
      {children}
    </HeaderContainer>
  );
};

export default Header;
