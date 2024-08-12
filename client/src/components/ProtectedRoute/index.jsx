import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
