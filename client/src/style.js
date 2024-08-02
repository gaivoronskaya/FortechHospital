import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 300;
  }

  body {
    background-color: #C5E9FF;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
