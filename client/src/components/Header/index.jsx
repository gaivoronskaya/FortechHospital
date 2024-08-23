import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
  StyledHeader,
} from "./style.js";

const Header = ({ title, children }) => {
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
