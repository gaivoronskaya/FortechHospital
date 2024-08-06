import { CustomButtonStyle } from "./style";

const CustomButton = ({
  children,
  nameButton,
  typeButton,
  valueButton,
  as: AsComponent = CustomButtonStyle,
}) => {
  return (
    <AsComponent type={typeButton} name={nameButton} value={valueButton}>
      {children}
    </AsComponent>
  );
};

export default CustomButton;
