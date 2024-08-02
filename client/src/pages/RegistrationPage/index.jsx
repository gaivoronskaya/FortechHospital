import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import RegistrationForm from "../../components/RegistrationForm";
import CustomInput from "../../components/UI/CustomInput";
import Message from "../../components/Message";
import addNewUser from "../../store/action-creators/task";
import withServerResponseHandler from "../../components/hocs";

const RegistrationPage = () => {
  const [info, setInfo] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const validateRegistration = (event) => {
    event.preventDefault();
    const { login, password, repeatPassword } = info;

    if (!login.trim() || !password.trim() || !repeatPassword.trim()) {
      setMessage("Поля не могут быть пустыми");

      return;
    }
    if (login.length < 6 || password.length < 6 || repeatPassword.length < 6) {
      setMessage("Поля не могут содержать меньше 6 символов");

      return;
    }
    if (!/\d/.test(login) || !/\d/.test(password)) {
      setMessage("Логин и пароль должны содержать хотя бы одну цифру");

      return;
    }
    if (password !== repeatPassword) {
      setMessage("Пароли должны совпадать");

      return;
    }
    dispatch(addNewUser(info));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <>
      <Header title="Зарегистрироваться в системе" />
      <RegistrationForm
        title="Регистрация"
        handleSubmit={validateRegistration}
        handleChange={handleChange}
        info={info}
        buttonInfo={"Зарегистрироваться"}
      >
        <Message message={message} />
        <CustomInput
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          value={info.login}
          onChange={handleChange}
        />
        <CustomInput
          label="Пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="password"
          value={info.password}
          onChange={handleChange}
        />
        <CustomInput
          label="Повторите пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="repeatPassword"
          value={info.repeatPassword}
          onChange={handleChange}
        />
      </RegistrationForm>
    </>
  );
};

export default withServerResponseHandler(RegistrationPage);
