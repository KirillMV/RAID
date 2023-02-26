import React from "react";
import * as S from "./header_s";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.conteiner className="conteiner">
      <S.logo className="logo">SKYRENT</S.logo>
      <Link to={"/additional"}>
        <S.about className="about">О проекте</S.about>
      </Link>
    </S.conteiner>
  );
};
export default Header;
