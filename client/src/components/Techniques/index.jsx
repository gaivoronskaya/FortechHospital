import {
  StyledTechniquesContainer,
  StyledTechniquesInput,
  StyledTechniquesButton,
} from "./style";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";

const Techniques = () => {
  return (
    <StyledTechniquesContainer>
      <CustomInput label="Имя:" as={StyledTechniquesInput}/>
      <CustomInput label="Имя:" as={StyledTechniquesInput}/>
      <CustomInput label="Имя:" as={StyledTechniquesInput}/>
      <CustomInput label="Имя:" as={StyledTechniquesInput}/>
      <CustomButton as={StyledTechniquesButton}>Добавить</CustomButton>
    </StyledTechniquesContainer>
  );
};

export default Techniques;
