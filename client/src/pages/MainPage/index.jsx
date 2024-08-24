import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Modal } from "@mui/material";
import Header from "../../components/Header";
import AddingAppointmentForm from "../../components/AddingAppointmentForm";
import TableAppointment from "../../components/TableAppointment";
import ModalForm from "../../components/ModalForm";
import useActions from "../../hooks/useActions";
import { StyledButtonExit, StyledModalContainer } from "./style";

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

  const [newAppointment, setNewAppointment] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  })

  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const { getUserAppointments, createAppointments, updateAppointmentAsync } = useActions();

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditAppointment = (id) => {
    const appointmentToEdit = appointments.find(
      (appointment) => appointment._id === id
    );

    if (!appointmentToEdit) {
      return;
    }

    setEditingId(id);
    setNewAppointment({
      name: appointmentToEdit.name,
      doctor: appointmentToEdit.doctor,
      date: appointmentToEdit.date,
      complaint: appointmentToEdit.complaint,
    });

    handleOpenModal();
  };

  const handleSaveChanges = async () => {
    if (editingId) {
      try {
        await updateAppointmentAsync(editingId, newAppointment);
        handleCloseModal();
      } catch (error) {
        console.error("Error updating appointment:", error);
      }
    }
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
      <TableAppointment appointments={appointments} />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <StyledModalContainer>
          <ModalForm
            closeModal={handleCloseModal}
            headerTitile="Изменить прием"
            dataModal={newAppointment}
            handleSaveChanges={handleSaveChanges}
            handleChangeInput={handleEditAppointment}
          />
        </StyledModalContainer>
      </Modal>
    </div>
  );
};

export default MainPage;
