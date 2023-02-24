import React from "react";
import * as S from "./tape_s";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function TapeItem(props) {
 let[info, setInfo]= useState(false) 
 if(info){
  return(
    <Navigate to={`abouta/${props.pk}`}></Navigate>
  )
 }
  return (
    <div onClick= {()=>{
      setInfo(true)
    }}>
      <S.foto src={props.picture_url} alt="" />
      <p>{`${props.country}→${props.city}`}</p>
      <p>{`${props.description}`}</p>
      <p>{`$ ${props.price}/month`}</p>
    </div>
  );
}

export default TapeItem;
