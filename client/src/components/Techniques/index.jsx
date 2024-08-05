import {
  TechniquesContainer,
  TechniquesInput,
  TechniquesButton,
} from "./style";
import CustomInput from "../UI/CustomInput";

const Techniques = () => {
  return (
    <TechniquesContainer>
      <CustomInput label="Имя:" as={TechniquesInput}/>
      <CustomInput label="Имя:" as={TechniquesInput}/>
      <CustomInput label="Имя:" as={TechniquesInput}/>
      <CustomInput label="Имя:" as={TechniquesInput}/>
      <TechniquesButton>Добавить</TechniquesButton>
    </TechniquesContainer>
  );
};

export default Techniques;
