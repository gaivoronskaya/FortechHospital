import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { HeaderProvider } from "./context";
import App from "./App";
import store from "./store/index.js";
import { GlobalStyle } from "./style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <HeaderProvider>
          <App />
        </HeaderProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
