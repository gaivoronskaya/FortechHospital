import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AuthRedirect from "./hocs/AuthRedirect";
import ProtectedPage from "./hocs/ProtectedPage";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (isAuth) {
    return (
      <Routes>
       <Route
            path="/main"
            element={<ProtectedPage wrappedComponent={<MainPage />} />}
          />
          <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route
            path="/login"
            element={<AuthRedirect wrappedComponent={<LoginPage />} />}
          />
          <Route
            path="/registration"
            element={<AuthRedirect wrappedComponent={<RegistrationPage />} />}
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;