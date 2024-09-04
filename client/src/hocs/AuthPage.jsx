import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ wrappedComponent, path }) => {
  const { isAuth } = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      return navigate("/main");
    }
  }, [isAuth]);

  return wrappedComponent;
};

export default AuthPage;