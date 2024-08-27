import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useActions from "../../hooks/useActions";
import Header from "../../components/Header";
import AddingAppointmentForm from "../../components/AddingAppointmentForm";
import TableAppointment from "../../components/TableAppointment";
import EditingForm from "../../components/EditingForm";
import DeletingForm from "../../components/DeletingForm";
import SortingComponent from "../../components/SortingComponent";
import { StyledButtonExit } from "./style";

const MainPage = () => {
  const [appointment, setAppointment] = useState({
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

  const [editAppointment, setEditAppointment] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });

  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const {
    getUserAppointments,
    createAppointments,
    updateAppointmentAsync,
    deleteAppointmentAsync,
  } = useActions();

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

  const validateAppointments = (event) => {
    event.preventDefault();
    const { name, doctor, date, complaint } = appointment;
    const currentDate = new Date();

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

    if (!date.trim() || new Date(date) < currentDate) {
      setInputError({
        ...inputError,
        date: "Поле не может быть пустым или содержать прошлое время",
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

    createAppointments(appointment);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setAppointment((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeModalInput = (e) => {
    const { name, value } = e.target;

    setEditAppointment((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditAppointment = (id) => {
    const appointmentToEdit = appointments.find(
      (appointment) => appointment._id === id
    );
    if (appointmentToEdit) {
      setEditAppointment({
        name: appointmentToEdit.name,
        doctor: appointmentToEdit.doctor,
        date: appointmentToEdit.date,
        complaint: appointmentToEdit.complaint,
      });
      setSelectedAppointmentId(id);
      setIsModalEditOpen(true);
    }
  };

  const handleDeleteAppointmentId = (id) => {
    const appointmentToEdit = appointments.find(
      (appointment) => appointment._id === id
    );
    if (appointmentToEdit) {
      setSelectedAppointmentId(id);
      setIsModalDeleteOpen(true);
    }
  };

  const handleSaveChanges = () => {
    updateAppointmentAsync(selectedAppointmentId, editAppointment);
    setIsModalEditOpen(false);
  };

  const handleDeleteAppointment = () => {
    deleteAppointmentAsync(selectedAppointmentId);
    setIsModalDeleteOpen(false);
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
        <StyledButtonExit>Выход</StyledButtonExit>
      </Header>
      <AddingAppointmentForm
        handleChangeInput={handleChangeInput}
        appointment={appointment}
        error={inputError}
        handleSubmit={validateAppointments}
      />
      <SortingComponent></SortingComponent>
      <TableAppointment
        appointments={appointments}
        handleEditAppointment={handleEditAppointment}
        handleDeleteAppointmentId={handleDeleteAppointmentId}
      />
      <EditingForm
        closeModal={() => setIsModalEditOpen(false)}
        openModal={isModalEditOpen}
        headerTitile="Изменить прием"
        editAppointment={editAppointment}
        handleSaveChanges={handleSaveChanges}
        handleChangeInput={handleChangeModalInput}
        modalTitle="Изменить прием"
        buttonTitle="Сохранить"
      />
      <DeletingForm
        closeModal={() => setIsModalDeleteOpen(false)}
        openModal={isModalDeleteOpen}
        modalTitle="Удалить прием"
        buttonTitle="Удалить"
        handleDelete={handleDeleteAppointment}
        handleDeleteAppointment={handleDeleteAppointment}
      />
    </div>
  );
};

export default MainPage;
