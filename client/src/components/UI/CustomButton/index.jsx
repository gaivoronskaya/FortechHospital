import { StyledCustomButton } from "./style";

const CustomButton = ({
  children,
  nameButton,
  typeButton,
  valueButton,
  handleActionButton,
  as: AsComponent = StyledCustomButton,
}) => {
  return (
    <AsComponent
      type={typeButton}
      name={nameButton}
      value={valueButton}
      onClick={handleActionButton}
    >
      {children}
    </AsComponent>
  );
};

export default CustomButton;
