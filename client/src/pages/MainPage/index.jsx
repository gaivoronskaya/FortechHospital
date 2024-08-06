import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Techniques from "../../components/Techniques";
import TableTechniques from "../../components/TableTechniques";
import { CustomButtonStyle } from "../../components/UI/CustomButton/style";
import { ButtonExit, StyledContainer } from "./style";
import { getAppointments } from "../../services";

const MainPage = () => {
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
  const [techniques, setTechniques] = useState([]);

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
      setTechniques((prevTechniques) => [...prevTechniques, formData]);
      setFormData({
        name: "",
        doctor: "",
        date: "",
        complaints: "",
      });
    }
  };

  useEffect(() => {
    getTechniques();
  }, []);

  
  const getTechniques = async () => {
    try {
      const technique = await getAppointments();

      setTechniques(technique);
    } catch (error) {
      console.log("лох")
    }
  };

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
      <TableTechniques techniques={techniques}></TableTechniques>
    </StyledContainer>
  );
};

export default MainPage;
