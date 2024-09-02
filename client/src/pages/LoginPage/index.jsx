import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Form from "../../components/Form";
import { HeaderProvider } from "../../provider";
import CustomInput from "../../components/UI/CustomInput";
import useActions from "../../hooks/useActions";

const LoginPage = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    login: "",
    password: "",
  });
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const { error } = useSelector((state) => state.user);
  const { loginUserAction } = useActions();

  useEffect(() => {
    if (error) {
      setIsOpenSnackbar(true);
    }
  }, [error]);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpenSnackbar(false);
  };

  const validateLogin = (event) => {
    event.preventDefault();
    const { login, password } = user;

    if (!login.trim() || !password.trim()) {
      setInputError({
        login: !login ? "Поле не может быть пустым" : "",
        password: !password ? "Поле не может быть пустым" : "",
      });

      return;
    }
    loginUserAction(user);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <div>
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Form
        title="Вход"
        handleSubmit={validateLogin}
        handleChange={handleChangeInput}
        buttonTitle="Войти"
        linkTitle="Зарегистрироваться"
        path="/registration"
      >
        <CustomInput
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          valueInput={user.login}
          handleChangeInput={handleChangeInput}
          error={inputError.login}
        />
        <CustomInput
          label="Пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="password"
          valueInput={user.password}
          handleChangeInput={handleChangeInput}
          error={inputError.password}
        />
      </Form>
    </div>
  );
};

export default LoginPage;
