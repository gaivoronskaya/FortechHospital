import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderContext from "../context/header";

const HeaderProvider = ({ children }) => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setTitle("Войти в систему");
        break;
      case "/registration":
        setTitle("Зарегистрироваться в системе");
        break;
      case "/main":
        setTitle("Приемы");
        break;
      default:
        setTitle("");
    }
  }, [location.pathname]);

  return (
    <HeaderContext.Provider value={{title}}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderProvider };
