import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
} from "./style.js";

const Header = ({ title }) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderImage />
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </StyledHeaderContainer>
  );
};

export default Header;
