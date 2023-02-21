import React from "react";
import * as S from "./main_s";
import Button from "../filter/button";
import { useEffect } from "react";

function Main() {
useEffect(()=>{
  fetch('https://pythonistic.pythonanywhere.com/places', {method: 'GET', redirect: 'follow'})
  .then((response) => response.json())
  .then((data) => console.log(data));
})

  return (
    <div className="main">
      <S.headBlock className="headBlock">Пора переезжать? </S.headBlock>
      <S.text className="text">
        Находите места для жизни и работы по всему миру
      </S.text>
      
      <Button />
      {/* <S.button className="button">Подобрать недвижимость</S.button> */}

      <div className="centerBlock"></div>
    </div>
  );
}

export default Main;
