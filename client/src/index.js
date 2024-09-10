import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { HeaderProvider } from "./provider/HeaderProvider";
import store from "./store/index";
import { GlobalStyle } from "./style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <HeaderProvider>
          <GlobalStyle />
          <App />
        </HeaderProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
