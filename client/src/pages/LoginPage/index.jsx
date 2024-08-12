import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import Alert from "@mui/material/Alert";
import { StyledAlert, StyledContainer } from "./style";
import useActions from "../../hooks/useActions";

const LoginPage = () => {
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
  const navigate = useNavigate();
  const { error, isAuth } = useSelector((state) => state.user);
  const { loginUserAction } = useActions();

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

  const validateLogin = (event) => {
    event.preventDefault();
    const { login, password } = userData;
    const newErrors = {};

    if (!login.trim()) {
      newErrors.password = "Поле не может быть пустым";
    } else if (!password.trim()) {
      newErrors.login = "Поле не может быть пустым";
    }

    setLocalError(newErrors);
    loginUserAction(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <StyledContainer>
      <StyledAlert>
        {error && <Alert severity="error">{error}</Alert>}
      </StyledAlert>
      <Header title="Вход в систему" />
      <Form
        title="Вход"
        handleSubmit={validateLogin}
        handleChange={handleChange}
        info={userData}
        buttonInfo="Войти"
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
      </Form>
    </StyledContainer>
  );
};

export default LoginPage;
