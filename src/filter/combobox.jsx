import React from "react";
import * as S from "./combobox_s";
import { useState } from "react";
import { useEffect } from "react";

function Combobox() {
  let [visible, setVisible] = useState(false);
  let [list, setList] = useState("");

  function setCity(e) {
    console.log(e.target.textContent);
    document.querySelector(".city_country").textContent = e.target.textContent;
    setVisible(false);
  }
  useEffect(() => {
    fetch("https://pythonistic.pythonanywhere.com/places/")
      .then((response) => response.json())
      .then((data) => {
       let newSet = new Set(data.map((el)=>`${el.country}→${el.city}`))
        
        setList(
          Array.from(newSet).map((el) => (
            <S.cityTown
              key={el}
              onClick={setCity}
            >{el}</S.cityTown>
          ))
        );
      });
  }, []);

  function click() {
    setVisible(!visible);
  }

  return (
    <React.Fragment>
      <S.filterButton className="filter_button" onClick={click}>
        <S.city className="city_country">Страна и город</S.city>
        <S.p>▼</S.p>
      </S.filterButton>
      {visible && <S.dropdown className="dropdown">{list}</S.dropdown>}
    </React.Fragment>
  );
}
export default Combobox;
