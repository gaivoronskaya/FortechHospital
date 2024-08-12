import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationPage from "./pages/RegistrationPage";
import TestPage from "./pages/TestPage";

const ProtectedRoute = ({ element }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/main" element={<ProtectedRoute element={<TestPage />} />} />
    </Routes>
  );
};

export default App;
