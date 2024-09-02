import { createContext, useContext } from "react";

const HeaderContext = createContext();

export const useHeaderContext = () => useContext(HeaderContext);

export default HeaderContext;