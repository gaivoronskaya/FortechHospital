import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Techniques from "../../components/Techniques";
import TableTechniques from "../../components/TableTechniques";
import { CustomButtonStyle } from "../../components/UI/CustomButton/style";
import { ButtonExit, StyledContainer } from "./style";
import { getAppointment, sendAppointment } from "../../store/action-creators/task";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const { appointments, userId } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    date: "",
    complaints: "",
  });
  const [localError, setLocalError] = useState({
    name: "",
    doctor: "",
    date: "",
    complaints: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Поле не может быть пустым";
      console.log("Пусто")
    }
    if (!formData.doctor.trim()) {
      newErrors.doctor = "Поле не может быть пустым";
    }
    if (!formData.date.trim()) {
      newErrors.date = "Поле не может быть пустым";
    }
    if (!formData.complaints.trim()) {
      newErrors.complaints = "Поле не может быть пустым";
    }
    setLocalError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = () => {
    if (validateForm()) {
      dispatch(sendAppointment(formData));
      setFormData({
        name: "",
        doctor: "",
        date: "",
        complaints: "",
      });
    }
  };

  useEffect(() => {
    if (userId) {
      dispatch(getAppointment());
    }
  }, [userId, dispatch]);

  return (
    <StyledContainer>
      <Header StyledTitle="Приемы">
        <CustomButtonStyle as={ButtonExit}>Выход</CustomButtonStyle>
      </Header>
      <Techniques
        formData={formData}
        handleChangeInput={handleChange}
        handleActionButton={handleAdd}
        error={localError}
      ></Techniques>
      <TableTechniques techniques={appointments}></TableTechniques>
    </StyledContainer>
  );
};

export default MainPage;
