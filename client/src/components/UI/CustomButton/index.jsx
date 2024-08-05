import { StyledCustomButton } from "./style";

const CustomButton = ({ children, nameButton, typeButton, valueButton }) => {
  return (
    <StyledCustomButton
      type={typeButton}
      name={nameButton}
      value={valueButton}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
