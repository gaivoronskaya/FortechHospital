import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const location = useLocation(); // Получаем текущий путь
  const [title, setTitle] = useState('Default Header Title');

  // Обновляем заголовок в зависимости от текущего пути
  useEffect(() => {
    switch (location.pathname) {
      case '/login':
        setTitle('Авторизация');
        break;
      case '/registration':
        setTitle('Регистрация');
        break;
      case '/main':
        setTitle('Приемы');
        break;
      default:
        setTitle('f');
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