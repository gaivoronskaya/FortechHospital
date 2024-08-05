import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import Message from "../../components/Message";
import addNewUser from "../../store/action-creators/users";
import withServerResponseHandler from "../../components/hocs";

const RegistrationPage = () => {
  const [userData, setUserData] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const validateRegistration = (event) => {
    event.preventDefault();
    const { login, password, repeatPassword } = userData;

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
    dispatch(addNewUser(userData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <>
      <Header title="Зарегистрироваться в системе" />
      <Form
        title="Регистрация"
        handleSubmit={validateRegistration}
        handleChange={handleChange}
        info={userData}
        buttonInfo="Зарегистрироваться"
      >
        <Message message={message} />
        <CustomInput
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          valueInput={userData.login}
          handleChangeInput={handleChange}
        />
        <CustomInput
          label="Пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="password"
          valueInput={userData.password}
          handleChangeInput={handleChange}
        />
        <CustomInput
          label="Повторите пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="repeatPassword"
          valueInput={userData.repeatPassword}
          handleChangeInput={handleChange}
        />
      </Form>
    </>
  );
};

export default withServerResponseHandler(RegistrationPage);
