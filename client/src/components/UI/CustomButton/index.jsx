import { StyledCustomButton } from "./style";

const CustomButton = ({
  children,
  nameButton,
  typeButton,
  valueButton,
  handleActionButton,
  classNameButton,
}) => {
  return (
    <StyledCustomButton
      type={typeButton}
      name={nameButton}
      value={valueButton}
      onClick={handleActionButton}
      className={classNameButton}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
