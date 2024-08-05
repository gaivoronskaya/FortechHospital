import Header from "../../components/Header";
import Techniques from "../../components/Techniques";
import TableTechniques from "../../components/TableTechniques";
import { ButtonExit } from "./style";

const MainPage = () => {
  return (
    <>
      <Header title="Приемы">
        <ButtonExit>Выход</ButtonExit>
      </Header>
      <Techniques></Techniques>
      <TableTechniques></TableTechniques>
    </>
  );
};

export default MainPage;
