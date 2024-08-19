import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Techniques from "../../components/Techniques";
import TableTechniques from "../../components/TableTechniques";
import { StyledButtonExit } from "./style";
import useActions from "../../hooks/useActions";
import CustomButton from "../../components/UI/CustomButton";

const MainPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });
  const [inputError, setInputError] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const { getUserAppointments, sendAppointments } = useActions();
  const complaints = useSelector((state) => state.appointments.appointments);
  const { error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      setIsOpenSnackbar(true);
    }
  }, [error]);

  const handleCloseSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpenSnackbar(false);
  };

  useEffect(() => {
    getUserAppointments();
  }, []);

  const validateComplaints = (event) => {
    event.preventDefault();
    const { name, doctor, date, complaint } = formData;

    if (!name.trim()) {
      setInputError({
        ...inputError,
        name: "Поле не может быть пустым",
      });
    }

    if (!doctor.trim()) {
      setInputError({
        ...inputError,
        doctor: "Поле не может быть пустым",
      });
    }

    if (!date.trim()) {
      setInputError({
        ...inputError,
        date: "Поле не может быть пустым",
      });
    }

    if (!complaint.trim()) {
      setInputError({
        ...inputError,
        complaint: "Поле не может быть пустым",
      });

      return;
    }

    sendAppointments(formData);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Header title="Приемы">
        <CustomButton as={StyledButtonExit}>Выход</CustomButton>
      </Header>
      <Techniques
        handleChangeInput={handleChangeInput}
        formData={formData}
        error={inputError}
        handleSubmit={validateComplaints}
      ></Techniques>
      <TableTechniques techniques={complaints}></TableTechniques>
    </div>
  );
};

export default MainPage;
