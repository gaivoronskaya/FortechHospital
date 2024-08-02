import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/main" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
