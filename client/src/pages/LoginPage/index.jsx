import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import Message from "../../components/Message";
import withServerResponseHandler from "../../components/hocs";
import { loginUserAction } from "../../store/action-creators/task";

const LoginPage = () => {
  const [info, setInfo] = useState({
    login: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const validateLogin = (event) => {
    event.preventDefault();
    const { login, password } = info;

    if (!login.trim() || !password.trim()) {
      setMessage("Поля не могут быть пустыми");

      return;
    }
    dispatch(loginUserAction(info));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    console.log(`Field ${name} updated to: ${value}`);
  };

  const handleNavigation = (event) => {
    event.preventDefault();
    navigate("/registration");
  };

  return (
    <>
      <Header StyledTitle="Вход в систему" />
      <Form
        StyledTitle="Вход"
        handleSubmit={validateLogin}
        handleChange={handleChange}
        info={info}
        buttonInfo={"Войти"}
        linkTitle={"Зарегистрироваться"}
        handleNavigation={handleNavigation}
      >
        <Message message={message} />
        <CustomInput
          onFocus={true}
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          valueInput={info.login}
          handleChangeInput={handleChange}
        />
        <CustomInput
          label="Пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="password"
          valueInput={info.password}
          handleChangeInput={handleChange}
        />
      </Form>
    </>
  );
};

export default withServerResponseHandler(LoginPage);
