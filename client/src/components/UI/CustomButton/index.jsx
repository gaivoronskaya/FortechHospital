import { CustomButtonStyle } from "./style";

const CustomButton = ({
  children,
  nameButton,
  typeButton,
  valueButton,
  handleActionButton,
  as: AsComponent = CustomButtonStyle,
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
