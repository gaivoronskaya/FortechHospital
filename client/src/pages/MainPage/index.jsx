import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Appointment from "../../components/Appointment";
import TableAppointment from "../../components/TableAppointment";
import { StyledButtonExit } from "./style";
import useActions from "../../hooks/useActions";

const MainPage = () => {
  const [appointmentForm , setAppointmentForm ] = useState({ //изменить нейминг appointmentForm
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

  const { getUserAppointments, createAppointments } = useActions();

  const appointments = useSelector((state) => state.appointments.appointments);
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
    const { name, doctor, date, complaint } = appointmentForm;

    if (!name.trim()) {
      setInputError({
        ...inputError,
        name: "Поле не может быть пустым",
      });

      return;
    }

    if (!doctor.trim()) {
      setInputError({
        ...inputError,
        doctor: "Поле не может быть пустым",
      });

      return;
    }

    if (!date.trim()) {
      setInputError({
        ...inputError,
        date: "Поле не может быть пустым",
      });

      return;
    }

    if (!complaint.trim()) {
      setInputError({
        ...inputError,
        complaint: "Поле не может быть пустым",
      });

      return;
    }

    createAppointments(appointmentForm);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setAppointmentForm((prevData) => ({ ...prevData, [name]: value }));
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
        <StyledButtonExit >Выход</StyledButtonExit>
      </Header>
      <Appointment
        handleChangeInput={handleChangeInput}
        appointmentForm={appointmentForm}
        error={inputError}
        handleSubmit={validateComplaints}
      />
      <TableAppointment appointments={appointments} />
    </div>
  );
};

export default MainPage;
