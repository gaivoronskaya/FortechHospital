import { HeaderContainer, HeaderImage, HeaderTitle } from "./style.js";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderImage />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
