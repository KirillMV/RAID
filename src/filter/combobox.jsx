import React from "react";
import * as S from './combobox_s'
import { useState } from "react";

function Combobox() {
  let [visible, setVisible] = useState(false);

  function click() {
    setVisible(!visible);
  }

  return (
    <React.Fragment>
      <S.filterButton className="filter_button" onClick={click}>
        <S.city>Страна и город</S.city>
        <S.p>▼</S.p>
      </S.filterButton>
      {visible && <S.dropdown className="dropdown"></S.dropdown>}
    </React.Fragment>
  );
}
export default Combobox;
