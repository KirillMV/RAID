import React from "react";
import Wrapper from "./wrapper/wrapper";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
  background-color:black;
  }

`;

function App() {
  return <Wrapper />;
}

export default App;
