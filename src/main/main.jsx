import React from "react";
import * as S from "./main_s";
import Button from "../filter/button";
import { useState } from "react";
import { useEffect } from "react";
import TapeItem from "./tape";


function Main() {
  let [appart, setAppart] = useState("");
  let [filterCounter,setFilterCounter] = useState()
  useEffect(() => {
    fetch("https://pythonistic.pythonanywhere.com/places/")
      .then((response) => response.json())
      .then((data) => {
        setAppart(
          data.map((el) => (
            <TapeItem
              key={el.pk}
              pk={el.pk}
              picture_url={el.picture_url}
              country={el.country}
              city={el.city}
              description={el.description}
              price={el.price}
            ></TapeItem>
          ))
        );
        // console.log(data);
        // console.log(appart);
      });
  }, []);

  function clicer() {
    let nightCity = document
      .querySelector(".city_country")
      .textContent.split("→")[1];
    if (
      document.querySelector(".city_country").textContent === "Страна и город"
    ) {
      nightCity = "";
    }
    let Url = `https://pythonistic.pythonanywhere.com/places/?city=${nightCity}&from=${
      document.querySelector(".from").value
    }&to=${document.querySelector(".to").value}`;
  
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAppart(
          data.map((el) => (
            <TapeItem
              key={el.pk}
              pk={el.pk}
              picture_url={el.picture_url}
              country={el.country}
              city={el.city}
              description={el.description}
              price={el.price}
            ></TapeItem>
          ))
        );
        setFilterCounter(data.length)
        // console.log(data);
        // console.log(appart);
      });
  }

  return (
    <div className="main">
      <S.headBlock className="headBlock">Пора переезжать? </S.headBlock>
      <S.text className="text">
        Находите места для жизни и работы по всему миру
      </S.text>

      <Button getFilter={clicer} />
      {/* <S.button className="button">Подобрать недвижимость</S.button> */}
{Boolean(filterCounter) && <p>Найдено: {filterCounter}</p>}
      <S.centerBlock className="centerBlock"> {appart} </S.centerBlock>
    </div>
    
  );
}

export default Main;
