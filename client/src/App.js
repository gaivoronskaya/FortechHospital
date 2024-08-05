import RegistrationPage from "./pages/RegistrationPage";
import TestPage from "./pages/TestPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/main" element={<TestPage />} />
    </Routes>
  );
};

export default App;
