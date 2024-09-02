import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import AuthRedirect from "./hocs/AuthRedirect";
import ProtectedPage from "./hocs/ProtectedPage";
import { Suspense } from "react";
import { lazy } from "react";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const MainPage = lazy(() => import("./pages/MainPage"));

  if (isAuth) {
    return (
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/main"
            element={<ProtectedPage wrappedComponent={<MainPage />} />}
          />
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default App;