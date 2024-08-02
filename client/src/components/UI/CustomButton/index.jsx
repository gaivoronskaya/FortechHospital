import { CustomButtonStyle } from "./style";

const CustomButton = ({ children, nameButton, typeButton, valueButton }) => {
  return (
    <CustomButtonStyle
      type={typeButton}
      name={nameButton}
      value={valueButton}
    >
      {children}
    </CustomButtonStyle>
  );
};

export default CustomButton;
