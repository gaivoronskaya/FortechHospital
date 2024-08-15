  import { Routes, Route, useNavigate } from "react-router-dom";
  import { useEffect } from "react";
  import { useSelector } from "react-redux";
  import RegistrationPage from "./pages/RegistrationPage";
  import LoginPage from "./pages/LoginPage";
  import MainPage from "./pages/MainPage";

  const App = () => {
    // const isAuth = useSelector((state) => state.user.isAuth);
    const isAuth = localStorage.getItem('token') || sessionStorage.getItem('token'); // Пример проверки токена
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuth) {
        navigate("/main");
      }
    }, [isAuth]);

    if (isAuth) {
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
      </Routes>
    );
  };

  export default App;
