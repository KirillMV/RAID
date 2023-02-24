import React from "react";
import * as S from './button_s'
import Combobox from "./combobox";
import { useState } from "react";
import { useEffect } from "react";


function Button(props) {
  let [visible, setVisible] = useState(true);

  useEffect(() => {
   ;
  },[]);

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
            <S.input className="from" type="number" min={0} placeholder= "от"  />
            <S.input className="to" type="number" min={0} placeholder= "до" />
          </S.inputBox>
          <S.buttonSearch onClick={props.getFilter}>Подобрать</S.buttonSearch>
        </div>

      )}
    </React.Fragment>
  );
}
export default Button;
