import { Routes, Route, Navigate } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AuthPage from "./hocs/AuthPage";
import ProtectedPage from "./hocs/ProtectedPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/main"
        element={<ProtectedPage wrappedComponent={<MainPage />} />}
      />
      <Route path="*" element={<Navigate to="/main" />} />
      <Route
        path="/login"
        element={<AuthPage wrappedComponent={<LoginPage />} />}
      />
      <Route
        path="/registration"
        element={<AuthPage wrappedComponent={<RegistrationPage />} />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
