import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import addNewUser from "../../store/action-creators/users";
// import Alert from '@mui/material/Alert';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, newUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (newUser) {
      navigate("/main");
    }
  }, [newUser, navigate]);

  const validateRegistration = (event) => {
    event.preventDefault();
    const { login, password, repeatPassword } = userData;
    const newErrors = {};

    if (!login.trim()) {
      newErrors.login = "Поле не может быть пустым";
    } else if (login.length < 6) {
      newErrors.login = "Поле не может содержать меньше 6 символов";
    } else if (!/\d/.test(login)) {
      newErrors.login = "Логин должен содержать хотя бы одну цифру";
    }

    if (!password.trim()) {
      newErrors.password = "Поле не может быть пустым";
    } else if (password.length < 6) {
      newErrors.password = "Поле не может содержать меньше 6 символов";
    } else if (!/\d/.test(password)) {
      newErrors.password = "Пароль должен содержать хотя бы одну цифру";
    }

    if (!repeatPassword.trim()) {
      newErrors.repeatPassword = "Поле не может быть пустым";
    } else if (repeatPassword.length < 6) {
      newErrors.repeatPassword = "Поле не может содержать меньше 6 символов";
    } else if (password !== repeatPassword) {
      newErrors.repeatPassword = "Пароли должны совпадать";
    }

    setLocalError(newErrors);
    dispatch(addNewUser(userData));
  };

  useEffect(() => {
    if (localError) {
      const timer = setTimeout(() => {
        setLocalError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [localError]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <>
      {/* {error && <Alert severity="error">{error}</Alert>} */}
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
    </>
  );
};

export default RegistrationPage;
