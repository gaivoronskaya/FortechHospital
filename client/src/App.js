import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App = () => {
  const isToken = localStorage.getItem("accessToken");
  const isAth = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isToken) {
      navigate("/main");
    }
  }, [isAth]);

  if (isAth, isToken) {
    return (
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }
};

export default App;
