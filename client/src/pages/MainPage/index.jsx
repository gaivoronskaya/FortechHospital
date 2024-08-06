import Header from "../../components/Header";
import Techniques from "../../components/Techniques";
import TableTechniques from "../../components/TableTechniques";
import { CustomButtonStyle } from "../../components/UI/CustomButton/style";
import { ButtonExit } from "./style";

const MainPage = () => {
  return (
    <>
      <Header StyledTitle="Приемы">
        <CustomButtonStyle as={ButtonExit}>Выход</CustomButtonStyle>
      </Header>
      <Techniques></Techniques>
      <TableTechniques></TableTechniques>
    </>
  );
};

export default MainPage;
