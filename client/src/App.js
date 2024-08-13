import { Routes, Route, useNavigate  } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegistrationPage from "./pages/RegistrationPage";
import TestPage from "./pages/TestPage";

const ProtectedRoute = ({ element }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? element : <Navigate to="/registration" />;
};

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/main");
    }
  }, [isAuth, navigate]);
  
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/main" element={<ProtectedRoute element={<TestPage />} />} />
    </Routes>
  );
};

export default App;
