import { useHeaderContext } from "../../provider/index.jsx";
import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
  StyledHeader,
} from "./style.js";

const Header = ({ children }) => {
  const { title } = useHeaderContext();

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
