import RegistrationPage from "./pages/RegistrationPage";
import TestPage from "./pages/TestPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<TestPage />} />
    </Routes>
  );
};

export default App;