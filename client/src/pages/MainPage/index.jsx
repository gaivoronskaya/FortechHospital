import { useEffect, useInsertionEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Techniques from "../../components/Techniques";
import TableTechniques from "../../components/TableTechniques";
import { StyledCustomButton } from "../../components/UI/CustomButton/style";
import { ButtonExit } from "./style";
import useActions from "../../hooks/useActions";
import { getUserAppointments } from "../../store/action-creators/users";


const MainPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    date: "",
    complaints: "",
  });
  const { getUserAppointments } = useActions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
       <Header title="Приемы">
        <StyledCustomButton as={ButtonExit}>Выход</StyledCustomButton>
      </Header>
      <Techniques
        handleChangeInput={handleChange}
        formData={formData}
      ></Techniques>
      {/* <TableTechniques techniques={appointments}></TableTechniques>  */}
    </div>
  );
};

export default MainPage;