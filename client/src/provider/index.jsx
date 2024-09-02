import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderContext from "../context";

const HeaderProvider = ({ children }) => {
  const location = useLocation();
  const [title, setTitle] = useState("Default Header Title");

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
        setTitle("f");
    }
  }, [location.pathname]);

  return (
    <HeaderContext.Provider value={{ title }}>
      {children}
    </HeaderContext.Provider>
  );
};

const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export { HeaderProvider, useHeaderContext };
