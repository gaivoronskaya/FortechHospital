import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/TestPage";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/main");
    }
  }, [isAuth]);

  if (isAuth) {
    return (
      <Routes>
        <Route path="/main" element={<TestPage />} />
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
