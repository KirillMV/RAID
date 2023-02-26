import React from "react";
import * as S from "./about_item_s"


function AboutaItem(props){

    return(
        <div>
            <S.country>{`${props.country}→${props.city}`}</S.country>
            <S.price>{`$ ${props.price}/month`}</S.price>
            <S.text>{`${props.description}`}</S.text>
            <S.foto src={props.picture_url} alt="" />
            <S.vnutri>Что есть внутри?</S.vnutri>
<div>
    {props.features_on.map(el=><S.galochka key={el}>✓{el}</S.galochka>)}
    {props.features_off.map(el=><S.krestik key={el}>×{el}</S.krestik>)}
</div>


        </div>
    )

}
export default AboutaItem;