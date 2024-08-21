import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Modal } from "@mui/material";
import Header from "../../components/Header";
import ModalForm from "../../components/ModalForm"
import Appointment from "../../components/Appointment";
import TableAppointment from "../../components/TableAppointment";
import { StyledButtonExit, StyledModalContainer } from "./style";
import useActions from "../../hooks/useActions";

const MainPage = () => {
  const [appointmentDataModalWindow , setAppointmentDataModalWindow ] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });

  const [dataModal, setDataModal] = useState({
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

  const validateComplaints = (event) => {
    event.preventDefault();
    const { name, doctor, date, complaint } = appointmentDataModalWindow;

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

    createAppointments(appointmentDataModalWindow);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setAppointmentDataModalWindow((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeUpdateInput = (e) => {
    const { name, value } = e.target;

    setDataModal((prevData) => ({ ...prevData, [name]: value }));
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
    setDataModal({
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
        await updateAppointmentAsync(editingId, dataModal);
        handleCloseModal();
      } catch (error) {
        console.error("Error updating appointment:", error);
      }
    }
  };

  return (
    <div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <StyledModalContainer>
          <ModalForm
            closeModal={handleCloseModal}
            headerTitile="Изменить прием"
            dataModal={dataModal}
            handleSaveChanges={handleSaveChanges}
            handleChangeInput={handleChangeUpdateInput}
          />
        </StyledModalContainer>
      </Modal>
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
        appointmentDataModalWindow={appointmentDataModalWindow}
        error={inputError}
        handleSubmit={validateComplaints}
      />
      <TableAppointment appointments={appointments} />
    </div>
  );
};

export default MainPage;
