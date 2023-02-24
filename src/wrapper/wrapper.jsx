import React from "react";
import * as S from "./wrapper_s";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

function Wrapper() {
  return (
    <S.wrapper className="wrapper">
      <Header className="header"></Header>
      <Main className="main"></Main>
      <Footer className="footer"> </Footer>
      
    </S.wrapper>
  );
}

export default Wrapper;
