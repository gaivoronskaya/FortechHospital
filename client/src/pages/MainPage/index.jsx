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
import SortingAppointment from "../../components/SortingAppointment";
import DateFilter from "../../components/DateFilter";
import DataFilterForm from "../../components/DataFilterForm";
import { filterAppointments } from "../../helpers/filter-appointments";
import { sortArray } from "../../helpers/sort-appointments";
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
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortOption, setSortOption] = useState("none");
  const [isOpenFilterForm, setIsOpenFilterForm] = useState(false);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });

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
    const sortedAppointments = sortArray(appointments, sortOption, sortOrder);
    const filtered = filterAppointments(sortedAppointments, dateRange);
    setFilteredAppointments(filtered);
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

  const handleSortInputChange = (selectedValue, type) => {
    if (type === "option") {
      setSortOption(selectedValue);
      setSortOrder(selectedValue === "none" ? "ascending" : sortOrder);
    }

    setSortOrder(selectedValue);
  };

  const applyDateFilter = (range) => {
    setDateRange(range);

    const filtered = filterAppointments(appointments, range);
    setFilteredAppointments(filtered);
  };

  const handleStartDateChange = (e) => {
    setDateRange((prev) => ({ ...prev, start: e.target.value }));
  };

  const handleEndDateChange = (e) => {
    setDateRange((prev) => ({ ...prev, end: e.target.value }));
  };

  const closeFilterForm = () => {
    setIsOpenFilterForm(false);
    setDateRange({ start: "", end: "" });
    setFilteredAppointments(appointments);
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
      <StyledModalContainer>
        <SortingAppointment
          sortOption={sortOption}
          handleSortInputChange={handleSortInputChange}
          sortOrder={sortOrder}
        />
        {isOpenFilterForm ? (
          <DataFilterForm
            closeFilterForm={closeFilterForm}
            applyFilter={applyDateFilter}
            dateRange={dateRange}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
          />
        ) : (
          <DateFilter openFilterForm={() => setIsOpenFilterForm(true)} />
        )}
      </StyledModalContainer>
      <TableAppointment
        appointments={filteredAppointments}
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
