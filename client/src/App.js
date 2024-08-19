import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App = () => {
  // // const isAuth =
  // //   localStorage.getItem("token") || sessionStorage.getItem("token"); // Пример проверки токена
  const isAuth = useSelector((state) => state.user.isAuth);
  const isAuthenticated = () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  return !!token; // Возвращает true, если токен существует
};



// В компоненте
const isToken = isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isToken || isAuth) {
      navigate("/main");
    }
  }, [isToken, isAuth]);

  if (isToken) {
    return (
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
