import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import { StyledContainer } from "./style";
import useActions from "../../hooks/useActions";

const RegistrationPage = () => {
  const [userData, setUserData] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [inputError, setInputError] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const { addNewUser } = useActions();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);

  const validateRegistration = (event) => {
    event.preventDefault();
    const errors = { login: "", password: "", repeatPassword: "" };
    const { login, password, repeatPassword } = userData;

    if (login.length < 6 && !/\d/.test(login)) {
      errors.login =
        "Поле не может содержать меньше 6 символов или меньше 1 цифры";
    }

    if (password.length < 6 && !/\d/.test(password)) {
      errors.password =
        "Поле не может содержать меньше 6 символов или меньше 1 цифры";
    }

    if (password !== repeatPassword) {
      errors.repeatPassword = "Пароли должны совпадать";
    }

    setInputError(errors);
    addNewUser(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNavigation = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <StyledContainer>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={7000}
        onClose={() => {}}
      >
        {error && <Alert severity="error">{error}</Alert>}
      </Snackbar>
      <Header title="Зарегистрироваться в системе" />
      <Form
        title="Регистрация"
        handleSubmit={validateRegistration}
        handleChange={handleChange}
        userData={userData}
        linkTitle="Зарегистрироваться"
        handleNavigation={handleNavigation}
      >
        <CustomInput
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          valueInput={userData.login}
          handleChangeInput={handleChange}
          error={inputError.login}
        />
        <CustomInput
          label="Пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="password"
          valueInput={userData.password}
          handleChangeInput={handleChange}
          error={inputError.password}
        />
        <CustomInput
          label="Повторите пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="repeatPassword"
          valueInput={userData.repeatPassword}
          handleChangeInput={handleChange}
          error={inputError.repeatPassword}
        />
      </Form>
    </StyledContainer>
  );
};

export default RegistrationPage;
