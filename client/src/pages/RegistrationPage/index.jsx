import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import useActions from "../../hooks/useActions";
import { validateString } from "../../helpers/validate-string";

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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { addNewUser } = useActions();
  const { error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      setSnackbarOpen(true);
    }
  }, [error]);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const validateRegistration = (event) => {
    event.preventDefault();
    const { login, password, repeatPassword } = userData;

    if (!validateString(login)) {
      setInputError({
        ...inputError,
        login: "Поле не может содержать меньше 6 символов или меньше 1 цифры",
      });

      return;
    }

    if (!validateString(password)) {
      setInputError({
        ...inputError,
        password:
          "Поле не может содержать меньше 6 символов или меньше 1 цифры",
      });

      return;
    }

    if (!validateString(repeatPassword)) {
      setInputError({
        ...inputError,
        repeatPassword:
          "Поле не может содержать меньше 6 символов или меньше 1 цифры",
      });

      return;
    }

    addNewUser(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Header title="Зарегистрироваться в системе" />
      <Form
        title="Регистрация"
        handleSubmit={validateRegistration}
        handleChange={handleChange}
        buttonTitle="Зарегистрироваться"
        linkTitle="Авторизоваться"
        transitionLink="/login"
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
    </div>
  );
};

export default RegistrationPage;
