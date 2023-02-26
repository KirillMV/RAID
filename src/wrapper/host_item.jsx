import React from "react";
import * as S from "./host_item_s";

function HostItem(props) {
  return (
    <React.Fragment>
      <S.popa>Имя Хоста</S.popa>
      <S.pisa> {props.name} </S.pisa>
      <S.popa>Телефон</S.popa>
      <S.pisa>{props.number}</S.pisa>
      <S.popa>Адрес</S.popa>
      <S.pisa>{props.adress}</S.pisa>
    </React.Fragment>
  );
}

export default HostItem;
