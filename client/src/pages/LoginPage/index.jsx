import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import useActions from "../../hooks/useActions";

const LoginPage = () => {
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
  const { error } = useSelector((state) => state.user);
  const { loginUserAction } = useActions();

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

  const validateLogin = (event) => {
    event.preventDefault();
    const { login, password } = userData;

    if (!login.trim() || !password.trim()) {
      setInputError({
        login: !login ? "Поле не может быть пустым" : "",
        password: !password ? "Поле не может быть пустым" : "",
      });

      return;
    }

    loginUserAction(userData);
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
      <Header title="Вход в систему" />
      <Form
        title="Вход"
        handleSubmit={validateLogin}
        handleChange={handleChange}
        buttonTitle="Войти"
        linkTitle="Зарегистрироваться"
        path="/registration"
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
      </Form>
    </div>
  );
};

export default LoginPage;
