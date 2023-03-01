import React from "react";
import * as S from './button_s'
import Combobox from "./combobox";
import { useState } from "react";
import { useEffect } from "react";


function Button(props) {
  let [visible, setVisible] = useState(true);
 let numbers = ['1','2','3','4','5','6','7','8','9','0']

function setNumbers(e){
 e.target.value = e.target.value.split('').filter((el)=>{
  let flag = false;
  for(let i =0;i<numbers.length;i++){
    
    if(el === numbers[i]){
      flag = true;
      
    }
  }
  if(flag){
   
    return el
  }
}).join('')

}

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
        <S.funcBox>
          <Combobox />
          <S.inputBox className="input">
            <S.input className="from" type="text" min={0} placeholder= "Цена от" onInput={setNumbers} />
            <S.input className="to" type="text" min={0} placeholder= "Цена до" onInput={setNumbers}/>
          </S.inputBox>
          <S.buttonSearch onClick={props.getFilter}>Подобрать</S.buttonSearch>
        </S.funcBox>
        

      )}
    </React.Fragment>
  );
}
export default Button;
