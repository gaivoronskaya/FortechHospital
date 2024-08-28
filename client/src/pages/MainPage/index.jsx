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

  const [editedAppointment, setEditedAppointment] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });

  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const [editedAppointmentId, setEditedAppointmentId] = useState(null);

  const [deletedAppointmentId, setDeletedAppointmentId] = useState(null);

  const [sortOrder, setSortOrder] = useState("increasing");

  const [sortOption, setSortOption] = useState("none");

  const [sortedAppointments, setSortedAppointments] = useState([]);

  const {
    getUserAppointments,
    createAppointments,
    updateAppointmentById,
    deleteAppointmentById,
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

  useEffect(() => {
    setSortedAppointments(
      sortAppointments(appointments, sortOption, sortOrder)
    );
  }, [appointments, sortOption, sortOrder]);

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

  const validateUpdateAppointment = (event) => {
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

    updateAppointmentById(editedAppointmentId, editedAppointment);
    setIsModalEditOpen(false);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setAppointment((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeModalInput = (e) => {
    const { name, value } = e.target;

    setEditedAppointment((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditAppointment = (id) => {
    const appointmentToEdit = appointments.find(
      (appointment) => appointment._id === id
    );

    if (!appointmentToEdit) {
      return;
    }
    setEditedAppointment({
      name: appointmentToEdit.name,
      doctor: appointmentToEdit.doctor,
      date: appointmentToEdit.date,
      complaint: appointmentToEdit.complaint,
    });

    setEditedAppointmentId(id);
    setIsModalEditOpen(true);
  };

  const handleDeleteAppointment = () => {
    deleteAppointmentById(deletedAppointmentId);
    setIsModalDeleteOpen(false);
  };

  const handleDeleteAppointmentId = (id) => {
    const appointmentToDelete = appointments.find(
      (appointment) => appointment._id === id
    );
    if (!appointmentToDelete) {
      return;
    }
    setDeletedAppointmentId(id);
    setIsModalDeleteOpen(true);
  };

  const sortAppointments = (appointments, sortBy, order) => {
    if (sortBy === "none") return appointments;

    const sorted = [...appointments].sort((a, b) => {
      let compareValue = 0;

      if (sortBy === "date") {
        compareValue = new Date(a.date) - new Date(b.date);
      } else if (sortBy === "doctor") {
        compareValue = a.doctor.localeCompare(b.doctor);
      } else if (sortBy === "name") {
        compareValue = a.name.localeCompare(b.name);
      }

      return order === "increasing" ? compareValue : -compareValue;
    });

    return sorted;
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
    if (selectedOption === "none") {
      setSortOrder("increasing");
    }
  };

  const handleOrderChange = (selectedOrder) => {
    setSortOrder(selectedOrder);
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
      <SortingComponent
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        handleOrderChange={handleOrderChange}
        sortOrder={sortOrder}
      />
      <TableAppointment
        appointments={sortedAppointments}
        handleEditAppointment={handleEditAppointment}
        handleDeleteAppointmentId={handleDeleteAppointmentId}
      />
      {isModalEditOpen && (
        <EditingForm
          closeModal={() => setIsModalEditOpen(false)}
          editedAppointment={editedAppointment}
          handleSubmit={validateUpdateAppointment}
          handleChangeInput={handleChangeModalInput}
        />
      )}
      {isModalDeleteOpen && (
        <DeletingForm
          closeModal={() => setIsModalDeleteOpen(false)}
          handleDeleteAppointment={handleDeleteAppointment}
        />
      )}
    </div>
  );
};

export default MainPage;
