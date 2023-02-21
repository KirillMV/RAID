import React from "react";
import * as S from './button_s'
import Combobox from "./combobox";
import { useState } from "react";

function Button() {
  let [visible, setVisible] = useState(true);
  function filterMenu() {
    setVisible(false);
  }
  return (
    <React.Fragment>
      {visible ? (
        <S.buttonHome className="button" onClick={filterMenu}>
          Подобрать недвижемость
        </S.buttonHome>
      ) : (
        <div>
          <Combobox />
          <S.inputBox className="input">
            <S.input type="number" min={0} placeholder= "от"  />
            <S.input type="number" min={0} placeholder= "до" />
          </S.inputBox>
          <S.buttonSearch>Подобрать</S.buttonSearch>
        </div>
      )}
    </React.Fragment>
  );
}
export default Button;
