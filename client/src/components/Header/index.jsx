import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
  StyledShadow,
} from "./style.js";

const Header = ({ title, children }) => {
  return (
    <StyledShadow>
      <StyledHeaderContainer>
        <StyledHeaderImage />
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
        {children}
      </StyledHeaderContainer>
    </StyledShadow>
  );
};

export default Header;
