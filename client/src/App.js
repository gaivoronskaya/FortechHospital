import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App = () => {
  const token = localStorage.getItem("accessToken");
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) {
  //     return navigate("/main");
  //   }
  // }, [isAuth]);

  if (isAuth) {
    return (
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
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
