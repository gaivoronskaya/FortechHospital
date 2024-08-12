import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import TestPage from "./pages/TestPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/main" element={<ProtectedRoute element={<TestPage />} />} />
    </Routes>
  );
};

export default App;
