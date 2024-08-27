import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  src: url("/fonts/Roboto-Regular.woff2") format("woff2"),
    url("/fonts/Roboto-Regular.woff") format("woff"),
    url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  }

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

  button, input {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  select {
    cursor: pointer;
  }
`;
