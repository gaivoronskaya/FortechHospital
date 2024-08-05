import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { GlobalStyle } from "./style";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
