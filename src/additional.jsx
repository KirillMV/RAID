import React from "react";
import { Link } from "react-router-dom";
import * as S from './additional_s'
import Footer from "./footer/footer";
function Additional() {
  return (
    <S.content>
     
      <S.header>
      <Link to={"/"}>
      <S.vector src="/img/Vector.svg" alt="ikkk" />
        </Link>
        <h1>SKYRENT</h1>
          {/* <img src="/img/Vector.svg" alt="ikkk" /> */}
      </S.header>
      
      <S.box>
        <S.text>
          Skyrent – MVP сервиса доски объявлений по длительной аренде жилья для
          релокации. Позволяет просматривать карточку, фильтровать и
          просматривать контакты арендатора.
        </S.text>
        <S.robotali>Над проектом работали</S.robotali>
        <S.mail>✓ mr.saatchyan@gmail.com</S.mail>
        <S.mail>✓ shiva-90@mail.ru</S.mail>
        <S.mail>✓ marulin@live.ru</S.mail>
      </S.box>
<Footer/>
    </S.content>
  );
}

export default Additional;
