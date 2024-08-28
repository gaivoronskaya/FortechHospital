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
import DateFilter from "../../components/DateFilter/indes";
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

  const [sortOrder, setSortOrder] = useState("increasing");

  const [sortOption, setSortOption] = useState("none");

  const [sortedAppointments, setSortedAppointments] = useState([]);

  const [onClickDateFilter, setOnClickDateFilter] = useState(false);

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

  // const handleCLose = () => {
  //   setOnClickDateFilter(false)
  //   console.log("fdf")
  // }

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
      <StyledModalContainer>
        <SortingComponent
          sortOption={sortOption}
          handleSortChange={handleSortChange}
          handleOrderChange={handleOrderChange}
          sortOrder={sortOrder}
        />
        <DateFilter
          openFilterForm={() => setOnClickDateFilter(true)}
          closeFilterForm={() => setOnClickDateFilter(false)}
        />
      </StyledModalContainer>
      <TableAppointment
        appointments={sortedAppointments}
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
