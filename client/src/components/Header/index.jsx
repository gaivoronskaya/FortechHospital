import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
} from "./style.js";

const Header = ({ title, children }) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderImage />
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
      {children}
    </StyledHeaderContainer>
  );
};

export default Header;
