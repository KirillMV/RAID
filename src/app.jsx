import React from "react";
import Wrapper from "./wrapper/wrapper";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./wrapper/routes";

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
  background-color:black;
  }

`;

function App() {
  return <AppRoutes/>;
}

export default App;
