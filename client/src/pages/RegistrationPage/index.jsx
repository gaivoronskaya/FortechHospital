import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import Alert from "@mui/material/Alert";
import { StyledAlert, StyledContainer } from "./style";
import useActions from "../../hooks/useActions";

const RegistrationPage = () => {
  const [userData, setUserData] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [localError, setLocalError] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const { addNewUser } = useActions();
  const navigate = useNavigate();
  const { error, isAuth } = useSelector((state) => state.user);

  const validateRegistration = (event) => {
    event.preventDefault();
    const { login, password, repeatPassword } = userData;
    const newErrors = {};

    if (!login.trim()) {
      newErrors.login = "Поле не может быть пустым";
    } else if (login.length < 6 && !/\d/.test(login)) {
      newErrors.login =
        "Поле не может содержать меньше 6 символов или меньше 1 цифры";
    }

    if (!password.trim()) {
      newErrors.password = "Поле не может быть пустым";
    } else if (password.length < 6 && !/\d/.test(password)) {
      newErrors.login =
        "Поле не может содержать меньше 6 символов или меньше 1 цифры";
    }

    if (!repeatPassword.trim()) {
      newErrors.repeatPassword = "Поле не может быть пустым";
    } else if (password !== repeatPassword) {
      newErrors.repeatPassword = "Пароли должны совпадать";
    }

    setLocalError(newErrors);
    addNewUser(userData);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/main");
    } else if (error) {
      const timer = setTimeout(() => {
        setLocalError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAuth, navigate, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <StyledContainer>
      <StyledAlert>
        {error && <Alert severity="error">{error}</Alert>}
      </StyledAlert>
      <Header title="Зарегистрироваться в системе" />
      <Form
        title="Регистрация"
        handleSubmit={validateRegistration}
        handleChange={handleChange}
        info={userData}
        buttonInfo="Зарегистрироваться"
      >
        <CustomInput
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          valueInput={userData.login}
          handleChangeInput={handleChange}
          error={localError.login}
        />
        <CustomInput
          label="Пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="password"
          valueInput={userData.password}
          handleChangeInput={handleChange}
          error={localError.password}
        />
        <CustomInput
          label="Повторите пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="repeatPassword"
          valueInput={userData.repeatPassword}
          handleChangeInput={handleChange}
          error={localError.repeatPassword}
        />
      </Form>
    </StyledContainer>
  );
};

export default RegistrationPage;
