import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import { HeaderProvider } from "../../provider";
import useActions from "../../hooks/useActions";
import useFocus from "../../hooks/autoFocus";
import { validateString } from "../../helpers/validate-string";

const RegistrationPage = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [inputError, setInputError] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const { addNewUser } = useActions();
  const focusInput = useFocus();
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

  const validateRegistration = (event) => {
    event.preventDefault();
    const { login, password, repeatPassword } = user;

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

    addNewUser(user);
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
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <HeaderProvider>
        <Header/>
      </HeaderProvider>
      <Form
        title="Регистрация"
        handleSubmit={validateRegistration}
        handleChangeInput={handleChangeInput}
        buttonTitle="Зарегистрироваться"
        linkTitle="Авторизоваться"
        path="/login"
      >
        <CustomInput
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          valueInput={user.login}
          handleChangeInput={handleChangeInput}
          error={inputError.login}
          inputRef={focusInput}
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
        <CustomInput
          label="Повторите пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="repeatPassword"
          valueInput={user.repeatPassword}
          handleChangeInput={handleChangeInput}
          error={inputError.repeatPassword}
        />
      </Form>
    </div>
  );
};

export default RegistrationPage;
